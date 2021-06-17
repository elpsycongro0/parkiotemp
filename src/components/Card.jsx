import React, { useState } from 'react'
import "./styles/Card.css";
import imagen from '../images/playa.jpg'
import Comentario from './Comentario.jsx'


const Card = (props) => {

    const [playa, setPlaya] = useState(props.playa)

    const cambio = () =>{
        props.sel(props.playa)
    }
    const xd = () =>{
        setPlaya(playa)
        cambio()
    }
    return (
            <div className="Card123">
                <div className="container">
                <div className="row">
                    <div className="col-3 col-sm3">
                    <img className="Imagen" src={imagen} alt="" />
                    </div>

                    <div className="col-3">
                    <div className="Card-name">{playa.nombre}</div>
                    <div className="Card-location">{playa.ubicacion}</div>
                    <div className="Card-location">Puntuación: {playa.puntuacion}/10 </div>
                    <div className="Card-location">Precio: $/{playa.precio}</div>
                    <div className="Card-opinions-title">Descripción</div>
                    <div className="Card-opinions">{playa.descripcion}</div>

                    </div>
                    <div className="col-6">
                        
                    <Comentario fd ={false} id={playa.id}></Comentario>
                    </div>
                </div>
                </div>


                <button onClick={()=>xd()}>wefwefwe</button>
                </div>
    )
}

export default Card
