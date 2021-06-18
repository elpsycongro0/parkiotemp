import React from 'react'
import { useEffect } from 'react'
import "./styles/Playa.css";
import { useState } from 'react'

import Comentario from './Comentario.jsx'
const Playa = (props) => {
    const [playa, setPlaya] = useState(props.playa)


    
    const [comentario, setComentario] = useState("s")
    
    const xd = () =>{
        setPlaya(playa)
        console.log(comentario);
    }
    const actCom = (xd) =>{
        setComentario(xd.target.value)
    }

    useEffect(() => {
        // gettodo()
        // console.log(datos);
      },[]);

    return (
            <div>

        <button className={"Boton"} onClick={()=>props.sel()}>Regresar</button>
        <div className="Item">
            
            
            <div className="row">
                    <div className="col-3 col-sm3">
                    <img className="Imagen" src={playa.img} alt={playa.nombre} />
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

                    <Comentario fd={true} id={playa.id}></Comentario>
                    </div>
                    <div className="col-3">

                    {/* <Comentario fd={true} id={playa.id}></Comentario> */}
                    </div>
                    <div className="col-6">
                        <h6>Añadir Comentario</h6>
                        <form >
                            {/* <input onChange={actCom} placeholder="REsumen" type="text"></input> */}
                            <input className={"Form"} onChange={actCom} placeholder="Comentario" type="text"></input>
                            <input className={"Forms"} placeholder="puntaje" type="number"></input>
                        </form>
                        <button onClick={()=>xd()}>Post</button>
                    </div>
                </div>aasds
        </div>
            </div>
    )
}

export default Playa
