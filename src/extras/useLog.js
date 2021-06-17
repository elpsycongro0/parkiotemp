import {useState, useEffect} from 'react'
import axios from 'axios'

const useForm = (callback,validate) =>{
    const [values,setValues] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        email2: '',
        password: '',
        password2: ''
    })

    const [errors,setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);
    /*const [isLogging, setIsLogging] = useState(false);*/

    const handleChange = e =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(
        () =>{
            if(Object.keys(errors).length === 0 && isSubmitting){
                const user = { email: values.email, password : values.password, returnSecureToken: true };
                axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBO3Kj40C-8p3xcw6YHhO4tV3ueuUe8ozw', user)
                .then(response => callback()).catch(error => console.log(error.response));
                /*callback();*/
            }
        },[errors,values]
    );

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;