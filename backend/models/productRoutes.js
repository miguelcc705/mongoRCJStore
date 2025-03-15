const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// 📌 Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Product.find();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 📌 Agregar un nuevo producto
router.post('/', async (req, res) => {
    const nuevoProducto = new Product({
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria
    });

    try {
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
