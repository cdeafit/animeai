import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from "react-router-dom"
import { Alert } from '@material-ui/lab';
import Navbar from '../../components/Navbar/Navbar';
import "./modal.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './settings.css'
const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};
function Settings() {
  const {currentUser, updateEmail, updatePassword, updateProfile} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [openModal, setModal] = useState(false);

  const callModal = (data) => {
    
  };

  useEffect(
    () => {
      let images = document.querySelectorAll('.user-photo');
      console.log(currentUser.photoURL);
      for(let i = 0; i < images.length; i++){
         if(images[i].src.indexOf(currentUser.photoURL) >= 0) images[i].classList.add('selected');
      }
    }
  );

  const [settingsData, setSettingsData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    dataToChange: {displayName: currentUser.displayName, photoURL:currentUser.photoURL}
  })

  const handleInputChange = (event) => {
    setSettingsData({
        ...settingsData,
        dataToChange: {
          displayName: event.target.name === 'user-name' ? event.target.value : settingsData['dataToChange']['displayName'],
          photoURL: event.target.name === 'user-photo-selection' ? event.target.value : settingsData['dataToChange']['photoURL']
        }
    })
    let radios = document.getElementsByName('user-photo-selection');
    for(let i = 0; i < radios.length; i++) radios[i].parentElement.children[1].classList.remove('selected');
    event.target.parentElement.children[1].classList.add('selected');
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

  async function handleProfileChange (event) {
    event.preventDefault();

    //try{
        setError('')
        setLoading(true)
        await updateProfile(settingsData['dataToChange'])
        history.push('/')
    //} catch (err){
    //    console.error(err)
    //    setError('Failed to change user or profile')
    //}
    setLoading(false)
  }

  async function handleUsernameChange (event) {
    event.preventDefault();

    //try{
        setError('')
        setLoading(true)
        await updateProfile(settingsData['dataToChange'])
        history.push('/')
    //} catch (err){
    //    console.error(err)
    //    setError('Failed to change user or profile')
    //}
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
      <>
      <Navbar className="navbarSettings"/>
      <div className="mainSettings">
        {error && <Alert severity="error">{error}</Alert>}
        <form className="titleChangeEmail" onSubmit={handleEmailChange}>
          <div className="moverEmail">
            <h1>Change email:</h1>
            <input
              type='email'
              class='Input'
              placeholder='Email'
              name='email'
              onChange={handleInputChange}
            />
            <button type="submit" >Submit email change</button>
          </div>
        </form>

        <form className="titleChangePassword" onSubmit={handlePasswordChange}>
          <div className="moverPassword"><h1>Change password:</h1>
            <input
              type='password'
              class='Input'
              placeholder='New password'
              name='password'
              onChange={handleInputChange}
            />
            <input
              type='password'
              class='Input'
              placeholder='Confirm your new password'
              name='passwordConfirmation'
              onChange={handleInputChange}
            />
            <button type="submit" >Submit password change</button>
          </div>
        </form>
        
        <form className="NewUsername" onSubmit={handleUsernameChange}>
          <div>
            <h1>Cambiar Usuario</h1>
            <input type="text" className="Input" autocomplete="off" placeholder="Put here your new username" name="user-name" onChange={handleInputChange} />
            <button className="cambiarLogo" type="submit">Confirm new username</button>
          </div>
        </form>

        <form className="cambiarLogo" onSubmit={handleProfileChange}>
          <div>
          <h1>Cambiar Logo</h1>
          <label >
            <input type="radio" onChange={handleInputChange} value="/baki.jpg" name="user-photo-selection" />
            <img src="/baki.jpg" className="user-photo" />
          </label>
          <label >
            <input type="radio" onChange={handleInputChange} value="/zerotwo.jpg" name="user-photo-selection" />
            <img src="/zerotwo.jpg" className="user-photo"/>
          </label>  
          <label >
            <input type="radio" onChange={handleInputChange} value="/sora.jpg" name="user-photo-selection" />
            <img src="/sora.jpg" className="user-photo"/>
          </label>  
          <label >
            <input type="radio" onChange={handleInputChange} value="/chika.jpg" name="user-photo-selection" />
            <img src="/chika.jpg" className="user-photo"/>            
          </label>                
          <label >
            <input type="radio" onChange={handleInputChange} value="/takeo.jpg" name="user-photo-selection" />
            <img src="/takeo.jpg" className="user-photo"/>            
          </label>  
          <label >
            <input type="radio" onChange={handleInputChange} value="/nezuko.jpg" name="user-photo-selection" />
            <img src="/nezuko.jpg" className="user-photo"/>            
          </label>  
          <button className="colorCuadroPerfil" type="submit" >Confirm image</button>
          
          </div>
        </form>
      </div>    
      <Modal isOpen={openModal} style={modalStyles}>
        <ModalHeader>Cambiar logo</ModalHeader>  
        <ModalBody>
       
        </ModalBody>

        <ModalFooter></ModalFooter>
      </Modal>
      </>
    );
  }
  
export default Settings;