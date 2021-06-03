import React from 'react';
import "./styles/Childs.css";
import Icon from '@mdi/react'
import {mdiAccount,mdiEmail,mdiLock,mdiChevronRight} from '@mdi/js';
import useForm from '../extras/useForm'
import validate from '../extras/validateInfo'

class RegistroChilds extends React.Component{

    render(){
        const { handleChange, values, handleSubmit, errors } = this.props;

        return (
                <div>
                <h2>INTRODUCE TUS DATOS</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombres" name="nombres"
                    value={values.nombres} onChange={handleChange}/>
                    <div className="icono"><Icon path={mdiAccount} title="User Name" size={0.8} color="#999"/></div>
                    {errors.nombres && <p className="rojo">{errors.nombres}</p>}

                    <input type="text" placeholder="Apellidos" name="apellidos"
                    value={values.apellidos} onChange={handleChange}/>
                    <div className="icono"><Icon path={mdiAccount} title="User Surname" size={0.8} color="#999"/></div>
                    {errors.apellidos && <p className="rojo">{errors.apellidos}</p>}

                    <input type="email" placeholder="Email" name="email"
                    value={values.email} onChange={handleChange}/>
                    <div className="icono"><Icon path={mdiEmail} title="Mail" size={0.8} color="#999"/></div>
                    {errors.email && <p className="rojo">{errors.email}</p>}

                    <input type="email" placeholder="Confirmar Email" name="email2"
                    value={values.email2} onChange={handleChange}/>
                    <div className="icono"><Icon path={mdiEmail} title="Mail confirmation" size={0.8} color="#999"/></div>
                    {errors.email2 && <p className="rojo">{errors.email2}</p>}

                    <input type="password" placeholder="Contraseña" name="password"
                    value={values.password} onChange={handleChange}/>
                    <div className="icono"><Icon path={mdiLock} title="Password" size={0.8} color="#999"/></div>
                    {errors.password && <p className="rojo">{errors.password}</p>}

                    <input type="password" placeholder="Confirmar Contraseña" name="password2"
                    value={values.password2} onChange={handleChange}/>
                    <div className="icono"><Icon path={mdiLock} title="Password Confirmation" size={0.8} color="#999"/></div>
                    {errors.password2 && <p className="rojo">{errors.password2}</p>}

                    <input type="submit" className="botones" value="Registrar"/>
                    <div className="icono-azul"><Icon path={mdiChevronRight} title="Advance" size={0.8} color="#fff"/></div>
                </form>
                <p>¿Ya tienes cuenta? <a href="">Accede</a></p>
                </div>
                );
    }
}

function WrapperComponent({submitForm}) {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  return <RegistroChilds handleChange={handleChange} values={values} handleSubmit={handleSubmit} errors={errors}/>;
}

export default WrapperComponent;
