import React, { useState,useEffect } from 'react'
import Card from './Card.jsx'
import "./styles/Lista.css";
import axios from 'axios'

const Lista = (props) => {

    // const genEstacionamiento = (ids,nombres,precios,puntuacions,ubicacions,descripcions,lats,longs) =>{
    //     return({
    //         id:ids,
    //         nombre:nombres,
    //         precio:precios,
    //         puntuacion:puntuacions,
    //         ubicacion:ubicacions,
    //         descripcion:descripcions,
    //         lat:lats,
    //         long:longs
    //     })
    // }
    
    

    const [datos, setDatos] = useState(
        [
        // genEstacionamiento("1","park","5","6","Plaza","con sombra","5","6"),
        // genEstacionamiento("2","Portales","7","8","Plaza de armas","sin sombra","5","6"),
        // genEstacionamiento("3","parking spot","7","8","Plaza Vea","con sombra, asienteos","5","6"),
        // genEstacionamiento("4","terreno","7","8","Estadio de la Unsa","Cno sombre","5","6"),
        // genEstacionamiento("5","casa","7","8","Av. La Marina","Buena atención","5","6"),
        ]
    )


    const [n, setN] = useState({adsa:""})
    
    const datosGET = () =>{
        axios({
          method:"GET",
          url:"https://parkio-9fcbd-default-rtdb.firebaseio.com/bd/Playas.json"
        }
        )
        .then( response =>{
          setDatos(response.data)
           console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
      }


    // setN({adsa:"da"});

    const gettodo = () =>{

        datosGET()
        // console.log(datos);
    }
    
      useEffect(() => {
        gettodo()
        // console.log(datos);
      },[]);

    const [filtronombre, setFiltronombre] = useState("")

    const filt = (ls,name) =>{

      return(ls.filter(item => item.nombre.toLowerCase().includes(name.toLowerCase()) ))
    }


    const order = (ls) =>{


      return(
        <div>
          hasda
        </div>
      )
    }
    
    const actfiltronombre = (s) =>{
      var ds = (s)?s.target.value:""
      setFiltronombre(ds)
    }


    const xd = () =>{
      setDatos(datos)
      setN(n)
      order()
      setFiltronombre(filtronombre)
      console.log((datos));
  }

    return (
        <div>
        <button onClick={()=>xd()}>asdsad</button>

            <div>
            <form>
          <div >
            {/* <label for="exampleInputEmail1">Ubicación</label> */}
            <input type="email" className="Barra" id="Location" onChange={actfiltronombre}  placeholder="Nombre"></input>
              </div>
            </form>
            </div>

            
            <div>

                {
                    (datos.length===0)?<div className="No-result">No hay Resultados</div>:
                    filt(datos,filtronombre).map(item =>(
                            <Card key={item.id} playa={item}></Card>
                            )
                            )
                        }
                
            </div>
                {n.adsa}
        </div>
    )
}

export default Lista
