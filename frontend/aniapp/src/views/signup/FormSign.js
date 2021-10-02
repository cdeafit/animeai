import React, {Fragment, useState} from 'react';
import './FormSign.css';

const FormSign = () => {

    const [datos, setDatos] = useState({
        username: '',
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

    const sendData = (event) => {
        event.preventDefault();
        console.log(datos)
    }

    return(
        <Fragment>
            <h1 className="TituloSignUp">SIGN UP</h1>
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

                <div className='Upload-box'>
                    <button type='submit'>Sign up</button>
                </div>       
            </form>            
        </Fragment>
    );
}
export default FormSign