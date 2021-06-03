import React from 'react';
import "./styles/Childs.css";
import Icon from '@mdi/react'
import {mdiEmail,mdiLock,mdiChevronRight} from '@mdi/js';

import useForm from '../extras/useForm'
import validate from '../extras/validateLog'

class AccederChilds extends React.Component{
    render(){
        const { handleChange, values, handleSubmit, errors } = this.props;

        return (
                <div>
                <h2>INICIA SESIÓN</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email"
                    value={values.email} onChange={handleChange}/>
                    <div className="icono"><Icon path={mdiEmail} title="Mail" size={0.8} color="#999"/></div>
                    {errors.email && <p className="rojo">{errors.email}</p>}

                    <input type="password" placeholder="Contraseña" name="password"
                    value={values.password} onChange={handleChange}/>
                    <div className="icono"><Icon path={mdiLock} title="Password" size={0.8} color="#999"/></div>
                    {errors.password && <p className="rojo">{errors.password}</p>}

                    <input type="submit" className="botones" value="Acceder"/>
                    <div className="icono-azul"><Icon path={mdiChevronRight} title="Advance" size={0.8} color="#fff"/></div>
                </form>
                <p>¿No tienes cuenta? <a href="">Registrate</a></p>
                </div>
                );
    }
}

function WrapperComponent({submitForm}) {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  return <AccederChilds handleChange={handleChange} values={values} handleSubmit={handleSubmit} errors={errors}/>;
}


export default WrapperComponent;
