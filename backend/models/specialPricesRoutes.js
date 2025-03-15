const express = require('express');
const router = express.Router();
const SpecialPrice = require('../models/SpecialPrice');

//  Obtener todos los precios especiales
router.get('/', async (req, res) => {
    try {
        const precios = await SpecialPrice.find().populate('productoId');
        // const preciosEspeciales = await SpecialPrice.find().populate('productoId').lean();

        res.json(precios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//  Agregar un nuevo precio especial
router.post('/', async (req, res) => {
    try {
        console.log(" Datos recibidos en el backend:", req.body); // Verificar que los datos llegan

        const { usuarioId, productoId, precioEspecial } = req.body;
        if (!usuarioId || !productoId || !precioEspecial) {
            return res.status(400).json({ message: "Todos los campos son obligatorios." });
        }

        const nuevoPrecio = new SpecialPrice({ usuarioId, productoId, precioEspecial });
        await nuevoPrecio.save();

        console.log(" Precio especial guardado en MongoDB:", nuevoPrecio); //  Verificar que se guarda en MongoDB
        res.status(201).json(nuevoPrecio);
    } catch (err) {
        console.error(" Error al guardar precio especial:", err);
        res.status(500).json({ message: "Error al guardar el precio especial", error: err.message });
    }
});

//  Consultar si un usuario tiene un precio especial
router.get('/:usuarioId/:productoId', async (req, res) => {
    try {
        const precioEspecial = await SpecialPrice.findOne({
            usuarioId: req.params.usuarioId,
            productoId: req.params.productoId
        });

        res.json(precioEspecial ? precioEspecial.precioEspecial : null);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
