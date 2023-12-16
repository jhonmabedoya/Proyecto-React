import React, { useState } from "react";
import useClima from "../hooks/useClima.jsx";
import '../Styles/CiudadPrincipal.css';

const CiudadPrincipal = (props) => {
    const {weatherData} = useClima(props.city);
    
       
    const fechaNueva = new Date(weatherData?.dt * 1000);
    const dia = fechaNueva.getDate();
    const mes = fechaNueva.getMonth() + 1;
    const año = fechaNueva.getFullYear();
    
    const descripcion =  "";
    //const descripcion = weatherData?.weather[0].description || "";
    const primeraLetraMayuscula = descripcion ? descripcion.charAt(0).toUpperCase() + descripcion.slice(1) : '';

    

    return(
        <div className="card ciudadPrincipal">
            <img src= {props.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{weatherData?.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary card-paisP fst-italic">{weatherData?.sys?.country}</h6>
                <p className="card-text card-temperatura-p">{weatherData?.main?.temp} ºC</p>
                <p className="card-text">{`${dia}/${mes}/${año}`}</p>
                <p className="card-text-d descripcion">{primeraLetraMayuscula}</p>
                
            
            </div>
        </div>

    );
}

export default CiudadPrincipal