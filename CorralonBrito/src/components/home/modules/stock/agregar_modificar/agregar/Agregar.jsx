import React, { useState } from 'react';
import axios from 'axios';
import Style_Ag_Mo from '../agregar_modificar.module.css'

const Agregar = () => {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/corralonbrito/productos', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Agregar Producto</h1>
            <form onSubmit={handleSubmit}>
                <p>Nombre del Producto</p>
                <input type="text" name="Nombre" onChange={handleChange} />
                <p>Descripcion</p>
                <input type="text" name="Descripcion" onChange={handleChange} />
                <p>Marca</p>
                <input type="text" name="Marca" onChange={handleChange} />
                <p>Precio de Venta por unidad</p>
                <input type="text" name="Precio_Unitario" onChange={handleChange} />
                <p>Precio de Compra</p>
                <input type="text" name="Precio_Costo" onChange={handleChange} />
                <br />
                <button className={Style_Ag_Mo.botones} type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default Agregar;
