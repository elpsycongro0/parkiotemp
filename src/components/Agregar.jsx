import React,{useState,useEffect} from 'react'
import "./styles/Agregar.css";

import axios from 'axios'

const Agregar = () => {

    
    const [ids, setId] = useState("")
    const [name, setName] = useState("")
    const [datos, setDatos] = useState([])
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
            puntuacion: "5",
            ubicacion: ""
        
    })
    // const actN = (s) =>{
    //     var sd = (s)?s.target.value:""
    //     setPlaya({...playa,nombre:sd})
         
    // }
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
    



    const datosGET = () =>{
        axios({
          method:"GET",
          url:"https://parkio-9fcbd-default-rtdb.firebaseio.com/bd/Playas.json"
        }
        )
        .then( response =>{
          setDatos(response.data)
        //    console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
      }

  const datosPost =(temp) =>{
      
    console.log(datos)
    axios({
      method:"PUT",
      url:"https://parkio-9fcbd-default-rtdb.firebaseio.com/bd/Playas.json",
      data:temp
    }
    )
    .then( response =>{
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
  }

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
      const listaPost =(temp) =>{
      
        // console.log(datos)
        axios({
          method:"PUT",
          url:"https://parkio-9fcbd-default-rtdb.firebaseio.com/bd/Comentarios.json",
          data:temp
        }
        )
        .then( response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
      }


      const gettodo = () =>{
          var stri = "https://parkio-9fcbd-default-rtdb.firebaseio.com/bd/Comentarios.json"
        //   console.log(stri);
        listaGET(stri)
        // console.log(datos);
        
        datosGET()
    }    
      useEffect(() => {
        gettodo()
        // console.log(datos);
      },[]);


      const xd = () =>{
        var temp = lista;
        temp[ids] = [
            {
                contenido: "",
                fecha: "05/05/1900",
                idc: "no",
                idusuario: "admin",
                puntaje: "-1"
            }
        ];
        setLista(temp)
        console.log(lista);
        console.log(temp);
        var tempw = playa
        tempw.nombre = name
        datos.push(tempw)
        setDatos(datos)
        datosPost(datos)
        listaPost(lista)
    }

    const tr = (dd) =>{
        // actN(dd)
        var str = dd.target.value.replace(/\s+/g, '');
        setPlaya({...playa,nombre:str})
        setId(str)
        setPlaya({...playa,id:str})
        setName(dd.target.value)
    }
    return (
        <div className="Agregar">
            
            <form>
              <div >
                <input type="text" id="Location" onChange={tr} placeholder="Nombre"></input>
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
