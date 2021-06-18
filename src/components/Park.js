import React from 'react';
import { useHistory } from "react-router-dom";

import "./styles/Park.css";

import parkioLogo from '../images/parkio.png'
/*import mapa from '../images/mapa.png'*/
import WrapperMapa from './Mapa.js'
import spain from '../images/spain.png'
import { Link,Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Lista from './Lista.jsx';
import Agregar from './Agregar.jsx';
// import Playa from './Playa.jsx';

class Park extends React.Component{

    /*logOut = () =>{
        console.log("hola");
        const hst=useHistory();
        hst.push({
            pathname: '/',
            state: {isLogged: false}
        })
    }*/

    render(){
        const { logOut } = this.props;
        return (
            <Router>

            <div className="Park">
                <div className="Park-header">
                    <img src={parkioLogo} alt="logo"/>
                    <div className="Park-header-actions">
                        {/* <div className="Park-header-actions-info">Información</div> */}
                        <Link to="/#">Información</Link>
                        <Link to="/busqueda">Búsqueda</Link>
                        <a href="/" onClick={logOut}>SALIR</a>
                        {/*<a href="#" onClick={() => this.showModal(1)}>REGISTRO</a>
                        <a href="#" onClick={() => this.showModal(2)}>ACCEDER</a>*/}

                        <img src={spain} alt="idioma"/>
                    </div>
                </div>
                <div className="Park-center">
                    {/* <Router> */}
                        
                    <Switch>
                        
                        <Route path="/busqueda">
                            <Lista></Lista>
                        </Route>
                        
                        <Route path="/agregar">
                            <Agregar></Agregar>
                        </Route>
                        <Route path="/">

                            {/*
                            <div className="Park-teaser">
                                <h1>Encuentra estacionamiento</h1>
                                <div>En tiempo real</div>
                            </div>
                             <Card /> */}
                        {/*<img src={mapa} alt="mapa"/>*/}
                            <WrapperMapa />
                        </Route>
                
                    </Switch>
                    {/* </Router> */}
               
                </div>
                <div className="Park-footer">
                    Park.io 2020
                </div>
            </div>
            </Router>
            
            );
    }
}



function Historial(){

    let history = useHistory();
    
    function handleClick() {
        history.push({
            pathname: '/',
            state: {isLogged: false}
        });
    }

    return (<Park logOut={handleClick} /> 
        )
}

export default Historial;