import React, { useState } from 'react';
import axios from 'axios';

const Eliminar = () => {
    const [id, setId] = useState('');

    const deleteProduct = async () => {
        if (id === '') {
            console.log('Por favor, ingresa un ID de producto.');
            return;
        }
        try {
            await axios.delete('http://localhost:3000/corralonbrito/productos/${id}');
            console.log('Producto eliminado con éxito');
            setId(''); // Limpiar el campo de entrada después de la eliminación
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    return (
        <div>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Ingrese ID del producto" />
            <button onClick={deleteProduct}>Eliminar</button>
        </div>
    );
};

export default Eliminar;
