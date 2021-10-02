import React, {Fragment, useState} from 'react';
import './FormLog.css';

const FormLog = () => {

    const [datos, setDatos] = useState({
        username: '',
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
            <h1 className="TituloLogIn">LOG IN</h1>
            <form className='FormLogIn' onSubmit={sendData}>
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