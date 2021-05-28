import React from 'react';
import "./styles/Park.css";

import parkioLogo from '../images/parkio.png'
import mapa from '../images/mapa.png'

class Park extends React.Component{
    render(){
        return (
            <div className="Park">
                <div className="Park-header">
                    <img src={parkioLogo} alt="logo"/>
                </div>
                <div className="Park-center">
                    <div className="Park-teaser">
                        <h1>Encuentra estacionamiento</h1>
                         <div>en tiempo real</div>
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