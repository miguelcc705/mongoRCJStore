import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';

const Subida = () => {
    const [usuarioId, setUsuarioId] = useState("");
    const [productoId, setProductoId] = useState("");
    const [precioEspecial, setPrecioEspecial] = useState("");
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await axios.get(`${API_URL}/productos`);
                setProductos(res.data); // Guardamos la lista de productos en el estado
            } catch (error) {
                console.error(" Error al obtener productos:", error);
            }
        };
        fetchProductos();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/special-prices`, {
                usuarioId,
                productoId,
                precioEspecial: parseFloat(precioEspecial)
            });
            alert("✅ Precio especial agregado con éxito");
            // Limpiar variables}
            setUsuarioId("");
            setProductoId("");
            setPrecioEspecial("");
        } catch (error) {
            console.error(" Error al agregar precio especial:", error);
            alert(" Hubo un error al agregar el precio especial");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold">Agregar Precio Especial</h2>
            <div className="card p-4 shadow-lg bg-white rounded">
                <form onSubmit={handleSubmit}>
                    {/* Usuario ID */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Usuario ID:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={usuarioId} 
                            onChange={(e) => setUsuarioId(e.target.value)} 
                            required 
                        />
                    </div>

                    {/* Select para Producto ID */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Seleccionar Producto:</label>
                        <select 
                            className="form-select" 
                            value={productoId} 
                            onChange={(e) => setProductoId(e.target.value)} 
                            required
                        >
                            <option value="">Seleccione un producto</option>
                            {productos.map((producto) => (
                                <option key={producto._id} value={producto._id}>
                                    {producto.name} - ${producto.price}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Precio Especial */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Precio Especial:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={precioEspecial} 
                            onChange={(e) => setPrecioEspecial(e.target.value)} 
                            required 
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 fw-bold">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subida;