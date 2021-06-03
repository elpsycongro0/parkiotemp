import {useState, useEffect} from 'react'

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
            console.log(callback)
            if(Object.keys(errors).length === 0 && isSubmitting){
                callback();
            }
        },[errors]
    );

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;