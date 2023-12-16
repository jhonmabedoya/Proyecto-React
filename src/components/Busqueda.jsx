import React, { useState } from "react";
import '../Styles/Busqueda.css'

const Busqueda = (props) => {
    const [city, setCity] = useState('');

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (city.trim() === '') {
            alert('Por favor, ingresa una ciudad antes de buscar.');
            return;
        }

        console.log('Ciudad enviada por el input:', city);
        props.onCiudadSeleccionada(city);
    };
    
   


    return(
        <div className= 'card card-body container-busqueda'>
             <form onSubmit= {handleSearch}>
                 <div className="form-group">
                    <p className="form-busq">Consulta el pronostico del clima en los proximos 8 dias</p>
                     <input type = "text" name = "cityP" placeholder="Introduce una ciudad"
                        className="form-control" autoFocus
                        value={city}
                        onChange={handleInputChange}/>
                    <p className="form-ayud">Puedes consultar el clima en cualquier ciudad del mundo</p>
                 </div>
                 <button 
                    className="btn btn-success btn-block btn-full-width boton"
                    type="submit">
                    Buscar
                 </button>
                 
             </form> 
         </div>
    );
}

export default Busqueda;