const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Importamos las rutas
const productRoutes = require('./models/productRoutes');
const specialPriceRoutes = require('./models/specialPricesRoutes');

// Usamos las rutas
app.use('/api/productos', productRoutes);
app.use('/api/special-prices', specialPriceRoutes);

// Conectamos a MongoDB
mongoose.connect('mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Conectado"))
.catch(err => console.log("Error al conectar con MongoDB:", err));

app.listen(5000, () => console.log('Servidor corriendo en el puerto 5000'));

