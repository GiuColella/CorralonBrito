import React, { useState, useEffect } from "react";
import axios from "axios";

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const result = await axios.get("/api/sales");
      setSales(result.data);
    };

    fetchSales();
  }, []);

  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>{sale.product} - {sale.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;