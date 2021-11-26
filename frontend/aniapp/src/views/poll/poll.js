import './poll.css';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import CardViewer from '../../components/CardViewer/CardViewer';
import genres from '../../data/genres.json';

function Poll({ threshold = 3 }) {
    const history = useHistory();
    const [options, setOptions] = useState([]);
    const [filter, setFilter] = useState(false);
    const [error, setError] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault()
      setFilter(!filter)
      //axios.get('http://localhost:8080/AnimeInfo')
      //.then((response) => {console.log(response)})
      //.catch((error) => {console.log(error)})
    }

    const handleToggle = (e) => { 
      if(options.indexOf(e.target.value) >= 0){
        console.log(e.target)
        e.target.classList.remove('selected')
        const updatedData = options.filter( anime => anime !== e.target.value)
        setOptions(updatedData)
        console.log(options)
      }
      else if(options.length < threshold){
        e.target.classList.add('selected')
        setOptions([e.target.value, ...options])
      }else{
          setError(true);
      }
      
    }

    const handleFinished = (selected) => {
      console.log(selected);
      history.push("./recommendations")
    }

    return (
      <div className="main">
        <Navbar />
        <h1>{ filter ? "Choose an anime" : "Choose a genre"}</h1>
        { !filter &&
        <>
        {error && <div className = "msg-error">You have already selected the three allowed genres</div>}
        <div className="genre">
          {
            genres.map((genre, key) => {
              return <div><button
                  onClick = {handleToggle}
                  value={genre.tag_name}
                  name="genre"
                  key = {key}>
                  {genre.tag_name}</button></div>
            })
          }
         <input type="submit" value="Submit" onClick={handleSubmit}/>
        </div>
        </>
        }
        {
          filter && <CardViewer 
           recommendations = { options }
           handleFinished = {handleFinished}
          />
        }
      </div>
      
    );
  }
  
export default Poll;