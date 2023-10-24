
import React, { useState } from 'react';
import axios from 'axios';

const Facturacion = () => {
 const [factura, setFactura] = useState({
    cliente: '',
    productos: [],
    total: 0,
 });

 const handleChange = (e) => {
    setFactura({ ...factura, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/facturas', factura);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
 };

 return (
    <div>
      <h2>Facturación</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cliente:
          <input type="text" name="cliente" value={factura.cliente} onChange={handleChange} />
        </label>
        <label>
          Productos:
          <input type="text" name="productos" value={factura.productos} onChange={handleChange} />
        </label>
        <label>
          Total:
          <input type="number" name="total" value={factura.total} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
 );
};

export default Facturacion;