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

      const xd = () =>{
          console.log(lista);
      }

    return (
        <div className="Comentario">
            <button onClick={()=>xd()}>as</button>
            <div className="Card-name">
             Comentarios
            </div>
            {

                (lista.length===0)? <h3>No tiene comentarios</h3>:
                lista.map(item=>
                    (
                        <div >

                        <p>
                            {item.contenido}
                        </p>
                        <p>
                            {item.contenido}
                        </p>
                        <p>
                            {item.contenido}
                        </p>
                    </div>)
                )
            }
        </div>
    )
}

export default Comentario
