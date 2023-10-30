import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyleFacturacion from './facturacion.module.css'

const Facturacion = () => {
    const [idVenta, setIdVenta] = useState('');

    return (
        <div className={StyleFacturacion.contenedor__facturacion}>
            <label>
                ID de Venta:
                <input type="text" value={idVenta} onChange={(e) => setIdVenta(e.target.value)} />
            </label>
            <Link to={`/factura`}>
                <button className={StyleFacturacion.facturacion__boton}>Ir a Factura</button>
            </Link>
        </div>
    );
};

export default Facturacion;
