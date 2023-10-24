
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockControl = () => {
 const [stock, setStock] = useState([]);

 // Obtener el stock actual
 useEffect(() => {
    const fetchStock = async () => {
      const result = await axios.get('/api/stock');
      setStock(result.data);
    };

    fetchStock();
 }, []);

 // Actualizar el stock
 const updateStock = async (id, newQuantity) => {
    await axios.put(`/api/stock/${id}`, { quantity: newQuantity });
    setStock(stock.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
 };

 return (
    <div>
      <h2>Control de Stock</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(item => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => updateStock(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => updateStock(item.id, item.quantity - 1)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default StockControl;