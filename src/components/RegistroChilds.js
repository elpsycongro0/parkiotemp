import React from 'react';
import "./styles/Childs.css";
import Icon from '@mdi/react'
import {mdiAccount,mdiEmail,mdiLock,mdiChevronRight} from '@mdi/js';
import validator from 'validator'

class RegistroChilds extends React.Component{

    constructor(){
        super();
        this.state = {
            emailError:'',
            passwordError:''
        };
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.showDiv = this.showDiv.bind(this);
        this.hideDiv = this.hideDiv.bind(this);
    }

    validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            this.setState({emailError:'Email correcto! :)'})
            this.setState({color: 'green'})
        } else {
            this.setState({emailError:'Email incorrecto! :('})
            this.setState({color: 'red'})
        }
    };

    validatePassword = (e) => {
        var password = e.target.value
        if(password.length >= 6){
            this.setState({passwordError:'password correcto! :)'})
            this.setState({color: 'green'})
        } else{
            this.setState({passwordError:'password incorrecto! :('})
            this.setState({color: 'red'})
        }
    }

    showDiv = () =>{
        this.setState({display:'block'})
    };

    hideDiv = () =>{
        this.setState({display:'none'})
    };

    render(){

        return (
                <div>
                <h2>INTRODUCE TUS DATOS</h2>
                <form>
                    <input type="text" placeholder="Nombres"/>
                    <div className="icono"><Icon path={mdiAccount} title="User Name" size={0.8} color="#999"/></div>

                    <input type="text" placeholder="Apellidos"/>
                    <div className="icono"><Icon path={mdiAccount} title="User Surname" size={0.8} color="#999"/></div>

                    <input type="email" placeholder="Email" onChange={(e) => this.validateEmail(e)} onFocus={this.showDiv} onBlur={this.hideDiv}/>
                    <div className="icono"><Icon path={mdiEmail} title="Mail" size={0.8} color="#999"/></div>
                    <div style={{color:this.state.color, display:this.state.display}}>{this.state.emailError}</div>

                    <input type="email" placeholder="Confirmar Email"/>
                    <div className="icono"><Icon path={mdiEmail} title="Mail confirmation" size={0.8} color="#999"/></div>

                    <input type="password" placeholder="Contraseña" onChange={(e) => this.validatePassword(e)} onFocus={this.showDiv} onBlur={this.hideDiv}/>
                    <div className="icono"><Icon path={mdiLock} title="Password" size={0.8} color="#999"/></div>
                    <div style={{color:this.state.color, display:this.state.display}}>{this.state.passwordError}</div>

                    <input type="password" placeholder="Confirmar Contraseña"/>
                    <div className="icono"><Icon path={mdiLock} title="Password Confirmation" size={0.8} color="#999"/></div>

                    <input type="submit" className="botones" value="Registrar"/>
                    <div className="icono-azul"><Icon path={mdiChevronRight} title="Advance" size={0.8} color="#fff"/></div>
                </form>
                </div>
                );
    }
}

export default RegistroChilds;
