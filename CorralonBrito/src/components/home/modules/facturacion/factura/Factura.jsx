import React, { useState, useEffect } from 'react';
import axios from 'axios';

const clienteArray = ['Juan Pérez', 'María Rodríguez', 'Carlos Gómez', 'Ana Martínez', 'Luis García'];

function Factura() {
  const [factura, setFactura] = useState(null);

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

  return (
    <div>
      {factura ? (
        <ul>
          {factura.map((facturas, index) => (
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
        <div>Cargando factura...</div>
      )}
    </div>
  );
  
}
export default Factura;