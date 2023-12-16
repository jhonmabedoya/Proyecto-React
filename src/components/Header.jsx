import React from "react";
import  '../Styles/Header.css'


const Header = () => {

    return (
        <div className ="container">
            <div className ="row align-items-center ">
                <div className ="col-md-4 container2">
                    <img src="https://www.uotavalo.edu.ec/wp-content/uploads/2022/01/LOGO-UNIR.png" alt="Descripción de la imagen" className="img-fluid logo-img" />
                 </div>
                <div className="col-md-6 text-center">
                    <h1 className ="heading-1">Pronóstico del Clima</h1>
                    <h2 className ="heading-2">Proyecto Desarrollo de Aplicaciones Web</h2>
                    <h3 className ="heading-3">Especialización en Ingeniería de Software</h3>
                </div>
            </div>
        </div>     

    );

}

export default Header;