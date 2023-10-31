import React from 'react'
import { Link } from 'react-router-dom'
import StyleHome from './home.module.css'
import Facturacion from './modules/facturacion/Facturacion'
import StockControl from './modules/stock/Stock'
import Compra_Venta from './modules/compraVenta/Compra_Venta'

export default function Home() {
    return (
        <div className={StyleHome.contendor}>
            <div className={StyleHome.borde}>
                <div className={StyleHome.barra__superior}>
                    {/* Barra Superior */}
                    <div className="">
                        {/* Logo */}
                        <img className={StyleHome.imagen} src="./logo2.png" alt="" />
                    </div>
                    <div className="">
                        {/* Sucursal */}
                        <div>sucursal</div>
                    </div>
                    <div className="">
                        {/* Usuario */}
                        <Link to='/'><button className={StyleHome.boton}>Salir</button></Link>
                    </div>
                </div>
                <div className={StyleHome.main}>
                    {/* Contenido Main */}
                    <table className={StyleHome.main_table}>
                        <tbody>
                            <tr>
                                <td className={StyleHome.table_cont}>
                                    <StockControl/>
                                    </td>
                                <td className={StyleHome.table_cont}>
                                    <Compra_Venta/>
                                    </td>
                                <td className={StyleHome.table_cont}>
                                    <Facturacion/>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
