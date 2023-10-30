import React, { useState, useEffect } from "react";
import axios from "axios";
import StyleEnvios from './envios.module.css'

const Envios = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      const result = await axios.get("http://localhost:3000/corralonbrito/envios");
      setShipments(result.data);
    };

    fetchShipments();
  }, []);

  return (
    <div className={StyleEnvios.contenedor__envio}>
      <h2 className={''}>Envios</h2>
      <ul className={''}>
        {shipments.map((shipment, index) => (
          <li className={StyleEnvios.lista} key={index}>{shipment.Direccion_Envio} - {shipment.Cantidad}</li>
        ))}

      </ul>
    </div>
  );
};

export default Envios;