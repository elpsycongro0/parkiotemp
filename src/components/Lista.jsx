import React, { useState,useEffect } from 'react'
import Card from './Card.jsx'
import Playa from './Playa.jsx'
import "./styles/Lista.css";
import { Link} from 'react-router-dom'
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
    
    const [seleccionada, setSeleccionada] = useState(false)

    const [datos, setDatos] = useState(
        [
        // genEstacionamiento("1","park","5","6","Plaza","con sombra","5","6"),
        // genEstacionamiento("2","Portales","7","8","Plaza de armas","sin sombra","5","6"),
        // genEstacionamiento("3","parking spot","7","8","Plaza Vea","con sombra, asienteos","5","6"),
        // genEstacionamiento("4","terreno","7","8","Estadio de la Unsa","Cno sombre","5","6"),
        // genEstacionamiento("5","casa","7","8","Av. La Marina","Buena atención","5","6"),
        ]
    )


    
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


    
    
    const actfiltronombre = (s) =>{
      var ds = (s)?s.target.value:""
      setFiltronombre(ds)
    }


    // const xd = () =>{
    //   setDatos(datos)
    //   setN(n)
    //   setSeleccionada(seleccionada)
    //   order()
    //   setFiltronombre(filtronombre)
    //   console.log((datos));
    // }
    const [playa, setPlaya] = useState({})
  const selecc = (xd) =>{
    setSeleccionada(!seleccionada)
    setPlaya(xd)
  }

    return (
        <div>
          {
            (seleccionada===false)?
            <div>

          <Link className="Asd" to="/agregar"> Agregar Playa </Link>
        {/* <button onClick={()=>xd()}>asdsad</button> */}

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
                    <Card sel={selecc} key={item.id} playa={item}></Card>
                    )
                    )
                  }
                
            </div>
                  </div>:
//playa pagina*---------------------------------------
                  <div>
                    <Playa sel={selecc} playa={playa}></Playa>
                    </div>
              }
        </div>
        )
      }
      
      export default Lista
      