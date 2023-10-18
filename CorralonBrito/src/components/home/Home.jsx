import React from 'react'
import StyleHome from './home.module.css'
import ButtonUser from './assets/buttonUser/ButtonUser'

export default function Home() {
    return (
        <div className={StyleHome.contendor}>
            <div className={StyleHome.borde}>
                <div className={StyleHome.barra__superior}>
                    {/* Barra Superior */}
                    <div className="">
                        {/* Logo */}
                        <div>logo</div>
                    </div>
                    <div className="">
                        {/* Sucursal */}
                        <div>sucursal</div>
                    </div>
                    <div className="">
                        {/* Usuario */}
                        <ButtonUser/>
                    </div>
                </div>
                <div className={StyleHome.main}>
                    {/* Contenido Main */}
                    <table className={StyleHome.main_table}>
                        <thead>
                            <tr>
                                <th className={StyleHome.table_title}>Stock</th>
                                <th className={StyleHome.table_title}>Ventas y envios</th>
                                <th className={StyleHome.table_title}>Facturacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={StyleHome.table_cont}>Dato 1</td>
                                <td className={StyleHome.table_cont}>Dato 2</td>
                                <td className={StyleHome.table_cont}>Dato 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
