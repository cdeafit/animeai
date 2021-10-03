import React from 'react'
import '../../App.css';
import g1 from '../../img/g1.jpg';
import g2 from '../../img/g2.jpg';
import g3 from '../../img/g3.jpg';
import { animes, genres, anime_tagger } from "../../data/export.js"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function ReccomendView() {
  const [data, setData] = useState()

  const establishData = ({option}) => {
    setData()
  }

    return (
      <div className="main">
       <div className="trending">
      <div><h1>Your results</h1></div>
      <div>
        <a href="#"><h2>Kakegurui</h2><img title="Kakegurui" src={g1} /></a>
        <a href="#"><h2>No Game No Life</h2><img title="No Game No Life" src={g2} /></a>
        <a href="#"><h2>Naruto</h2><img title="Naruto" src={g3} /></a>
      </div>
      </div>
      </div>
    );
  }
  
export default ReccomendView;