import React, { useState } from 'react';
import axios from 'axios';
import Style_Ag_Mo from '../agregar_modificar.module.css'

const Modificar = () => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marca, setMarca] = useState('');
    const [precio_unitario, setPrecioUnitario] = useState('');
    const [precio_costo, setPrecioCosto] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {};
            if (nombre !== '') data.Nombre = nombre;
            if (descripcion !== '') data.Descripcion = descripcion;
            if (marca !== '') data.Marca = marca;
            if (precio_unitario !== '') data.Precio_Unitario = precio_unitario;
            if (precio_costo !== '') data.Precio_Costo = precio_costo;
            const response = await axios.patch('http://localhost:3000/corralonbrito/productos/${id}', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Modificar Producto</h1>
            <form onSubmit={handleSubmit}>
                <p>ID del Producto</p>
                <input type="text" name="id" onChange={(e) => setId(e.target.value)} />
                <p>Nombre del Producto</p>
                <input type="text" name="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <p>Descripcion del Producto</p>
                <input type="text" name="Descripcion" onChange={(e) => setDescripcion(e.target.value)} />
                <p>Marca del Producto</p>
                <input type="text" name="Marca" onChange={(e) => setMarca(e.target.value)} />
                <p>Precio Unitario del Producto</p>
                <input type="text" name="Precio_Unitario" onChange={(e) => setPrecioUnitario(e.target.value)} />
                <p>Precio Costo del Producto</p>
                <input type="text" name="Precio_Costo" onChange={(e) => setPrecioCosto(e.target.value)} />
                <br />
                <button className={Style_Ag_Mo.botones} type="submit">Modificar</button>
            </form>
        </div>
    );
};

export default Modificar;