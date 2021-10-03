import './home.css';
import anime1 from '../../img/anime1.jpg';
import anime2 from '../../img/anime2.jpg';
import anime3 from '../../img/anime3.jpg';
import anime4 from '../../img/anime4.jpg';
import anime5 from '../../img/anime5.jpg';
import anime6 from '../../img/anime6.jpg';
import logo from '../../img/logo.png';

import RegisterOptions from '../../components/RegisterOptions/RegisterOptions.js';
import ImageSlider from '../../components/ImageSlider/ImageSlider.js';
import {SliderData} from '../../components/ImageSlider/SliderData.js';
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  const {currentUser} = useAuth()

  return (
    <div className="main">
      {!currentUser ? <UnLogged /> : <Logged currentUser={currentUser}/>}
    </div>
  );
}

function Logged({currentUser}){
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  const goSettings = () => {
    history.push("/settings")
  }

  return(
    <>
    <h1>
      You has logged in with {currentUser.email}
    </h1>
    <button type="button" onClick={handleLogout}>
      Log out
    </button>
    <button onClick={goSettings}>
      Settings
    </button>
    </>
  );
}

function UnLogged(){ 

  return(
    <>
      <header className="header">
      <div>
        <img draggable="false" src={logo} />
        <h2>Descripción</h2> 
        <RegisterOptions />
      </div>
      <div>
      <ul>
        <li><img src={anime1} /></li>
        <li><img src={anime2} /></li>
        <li><img src={anime3} /></li>
        <li><img src={anime4} /></li>
        <li><img src={anime5} /></li>
        <li><img src={anime6} /></li>
      </ul>
      </div>
      </header>
      <div className="trending">
      <div><h1>Trending animes</h1>
      <ImageSlider slides={SliderData}></ImageSlider></div>
      <div></div>
      </div>
    </>
  );
}

export default Home;
