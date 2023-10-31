import React, { useState } from 'react';
import axios from 'axios';

const Compra = () => {
    const [idProducto, setIdProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Creamos la compra con el id del producto, la cantidad y la fecha ingresadas
            const compra = {
                idProducto,
                cantidad,
                fechaCompra: fecha
            };

            const response = await axios.post('http://localhost:3000/corralonbrito/compras', compra);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID del Producto:
                <input type="number" value={idProducto} onChange={e => setIdProducto(e.target.value)} />
            </label>
            <label>
                Cantidad:
                <input type="number" value={cantidad} onChange={e => setCantidad(e.target.value)} />
            </label>
            <label>
                Fecha:
                <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Compra;
