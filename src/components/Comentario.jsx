import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./styles/Card.css";

const Comentario = (props) => {
    const [lista, setLista] = useState([])



    const listaGET = (s) =>{
        axios({
          method:"GET",
          url:s
        }
        )
        .then( response =>{
          setLista(response.data)
        //    console.log(response.data)
            // console.log(lista);
        })
        .catch(error => {
            console.log(error)
        })
      }
      const gettodo = () =>{
          var stri = "https://parkio-9fcbd-default-rtdb.firebaseio.com/bd/Comentarios/"+props.id+".json"
        //   console.log(stri);
        listaGET(stri)
        // console.log(datos);
    }
      
      useEffect(() => {
        gettodo()
        // console.log(datos);
      },[]);


    return (
        <div className="Comentario">
            <div className="Card-name">
             Comentarios
            </div>
            {

                (lista.length===0)? <h6>No tiene comentarios</h6>:
                lista.filter(item=>item.idusuario!=="admin").map(item=>
                    (
                        <div key={item.idc}>

                            <p>
                                {item.idusuario}({item.puntaje}/10): {item.contenido}
                            </p>
                        </div>
                    )
                )
            }
            {/* <h6>Añadir coemtnraio</h6> */}
        </div>
    )
}

export default Comentario
