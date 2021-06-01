import React from 'react';
import Card from './Card.js';
import {Registro} from './Registro.js';
import "./styles/Park.css";

import parkioLogo from '../images/parkio.png'
import mapa from '../images/mapa.png'
import spain from '../images/spain.png'

class Park extends React.Component{
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render(){
        return (
            <div className="Park">
                <div className="Park-header">
                    <img src={parkioLogo} alt="logo"/>
                    <div className="Park-header-actions">
                        <div className="Park-header-actions-info">Información</div>
                        <a href="#" onClick={this.showModal}>REGISTRO</a>
                        <a href="">ACCEDER</a>
                        <img src={spain} alt="idioma"/>
                    </div>
                </div>
                <Registro show={this.state.show} handleClose={this.hideModal}>
                    <h2>INTRODUCE TUS DATOS</h2>
                    <form>
                    <input type="text" placeholder="Nombres"/>
                    <input type="text" placeholder="Apellidos"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Confirmar Email"/>
                    <input type="text" placeholder="Contraseña"/>
                    <input type="text" placeholder="Confirmar Contraseña"/>
                    </form>
                </Registro>
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