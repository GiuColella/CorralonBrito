import React, { useState } from 'react';
import axios from 'axios';
import Compra from './compra/Compra';
import Venta from './venta/Venta';
import StyleCompraVenta from './compra_venta.module.css'

const Compra_Venta = () => {
    const [mostrar, setMostrar] = useState('compra');

    
    return (
        <div>
            <button className={StyleCompraVenta.botones} onClick={() => setMostrar('compra')}>Compra</button>
            <button className={StyleCompraVenta.botones} onClick={() => setMostrar('venta')}>Venta</button>
            {mostrar === 'venta' ? (
                <Venta/>
            ) : (
                <Compra/>
            )}
        </div>
    );
};

export default Compra_Venta;
