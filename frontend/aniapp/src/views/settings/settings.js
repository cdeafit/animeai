import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from "react-router-dom"
import { Alert } from '@material-ui/lab';

function Settings() {
  const {currentUser, updateEmail, updatePassword} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  const [settingsData, setSettingsData] = useState({
    email: "",
    password: "",
    passwordConfirmation: ""
  })

  const handleInputChange = (event) => {
    setSettingsData({
        ...settingsData,
        [event.target.name] : event.target.value
    })
  }

  async function handleEmailChange (event) {
    event.preventDefault();

    if(currentUser.email === settingsData['email']){
      return setError("Already your registered email.")
    }

    try{
        setError('')
        setLoading(true)
        await updateEmail(settingsData['email'])
        history.push('/')
    } catch (err){
        console.error(err)
        setError('Failed to change email')
    }
    setLoading(false)
  }

  async function handlePasswordChange (event) {
    event.preventDefault();

    if(settingsData['password'] !== settingsData['passwordConfirmation']){
      return setError("Passwords do not match")
    }

    try{
        setError('')
        setLoading(true)
        await updatePassword(settingsData['password'])
        history.push('/')
    } catch {
        setError('Failed to change your password.')
    }
    setLoading(false)
  }

  return (
      <div className="main">
        {error && <Alert severity="error">{error}</Alert>}
        <form className="cambiarEmail" onSubmit={handleEmailChange}>
          <div>
            Change email:
            <br />
            <input
              type='email'
              class='Input'
              placeholder='Email'
              name='email'
              onChange={handleInputChange}
            />
            <br />
            <button type="submit" >Submit email change</button>
          </div>
        </form>
        <br />
        <form className="changePassword" onSubmit={handlePasswordChange}>
          <div>
            Change password:
            <br />
            <input
              type='password'
              class='Input'
              placeholder='New password'
              name='password'
              onChange={handleInputChange}
            />
            <br />
            <input
              type='password'
              class='Input'
              placeholder='Confirm your new password'
              name='passwordConfirmation'
              onChange={handleInputChange}
            />
            <br />
            <button type="submit" >Submit password change</button>
          </div>
        </form>
      </div>
    );
  }
  
export default Settings;