import React, { useState } from 'react';
import axios from 'axios';

const Venta = () => {
    const [codigo, setCodigo] = useState('');
    const [cantidad, setCantidad] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Primero, obtenemos el producto por su código
            const productoResponse = await axios.get(`http://localhost:3000/corralonbrito/productos/${codigo}`);
            const producto = productoResponse.data;

            // Luego, creamos la venta con la cantidad y el producto obtenido
            const venta = {};
            if (codigo) venta.Codigo_Producto = codigo;
            if (cantidad) venta.Cantidad_Venta = cantidad;

            const ventaResponse = await axios.post('http://localhost:3000/corralonbrito/ventas', venta);

            console.log(ventaResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                Código del Producto
            </p>
            <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
            <p>
                Cantidad
            </p>
            <input type="number" value={cantidad} onChange={e => setCantidad(e.target.value)} />
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Venta;
