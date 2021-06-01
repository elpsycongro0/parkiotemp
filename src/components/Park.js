import React from 'react';
import Card from './Card.js';
import {Registro} from './Registro.js';
import RegistroChilds from './RegistroChilds.js';
import {Acceder} from './Acceder.js';
import AccederChilds from './AccederChilds.js';
import "./styles/Park.css";

import parkioLogo from '../images/parkio.png'
import mapa from '../images/mapa.png'
import spain from '../images/spain.png'

class Park extends React.Component{
    constructor() {
        super();
        this.state = {
            show: false,
            which: 0
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = (v) => {
        this.setState({ show: true });
        this.setState({ which: v });
    };

    hideModal = () => {
        this.setState({ show: false });
        this.setState({ which: 0 });
    };

    render(){
        return (
            <div className="Park">
                <div className="Park-header">
                    <img src={parkioLogo} alt="logo"/>
                    <div className="Park-header-actions">
                        <div className="Park-header-actions-info">Información</div>
                        <a href="#" onClick={() => this.showModal(1)}>REGISTRO</a>
                        <a href="#" onClick={() => this.showModal(2)}>ACCEDER</a>
                        <img src={spain} alt="idioma"/>
                    </div>
                </div>
                <Registro show={this.state.show} activate={this.state.which} handleClose={this.hideModal}>
                    <RegistroChilds />
                </Registro>
                <Acceder show={this.state.show} activate={this.state.which} handleClose={this.hideModal}>
                    <AccederChilds />
                </Acceder>
                <div className="Park-center">
                    <div className="Park-teaser">
                        <h1>Encuentra estacionamiento</h1>
                         <div>En tiempo real</div>
                    </div>
                    <Card />
                    <img src={mapa} alt="mapa"/>
                </div>
                <div className="Park-footer">
                    Park.io 2020
                </div>
            </div>
            
            );
    }
}

export default Park;