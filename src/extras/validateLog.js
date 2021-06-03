import validator from 'validator'

export default function validateInfo(values) {
    let errors = {}

    if(!values.email){
        errors.email="Se requiere una dirección de correo"
    }else if(!validator.isEmail(values.email)){
        errors.email="Dirección de correo no válida"
    }

    if(!values.password){
        errors.password="Se requiere una contraseña"
    }else if(values.password.length <6){
        errors.password="La contraseña debe tener al menos 6 caracteres"
    }

    return errors;
}