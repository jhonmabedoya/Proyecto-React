import React from "react";
import usePronostico from "../hooks/usePronostico.jsx";
import CiudadPronostico from "./CiudadPronostico.jsx";
import '../Styles/Pronostico.css';

const Pronostico = (props) =>{

    const apiKey = `${import.meta.env.VITE_REACT_APP_KEY}`;
    const ciudad = "";
    const PrimeraLetraCiudad = props.city ? props.city.charAt(0).toUpperCase() + props.city.slice(1) : '';
    console.log("ciudad en Pronostico:  ",PrimeraLetraCiudad);
    const {PronosticoData} = usePronostico(PrimeraLetraCiudad)
    console.log("data en pronostico:  ",PronosticoData);

    const pais = PronosticoData?.city?.country || "";
   
    
    const fechaArray = new Array();
    const diaA = new Array();
    const mesA = new Array();
    const anoA = new Array();
    const fechaA = new Array();
    const temperaturaA = new Array();
    const descripcionA = new Array();

   
    const primeraLetraMayusculaP = new Array();
   

    
    for (let i = 0; i < 8; i++) {
        try {
            if (PronosticoData?.list && PronosticoData.list[i]?.dt) {
                temperaturaA[i] = PronosticoData?.list[i].temp.day;
                descripcionA[i] = PronosticoData?.list[i].weather[0].description;
                primeraLetraMayusculaP[i] = descripcionA[i] ? descripcionA[i].charAt(0).toUpperCase() + descripcionA[i].slice(1) : '';
                fechaArray[i] = new Date(PronosticoData.list[i].dt * 1000);
                diaA[i] = fechaArray[i].getDate();
                mesA[i] = fechaArray[i].getMonth() + 1;
                anoA[i] = fechaArray[i].getFullYear();
                fechaA[i] = `${diaA[i]}/${mesA[i]}/${anoA[i]}`;
            } else {
                console.error(`Datos inválidos para el índice ${i}`);
            }
        } catch (error) {
            console.error(`Error al procesar datos para el índice ${i}:`, error.message);
        }
    }

   
    
   

    return (
        <div className="row container-pronostico">
            <div className="col-md-3 mx-auto col-pronostico">
                <CiudadPronostico 
                    cityP = {PrimeraLetraCiudad}
                    fechaP = {fechaA[0]}
                    paisP = {pais}
                    temperaturaP = {temperaturaA[0]}
                    descripcionP = {primeraLetraMayusculaP[0]}
                />
            </div>

            <div className="col-md-3 mx-auto col-pronostico">
                <CiudadPronostico 
                    cityP = {PrimeraLetraCiudad}
                    fechaP = {fechaA[1]}
                    paisP = {pais}
                    temperaturaP = {temperaturaA[1]}
                    descripcionP = {primeraLetraMayusculaP[1]}
                />
            </div>

            <div className="col-md-3 mx-auto col-pronostico">
                <CiudadPronostico 
                    cityP = {PrimeraLetraCiudad}
                    fechaP = {fechaA[2]}
                    paisP = {pais}
                    temperaturaP = {temperaturaA[2]}
                    descripcionP = {primeraLetraMayusculaP[2]}
                />
            </div>

            <div className="col-md-3 mx-auto col-pronostico">
                <CiudadPronostico 
                    cityP = {PrimeraLetraCiudad}
                    fechaP = {fechaA[3]}
                    paisP = {pais}
                    temperaturaP = {temperaturaA[3]}
                    descripcionP = {primeraLetraMayusculaP[3]}
                />
            </div>

            <div className="col-md-3 mx-auto col-pronostico">
                <CiudadPronostico 
                    cityP = {PrimeraLetraCiudad}
                    fechaP = {fechaA[4]}
                    paisP = {pais}
                    temperaturaP = {temperaturaA[4]}
                    descripcionP = {primeraLetraMayusculaP[4]}
                />
            </div>

            <div className="col-md-3 mx-auto col-pronostico">
                <CiudadPronostico 
                    cityP = {PrimeraLetraCiudad}
                    fechaP = {fechaA[5]}
                    paisP = {pais}
                    temperaturaP = {temperaturaA[5]}
                    descripcionP = {primeraLetraMayusculaP[5]}
                />
            </div>

            <div className="col-md-3 mx-auto col-pronostico">
                <CiudadPronostico 
                    cityP = {PrimeraLetraCiudad}
                    fechaP = {fechaA[6]}
                    paisP = {pais}
                    temperaturaP = {temperaturaA[6]}
                    descripcionP = {primeraLetraMayusculaP[6]}
                />
            </div>

            <div className="col-md-3 mx-auto col-pronostico">
                <CiudadPronostico 
                    cityP = {PrimeraLetraCiudad}
                    fechaP = {fechaA[7]}
                    paisP = {pais}
                    temperaturaP = {temperaturaA[7]}
                    descripcionP = {primeraLetraMayusculaP[7]}
                />
            </div>
        </div>

         
          
          

    );
}

export default Pronostico