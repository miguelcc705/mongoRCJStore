const mongoose = require('mongoose');

const specialPriceSchema = new mongoose.Schema({
    usuarioId: { type: String, required: true }, // Relación con un usuario
    productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Relación con un producto
    precioEspecial: { type: Number, required: true }
},{ collection: 'preciosEspecialesCastaño07' });

module.exports = mongoose.model('SpecialPrice', specialPriceSchema);
