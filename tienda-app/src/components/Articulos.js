import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';

const Articulos = () => {
    const [productos, setProductos] = useState([]);
    const [usuarioId] = useState("777"); // Simulación de un usuario logueado

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_URL}/productos`);
                const productosData = res.data;
                console.log(productosData)
                const preciosRes = await axios.get(`${API_URL}/special-prices`);
                const preciosEspeciales = preciosRes.data;
                console.log('productosData',productosData[0])
                console.log('preciosEspeciales',preciosEspeciales[0].productoId._id)
                const productosConPrecios = productosData.map(producto => {
                    const precioEspecial = preciosEspeciales.find(p =>
                        p.usuarioId === usuarioId && p.productoId._id === producto._id
                    );
                    console.log('precioEspecial',precioEspecial)
                    return {
                        ...producto,
                        precioNormal: producto.precio,
                        precioEspecial: precioEspecial ? precioEspecial.precioEspecial : null
                    };
                });

                setProductos(productosConPrecios);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchData();
    }, [usuarioId]);

    return (
        <div className="container mt-5">
            {/* ✅ Mostrar el ID del usuario logueado */}
            <div className="alert alert-secondary text-left fw-bold" style={{ maxWidth: "fit-content" }}>
                Usuario Logueado: <span >{usuarioId}</span>
            </div>
            <h2 className="text-center mb-4">Lista de Productos</h2>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio Normal</th>
                        <th>Precio Especial</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto._id}>
                            <td>{producto.name}</td>
                            <td>${producto.price}</td>
                            <td className={producto.precioEspecial ? "text-success fw-bold" : "text-muted"}>
                                {producto.precioEspecial ? `$${producto.precioEspecial}` : "No aplica"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Articulos;
 