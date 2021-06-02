import React, { useState } from 'react'
import Card from './Card.jsx'
import "./styles/Lista.css";

const Lista = (props) => {

    const genEstacionamiento = (ids,nombres,precios,puntuacions,ubicacions,descripcions) =>{
        return({
            id:ids,
            nombre:nombres,
            precio:precios,
            puntuacion:puntuacions,
            ubicacion:ubicacions,
            descripcion:descripcions
        })
    }
    
    
    const datos =[
        genEstacionamiento("1","park","5","6","Plaza","con sombra"),
        genEstacionamiento("2","Portales","7","8","Plaza de armas","sin sombra"),
        genEstacionamiento("3","parking spot","7","8","Plaza Vea","con sombra, asienteos"),
        genEstacionamiento("4","terreno","7","8","Estadio de la Unsa","Cno sombre"),
        genEstacionamiento("5","casa","7","8","Av. La Marina","Buena atención"),
    ]


    const [n, setN] = useState({adsa:"a"})
    

    const xd = () =>{
        setN(n)
    }
    // setN({adsa:"da"});

    return (
        <div>

            <div>
            <form>
          <div >
            {/* <label for="exampleInputEmail1">Ubicación</label> */}
            <input type="email" className="Barra" id="Location"  placeholder="Ubicación"></input>
              </div>
            </form>
            </div>

            
            <div>

                {
                    datos.map(item =>(
                            <Card key={item.id} playa={item}></Card>
                            )
                            )
                        }
                
            </div>
                {n.adsa}
                <button onClick={()=>xd()}></button>
        </div>
    )
}

export default Lista
