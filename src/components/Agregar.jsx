import React,{useState} from 'react'
import "./styles/Agregar.css";

const Agregar = () => {

    const [playa, setPlaya] = useState({
        descripcion: "",
            fotos: [
                "link1",
                "link2"
            ],
            id: "",
            img: "link",
            lat: "5°30'",
            long: "6°30'",
            nombre: "",
            precio: "",
            puntuacion: "",
            ubicacion: ""
        
    })
    const actN = (s) =>{
        var sd = (s)?s.target.value:""
        setPlaya({...playa,nombre:sd})
    }
    const actP = (s) =>{
        var sd = (s)?s.target.value:""
        setPlaya({...playa,precio:sd})
    }
    // const actPu = (s) =>{
    //     var sd = (s)?s.target.value:""
    //     setPlaya({...playa,puntuacion:sd})
    // }
    const actU = (s) =>{
        var sd = (s)?s.target.value:""
        setPlaya({...playa,ubicacion:sd})
    }
    const actD = (s) =>{
        var sd = (s)?s.target.value:""
        setPlaya({...playa,descripcion:sd})
    }
    

    const xd = () =>{
        console.log(playa);
    }

    return (
        <div className="Agregar">
            
            <form>
              <div >
                <input type="text" id="Location" onChange={actN} placeholder="Nombre"></input>
                <input type="number" id="Location" onChange={actP}  placeholder="Precio"></input>
                <input type="text" id="Location" onChange={actU} placeholder="Ubicación"></input>
                <input type="text" id="Location" onChange={actD} placeholder="Descripción"></input>
                {/* <input type="text" id="Location"  placeholder="Nombre"></input> */}
              </div>
            </form>
              <button onClick={()=>xd()}>adas</button>
            
        </div>
    )
}

export default Agregar
