import React from "react";
import usePronostico from "../hooks/usePronostico.jsx";
import '../Styles/CiudadPronostico.css'

const CiudadPronostico = (props) =>{
      

    return (
        <div className="card cardP">
            <div className="card-body body-P">
                <h5 className="card-title title-P">{props.fechaP}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary subtitleP">{props.cityP} </h6>
                <p className="card-text paisP">{props.paisP}</p>
                <p className="card-text fechaP">{props.temperaturaP} ºC</p>
                <p className="card-text-d descripcionP fst-italic">{props.descripcionP}</p>
                
            </div>
        </div>    

    );
}

export default CiudadPronostico