import React, { useState } from 'react'
import "./styles/Card.css";
import imagen from '../images/playa.jpg'


const Card = (props) => {

    const [playa, setPlaya] = useState(props.playa)

    const xd = () =>{
        setPlaya(playa)
    }
    return (
            <div className="Card123">
                <div className="container">
                <div className="row">
                    <div className="col-3 col-sm3">
                    <img className="Imagen" src={imagen} alt="" />
                    </div>

                    <div className="col-5">
                    <div className="Card-name">{playa.nombre}</div>
                    <div className="Card-location">{playa.ubicacion}</div>
                    <div className="Card-data">{playa.precio}</div>
                    <div className="Card-data">{playa.puntuacion}/10</div>
                    <div className="Card-opinions-title">Descripcion</div>
                    <div className="Card-opinions">{playa.descripcion}</div>

                    </div>
                    <div className="col-4">
                    COMENTARIOS
                    </div>
                </div>
                </div>


                <button onClick={()=>xd()}></button>
                </div>
    )
}

export default Card
