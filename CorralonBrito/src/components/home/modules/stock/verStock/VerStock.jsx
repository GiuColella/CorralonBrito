import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VerStock = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/corralonbrito/productos');
                setProductos(response.data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            }
        };

        fetchProductos();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Stock de Productos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código del Producto</th>
                        <th>Nombre</th>
                        <th>Precio Unitario</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.Codigo_Producto}</td>
                            <td>{producto.Nombre}</td>
                            <td>{producto.Precio_Unitario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VerStock;

{/* Agregar Cantidad */}