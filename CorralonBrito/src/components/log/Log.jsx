import React from 'react'
import {Link} from 'react-router-dom'
import StyleLog from './log.module.css'

export default function Log() {
  return (
    <div className={StyleLog.box}>
        <div className={StyleLog.contenedor}>
          <div className={StyleLog.contenedor__superior}>
            {/* Parte superior = LOGIN */}
            <div className={''}>
              {/* Logo */}
              <div className={StyleLog.logo}></div>
            </div>
            <div className={''}>
              {/* Nombre de la Sucursal */}
              <h1>CorralonBrito</h1>
            </div>
          </div>
          <div className={StyleLog.contenedor__inferior}>
            {/* Parte inferior = LOGIN */}
            <form className={StyleLog.formulario} action=''>
              <input className={StyleLog.formulario__imput} type='text' placeholder='Usuario' value={''} />
              <input className={StyleLog.formulario__imput} type='text' placeholder='Contraseña' value={''} />
              <Link to="/home" className={StyleLog.formulario__boton}>Ingresar</Link>
            </form>
          </div>
        </div>
    </div>
  )
}
