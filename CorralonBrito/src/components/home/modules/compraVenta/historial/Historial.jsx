import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Historial() {
  const [transacciones, setTransacciones] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const obtenerTransacciones = async () => {
      try {
        const response = await axios.get('http://localhost:3000/corralonbrito/historial');
        setTransacciones(response.data);
      } catch (error) {
        console.error('Hubo un error al obtener las transacciones:', error);
      }
    };

    obtenerTransacciones();
  }, []);

  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  const transaccionesFiltradas = transacciones ? transacciones.filter((transaccion) => transaccion.idTransaccion.toString() === busqueda) : [];

  return (
    <div>
      <input type="text" value={busqueda} onChange={handleSearchChange} placeholder="Buscar por número de idTransaccion" />
      {transaccionesFiltradas.length > 0 ? (
        <ul>
          {transaccionesFiltradas.map((transaccion) => (
            <li key={transaccion.idTransaccion}>
              <h2>Transacción #{transaccion.idTransaccion}</h2>
              <p>Tipo: {transaccion.Tipo}</p>
              <p>Producto: {transaccion.Producto}</p>
              <p>Cantidad: {transaccion.Cantidad}</p>
              <p>Precio Unitario: ${transaccion.Precio_Unitario}</p>
              <p>Fecha de Transacción: {new Date(transaccion.Fecha_Transaccion).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No se encontraron transacciones para el número de idTransaccion buscado.</div>
      )}
    </div>
  );
}

export default Historial;
