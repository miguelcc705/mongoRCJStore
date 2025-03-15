const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number },
    descripcion: { type: String },
    marca: { type: String },
    sku: { type: String },
    tags: { type: Array }
}, { collection: 'productos' });

module.exports = mongoose.model('Product', productSchema);
