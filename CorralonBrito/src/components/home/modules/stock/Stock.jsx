import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyleStock from './stock.module.css'

const StockControl = () => {
  const [stock, setStock] = useState([]);

  // Obtener el stock actual
  useEffect(() => {
    const fetchStock = async () => {
      try {
        const result = await axios.get('http://localhost:3000/corralonbrito/stock');
        console.log('Datos del stock:', result.data);
        setStock(result.data);
      } catch (error) {
        console.error('Error al cargar el stock:', error);
      }
    };
    fetchStock();
  }, []);


  // Actualizar el stock
  const updateStock = async (id, newQuantity) => {
    await axios.put(`http://localhost:3000/corralonbrito/stock${id}`, { quantity: newQuantity });
    setStock(stock.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  return (
    <div className={StyleStock.contenedor__stock}>
      <h2>Control de Stock</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item, index) => (
            <tr key={index}>
              <td>{item.Nombre}</td>
              <td>{item.stock_actual}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default StockControl;