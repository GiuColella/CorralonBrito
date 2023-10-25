import React, { useState, useEffect } from "react";
import axios from "axios";

const Shipments = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      const result = await axios.get("http://localhost:3000/corralonbrito/envios");
      setShipments(result.data);
    };

    fetchShipments();
  }, []);

  return (
    <div>
      <h2>Shipments</h2>
      <ul>
        {shipments.map((shipment) => (
          <li key={shipment.id}>{shipment.product} - {shipment.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Shipments;