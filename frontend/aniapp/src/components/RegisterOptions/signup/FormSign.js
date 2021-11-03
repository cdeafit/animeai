import React, {Fragment, useState} from 'react';
import { useAuth } from "../../../context/AuthContext";
import './FormSign.css';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useHistory } from "react-router-dom"

const FormSign = () => {
    const { signup, login, updateProfile, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const [datos, setDatos] = useState({
        email: '',
        password: '',
        passwordConfirmation: '',
        defaultInfo:{
            displayName: "",
            photoURL: "/baki.jpg"
        }
    })

    const handleInputChange = (event) => {
        console.log( event.target.value.replace(/(@)+(.*)/,""));
        if(event.target.name === 'email')
            setDatos({
                ...datos,
                [event.target.name] : event.target.value,
                defaultInfo: {
                    ...datos.defaultInfo,
                    displayName: event.target.value.replace(/(@)+(.*)/,"")
                }
            })
        else
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

        //try{
            setError('')
            setLoading(true)
            await signup(datos['email'], datos['password'])
            history.push('/poll')
        //} catch {
            setError('Failed to create an account')
        //}
        setLoading(false)
    }

    return(
        <Fragment>
            <h1 className="TituloSignUp">SIGN UP</h1>
            {error && <Alert severity="error">{error}</Alert>}
            <form className='FormSignUp' onSubmit={sendData}>
                <div>
                    <input
                        type='email'
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