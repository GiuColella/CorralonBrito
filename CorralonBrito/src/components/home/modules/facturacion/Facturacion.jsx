import React, { useState, useEffect } from 'react';
import axios from 'axios';

const clienteArray = ['Juan Pérez', 'María Rodríguez', 'Carlos Gómez', 'Ana Martínez', 'Luis García'];

function Facturacion() {
  const [factura, setFactura] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const obtenerFactura = async () => {
      try {
        const response = await axios.get('http://localhost:3000/corralonbrito/detallefacturas');
        setFactura(response.data);
      } catch (error) {
        console.error('Hubo un error al obtener la factura:', error);
      }
    };

    obtenerFactura();
  }, []);

  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  const facturasFiltradas = factura ? factura.filter((facturas) => facturas.idVenta.toString() === busqueda) : [];

  return (
    <div>
      <input type="text" value={busqueda} onChange={handleSearchChange} placeholder="Buscar por número de idVenta" />
      {facturasFiltradas.length > 0 ? (
        <ul>
          {facturasFiltradas.map((facturas, index) => (
            <li key={facturas.idVenta}>
              <h2>Factura #{facturas.idVenta}</h2>
              <p>Cliente: {clienteArray[index]}</p>
              <p>Cantidad: {facturas.Cantidad_Venta_Producto}</p>
              <p>Fecha: {facturas.Fecha_Venta}</p>
              <p>Total: ${facturas.Precio_Venta_Total}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No se encontraron facturas para el número de idVenta buscado.</div>
      )}
    </div>
  );
}

export default Facturacion;
