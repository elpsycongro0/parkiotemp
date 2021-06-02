import validator from 'validator'

export default function validateInfo(values) {
    let errors = {}

    if(!values.nombres.trim()){
        errors.nombres = "Se requiere un nombre"
    }

    if(!values.apellidos.trim()){
        errors.apellidos = "Se requiere al menos un apellido"
    }

    if(!values.email){
        errors.email="Se requiere una dirección de correo"
    }else if(!validator.isEmail(values.email)){
        errors.email="Dirección de correo no válida"
    }

    if(!values.email2 || values.email2 !== values.email){
        errors.email2="Las direcciones de correo no coinciden"
    }

    if(!values.password){
        errors.password="Se requiere una contraseña"
    }else if(values.password.length <6){
        errors.password="La contraseña debe tener al menos 6 caracteres"
    }

    if(!values.password2 || values.password2 !== values.password){
        errors.password2="Las contraseñas no coinciden"
    }

    return errors;
}