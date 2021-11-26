import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../../App.css';
import g1 from '../../img/g1.jpg';
import g2 from '../../img/g2.jpg';
import g3 from '../../img/g3.jpg';
import { animes, genres, anime_tagger } from "../../data/export.js"
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/Context'
import { fsdb, rtdb } from '../../main/firebase'
import { collection, doc, getDoc } from "firebase/firestore"

import "./mylist.css"
import animedb from "../../data/animedb.json"
import { ViewArraySharp } from '@material-ui/icons';

function MyList() {
  const { deleteData, readData, requestAnimeById } = useAuth()
  const [ data, setData ] = useState([])
  //const [ already, setAlready ] = useState([])
  //const [ dataComp, setDataComp ] = useState([])
  const history = useHistory()
 
  const goPoll = () => {
    history.push("/poll")
  }

  function loadData () {
    readData().then((result) => {
      //console.log(result['animes'])      
      setData(result['animes'])
    })
    console.log(data)
  }

  const findInDataBase = (ID) => {
    const animeData = animedb['animes'][ID] //requestAnimeById(ID)
    return (
      <>
      {animeData &&
      <div className="row">
        <div>
          <h2>
            {animeData['anime_name']}
          </h2>
          <img className="image-anime" src={animeData['image']} alt="new"></img>
        </div>
        <div className="synopsis">
          <p >
            {animeData['synopsis']}
          </p>
        </div>
        <div>
          Overall rating: {animeData['overall_rating']}
          <br />
          <br />
          Episodes: {animeData['episodes_total']}
        </div>
      </div>
      }
      </>
    )
  }

    return (
      <div className="main">
        {loadData()}
        <Navbar />
        
        <div className="trending">
            <div><h1>My list</h1></div>
            
            {data && 
            <div className="">
              {data.map((ID, key) => (
                <div key={key}>{findInDataBase(ID)}</div>
              ))}
            </div>}
            {!data &&
            <h3>Your list is currently empty. Fill the survey to get a recommendation.</h3>}
        <div>

        <button onClick={goPoll}>Do a poll</button>
        </div>
      </div>
      </div>
    );
  }
  
export default MyList;