import React, {Fragment, useState, useRef} from 'react';
import { useAuth } from "../../../context/AuthContext";
import './FormSign.css';
import { Alert, AlertTitle } from '@material-ui/lab';

const FormSign = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [datos, setDatos] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    async function sendData (event) {
        event.preventDefault();

        if(datos['password'] !==
           datos['passwordConfirmation']
        ){return setError('Passwords do not match')}

        try{
            setError('')
            setLoading(true)
            await signup(datos['email'], datos['password'])
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)        
    }

    return(
        <Fragment>
            <h1 className="TituloSignUp">SIGN UP</h1>
            {error && <Alert severity="error">{error}</Alert>}
            <form className='FormSignUp' onSubmit={sendData}>
                <div>
                    <input
                        type='text'
                        class='Input'
                        placeholder='Username'
                        name='username'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <input
                        type='text'
                        class='Input'
                        placeholder='Email'
                        name='email'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <input
                        type='password'
                        class='Input'
                        placeholder='Password'
                        name='password'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <input
                        type='password'
                        class='Input'
                        placeholder='Password confirmation'
                        name='passwordConfirmation'
                        onChange={handleInputChange}
                    ></input>
                </div>

                <div className='Upload-box'>
                    <button type='submit'>Sign up</button>
                </div>       
            </form>            
        </Fragment>
    );
}
export default FormSign