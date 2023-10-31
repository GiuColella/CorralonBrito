import React, { useState } from 'react';
import axios from 'axios';
import Style_Ag_Mo from './agregar_modificar.module.css'
import Modificar from './modificar/Modificar';
import Agregar from './agregar/Agregar';

const Agregar_Modificar = () => {
    const [mostrar, setMostrar] = useState('agregar');
    const [Nombre, setNombre] = useState('');
    const [Precio_Unitario, setPrecio_Unitario] = useState('');

    const addProduct = async () => {
        if (Nombre === '') {
            console.log('Por favor, ingresa un nombre de producto.');
            return;
        }
        try {
            await axios.post('http://localhost:3000/corralonbrito/productos', {
                Nombre: Nombre,
                Descripcion: '',
                Marca: '',
                Precio_Unitario: Precio_Unitario,
                Precio_Costo: 0
            });
            console.log('Producto agregado con éxito');
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    const updateProduct = async () => {
        if (Nombre === '') {
            console.log('Por favor, ingresa un nombre de producto.');
            return;
        }
        try {
            await axios.put(`http://localhost:3000/corralonbrito/productos/:id`, { name: Nombre });
            console.log('Producto actualizado con éxito');
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <div className="">
            <div className="">
                {/*Boton de Agregar */}
                <button className={Style_Ag_Mo.botones} onClick={() => setMostrar('agregar')}>Agregar</button>
                {/*Boton de Modificar */}
                <button className={Style_Ag_Mo.botones} onClick={() => setMostrar('modificar')}>Modificar</button>

            </div>
            {mostrar === 'agregar' ? (
                <div className={Style_Ag_Mo.agregar}>
                    <Agregar/>
                </div>
            ) : (
                <div className={Style_Ag_Mo.modificar}>
                    <Modificar/>
                </div>

            )}


        </div>
    );
};

export default Agregar_Modificar;
