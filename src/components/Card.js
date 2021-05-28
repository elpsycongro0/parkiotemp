import React from 'react';
import "./styles/Card.css";

import playa from '../images/playa.jpg'

class Card extends React.Component{
    render(){
        return (
                <div className="Card-container">
                    <img src={playa} alt="" />
                    <div className="Card-name">Nombre de playa</div>
                    <div className="Card-location">Ubicacion</div>
                    <div className="Card-data">Precio</div>
                    <div className="Card-data">Disponibilidad</div>
                    <div className="Card-opinions-title">Opiniones</div>
                    <div className="Card-opinions">"Excelente opción en el centro de la ciudad"</div>
                </div>
            );
    }
}

export default Card;