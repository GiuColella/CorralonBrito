import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Log from './components/log/Log'
import Home from './components/home/Home'
import Factura from './components/home/modules/facturacion/factura/Factura'

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

        <Route exact path='/' element={<Log/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/factura' element={<Factura/>}/>
        

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
