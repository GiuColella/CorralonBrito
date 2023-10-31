import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyleStock from './stock.module.css'
import Agregar_Modificar from './agregar_modificar/Agregar_Modificar';
import VerProductos from './verStock/VerStock';

const StockControl = () => {
  const [stock, setStock] = useState([]);
  const [view, setView] = useState('VIEW'); // El estado inicial es 'VIEW'

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
      {/* Botón para ver productos */}
      <div className={StyleStock.botones_stock}>
        <button className={StyleStock.botones} onClick={() => setView('VIEW')}>Ver productos</button>
        {/* Botón para agregar/modificar productos */}
        <button className={StyleStock.botones} onClick={() => setView('EDIT')}>Agregar/Modificar productos</button>
      </div>
      {view === 'VIEW' ? (
        <VerProductos/>
      ) : (
        // Aquí puedes renderizar el componente para agregar/modificar productos
        <Agregar_Modificar updateStock={updateStock} />
      )}
    </div>
  );
};

export default StockControl;
