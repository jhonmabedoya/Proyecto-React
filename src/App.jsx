import { HashRouter, Route, Routes } from "react-router-dom";
import  { useState } from 'react';
import './App.css'
import CiudadPrincipal from './components/CiudadPrincipal'
import Header from './components/header'
import Footer from './components/Footer'
import Busqueda from './components/Busqueda'
import CiudadPronostico from "./components/CiudadPronostico";
import Pronostico from "./components/Pronostico";

function App({ getCity }) {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');

    
    const manejarCiudadSeleccionada = (ciudad) => {
        setCiudadSeleccionada(ciudad);
        console.log('Ciudad seleccionada en App:', ciudad);
    };

  return (
      

      <div className="container p-4">
        <div className="row">
          <Header />
        </div>
        
        <div className="row">
          <div className="col-md-3">
            <CiudadPrincipal 
              city = "Miami"
              imagen = 'http://bit.ly/4ai2ouh'
              />
          </div>
          <div className="col-md-3">
            <CiudadPrincipal 
              city = "Tunja"
              imagen = 'http://bit.ly/3H32xoh'/>
          </div>
          <div className="col-md-3">
            <CiudadPrincipal 
              city = "Medellin"
              imagen = 'https://acortar.link/DEkT84'/>
          </div>
          <div className="col-md-3">
            <CiudadPrincipal 
              city = "Cali"
              imagen = "https://acortar.link/AqBDxm"/>
          </div>
        </div>

        
        <div className="row">
            <Busqueda onCiudadSeleccionada={manejarCiudadSeleccionada}/>
        </div>

        <div className="row">
            <Pronostico 
                city = {ciudadSeleccionada}
            />
        </div>
        
        
        <div className="row">
            <Footer />
        </div>
      </div>
        
   
  )
}

export default App
