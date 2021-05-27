import React from 'react';
import "./styles/Park.css";

import parkioLogo from '../images/parkio.png'
import mapa from '../images/mapa.png'
import spain from '../images/spain.png'

class Park extends React.Component{
    render(){
        return (
            <div className="Park">
                <div className="Park-header">
                    <img src={parkioLogo} alt="logo"/>
                    <div className="Park-header-actions">
                        <div className="Park-header-actions-info">Información</div>
                        <a href="">REGISTRO</a>
                        <a href="">ACCEDER</a>
                        <img src={spain} alt="idioma"/>
                    </div>
                </div>
                <div className="Park-center">
                    <div className="Park-teaser">
                        <h1>Encuentra estacionamiento</h1>
                         en tiempo real
                    </div>
                    <img src={mapa} alt="mapa"/>
                </div>
                <div className="Park-footer">
                    Park.io 2020
                </div>
            </div>
            
            );
    }
}

export default Park;