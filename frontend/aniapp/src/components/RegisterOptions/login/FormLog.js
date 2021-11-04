import React, {Fragment, useState} from 'react';
import './FormLog.css';

import { useAuth } from "../../../context/AuthContext";
import { Alert, AlertTitle } from '@material-ui/lab';
import { useHistory } from "react-router-dom"

const FormLog = () => {
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    async function sendData(event) {
        event.preventDefault();        

        try {
            setError("")
            setLoading(true)
            await login(datos['email'], datos['password'])
            history.push("/")
        } catch {
            setError('Failed to log in.')
        }

        setLoading(false)     
    }

    return(
        <Fragment>
            <h1 className="TituloLogIn">LOG IN</h1>
            <form className='FormLogIn' onSubmit={sendData}>
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

                <div className='Upload-box'>
                    <button type='submit'>Log in</button>
                </div>       
            </form>
        </Fragment>
    );
}
export default FormLog