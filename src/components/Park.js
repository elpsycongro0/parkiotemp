import React from 'react';
// import Card from './Card.js';
/*import {Registro} from './Registro.js';
import WrapperRegistro from './RegistroChilds.js';
import RegistroCompleto from './RegistroCompleto.js';
import {Acceder} from './Acceder.js';
import WrapperAcceder from './AccederChilds.js';
import AccederCompleto from './AccederCompleto.js';*/
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
    constructor() {
        super();
        this.logOut = this.logOut.bind(this);
    }

    logOut = () =>{
        console.log("hola");
        this.context.router.push({
            pathname: '/',
            state: {isLogged: false}
        })
    }

    render(){

        return (
            <Router>

            <div className="Park">
                <div className="Park-header">
                    <img src={parkioLogo} alt="logo"/>
                    <div className="Park-header-actions">
                        {/* <div className="Park-header-actions-info">Información</div> */}
                        <Link to="/#">Información</Link>
                        <Link to="/busqueda">Búsqueda</Link>
                        <a href="/" onClick={this.logOut}>SALIR</a>
                        {/*<a href="#" onClick={() => this.showModal(1)}>REGISTRO</a>
                        <a href="#" onClick={() => this.showModal(2)}>ACCEDER</a>*/}

                        <img src={spain} alt="idioma"/>
                    </div>
                </div>
                {/*<Registro show={this.state.show} activate={this.state.which} handleClose={this.hideModal}>
                    {!this.state.isSubmitted ? <WrapperRegistro submitForm=
                       {this.submitForm} /> : <RegistroCompleto />}
                </Registro>
                <Acceder show={this.state.show} activate={this.state.which} handleClose={this.hideModal}>
                    {!this.state.isLogged ? <WrapperAcceder submitForm=
                       {this.logForm} /> : <AccederCompleto />}
                </Acceder>*/}
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

export default Park;