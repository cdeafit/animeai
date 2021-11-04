import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../../App.css';
import g1 from '../../img/g1.jpg';
import g2 from '../../img/g2.jpg';
import g3 from '../../img/g3.jpg';
import { animes, genres, anime_tagger } from "../../data/export.js"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function MyList() {
  const [data, setData] = useState()
  const history = useHistory()

  const goPoll = () => {
    history.push("/poll")
  }

    return (
      <div className="main">
        <Navbar />
        
        <div className="trending">
            <div><h1>My list</h1></div>
            <h3>Your list is currently empty. Fill the survey to get a recommendation.</h3>
        <div>

        <button onClick={goPoll}>Do a poll</button>
        </div>
      </div>
      </div>
    );
  }
  
export default MyList;