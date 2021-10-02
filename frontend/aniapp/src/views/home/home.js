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

function Home() {
  return (
    <div className="main">
      <header className="header">
      <div>
        <img draggable="false" src={logo} />
        <h2>Lorem ipsum</h2>
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
      <div>
        hola
      <ImageSlider slides={SliderData}></ImageSlider>
      </div>
    </div>
  );
}

export default Home;
