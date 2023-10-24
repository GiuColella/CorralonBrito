
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import StyleLog from './log.module.css';
import axios from 'axios';

export default function Log() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/your-api-url', { username, password });
      // handle your response here
    } catch (error) {
      console.error(error);
    }
 };

 return (
    <div className={StyleLog.box}>
      <div className={StyleLog.contenedor}>
        <div className={StyleLog.contenedor__superior}>
          <div className={''}>
            <div className={StyleLog.logo}></div>
          </div>
          <div className={''}>
            <h1>CorralonBrito</h1>
          </div>
        </div>
        <div className={StyleLog.contenedor__inferior}>
          <form className={StyleLog.formulario} onSubmit={handleSubmit}>
            <input
              className={StyleLog.formulario__imput}
              type='text'
              placeholder='Usuario'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={StyleLog.formulario__imput}
              type='password'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to='/home'><button type="submit" className={StyleLog.formulario__boton}>Ingresar</button></Link>
          </form>
        </div>
      </div>
    </div>
 );
}