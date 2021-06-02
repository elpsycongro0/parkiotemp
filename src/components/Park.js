import React from 'react';
// import Card from './Card.js';
import {Registro} from './Registro.js';
import WrapperRegistro from './RegistroChilds.js';
import RegistroCompleto from './RegistroCompleto.js';
import {Acceder} from './Acceder.js';
import AccederChilds from './AccederChilds.js';
import "./styles/Park.css";

import parkioLogo from '../images/parkio.png'
import mapa from '../images/mapa.png'
import spain from '../images/spain.png'
import { Link,Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Lista from './Lista.jsx';

class Park extends React.Component{
    constructor() {
        super();
        this.state = {
            show: false,
            which: 0,
            isSubmitted: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    showModal = (v) => {
        this.setState({ show: true });
        this.setState({ which: v });
    };

    hideModal = () => {
        this.setState({ show: false });
        this.setState({ which: 0 });
    };

    submitForm = () => {
        this.setState({isSubmitted: true});
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
                        <a href="#" onClick={() => this.showModal(1)}>REGISTRO</a>
                        <a href="#" onClick={() => this.showModal(2)}>ACCEDER</a>
                        <img src={spain} alt="idioma"/>
                    </div>
                </div>
                <Registro show={this.state.show} activate={this.state.which} handleClose={this.hideModal}>
                    {!this.isSubmitted ? <WrapperRegistro submitForm=
                        {this.submitForm} /> : <RegistroCompleto />}
                </Registro>
                <Acceder show={this.state.show} activate={this.state.which} handleClose={this.hideModal}>
                    <AccederChilds />
                </Acceder>
                <div className="Park-center">
                    {/* <Router> */}
                        
                    <Switch>
                        
                        <Route path="/busqueda">
                            <Lista></Lista>
                        </Route>
                        <Route path="/">


                            <div className="Park-teaser">
                                <h1>Encuentra estacionamiento</h1>
                                <div>En tiempo real</div>
                            </div>
                            {/* <Card /> */}
                            <img src={mapa} alt="mapa"/>
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