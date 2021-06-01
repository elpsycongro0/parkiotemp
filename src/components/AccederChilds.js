import React from 'react';
import "./styles/Childs.css";
import Icon from '@mdi/react'
import {mdiEmail,mdiLock,mdiChevronRight} from '@mdi/js';

class AccederChilds extends React.Component{
    render(){
        return (
                <div>
                <h2>INTICIA SESIÓN</h2>
                <form>
                    <input type="text" placeholder="Email"/>
                    <div className="icono"><Icon path={mdiEmail} title="Mail" size={0.8} color="#999"/></div>
                    <input type="text" placeholder="Contraseña"/>
                    <div className="icono"><Icon path={mdiLock} title="Password" size={0.8} color="#999"/></div>
                    <input type="submit" className="botones" value="Acceder"/>
                    <div className="icono-azul"><Icon path={mdiChevronRight} title="Advance" size={0.8} color="#fff"/></div>
                </form>
                </div>
                );
    }
}

export default AccederChilds;
