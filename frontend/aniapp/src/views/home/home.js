import './home.css';
import anime1 from '../../img/anime1.jpg';
import anime2 from '../../img/anime2.jpg';
import anime3 from '../../img/anime3.jpg';
import anime4 from '../../img/anime4.jpg';
import anime5 from '../../img/anime5.jpg';
import anime6 from '../../img/anime6.jpg';
import g1 from '../../img/g1.jpg';
import g2 from '../../img/g2.jpg';
import g3 from '../../img/g3.jpg';
import g4 from '../../img/g4.jpg';
import g5 from '../../img/g5.jpg';
import g6 from '../../img/g6.jpg';
import logo from '../../img/logo.png';

import RegisterOptions from '../../components/RegisterOptions/RegisterOptions.js';
import ImageSlider from '../../components/ImageSlider/ImageSlider.js';
import Navbar from '../../components/Navbar/Navbar';
import { SliderData } from '../../components/ImageSlider/SliderData.js';
import { useAuth } from '../../context/Context'

function Home() {
  const {currentUser} = useAuth()

  return (
    <div className="main">
      {!currentUser ? <UnLogged /> : <Logged currentUser={currentUser}/>}
    </div>
  );
}

function Logged({currentUser}){
  return(
    <>
      <Navbar />
      <h1 style = { {textAlign: 'center', color: 'white'} }>Anime de la semana</h1>
      <ImageSlider slides={SliderData} className = "slider-home"/>
    </>
  );
}
 
function UnLogged(){ 
  return(
    <>
      <header className="header">
      <div>
        <img draggable="false" src={logo} />
        <h2>Some times it's hard to choose the perfect Anime.<br /> Anime<b>AI</b> it's here to help you</h2> 
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
      <div><h1>Trending animes</h1></div>
      <div>
        <a href="#"><img title="Kakegurui" src={g1} /></a>
        <a href="#"><img title="No Game No Life" src={g2} /></a>
        <a href="#"><img title="Naruto" src={g3} /></a>
        <a href="#"><img title="One Piece" src={g4} /></a>
        <a href="#"><img title="The Promised Neverland" src={g5} /></a>
        <a href="#"><img title="Jujutsu Kaisen" src={g6} /></a>
      </div>
      </div>
    </>
  );
}

export default Home;
