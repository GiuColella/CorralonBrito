import React, { useState, useEffect } from "react";
import axios from "axios";

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const result = await axios.get("http://localhost:3000/corralonbrito/ventas");
        setSales(result.data);
      } catch (error) {
        console.error("Error al cargar ventas:", error);
      }
    };

    fetchSales();
  }, []);

  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale.idVenta}>{sale.nombreCliente}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;
