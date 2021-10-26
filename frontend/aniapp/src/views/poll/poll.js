import './poll.css';
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

    const handleSubmit = (event) => {
      event.preventDefault()
      setFilter(!filter)
    }

    const handleToggle = (e) => { 
      if(options.indexOf(e.target.value) >= 0){
        console.log(e.target)
        e.target.classList.remove('selected')
        const updatedData = options.filter( anime => anime !== e.target.value)
        setOptions(updatedData)
      }
      else if(options.length < threshold){
        e.target.classList.add('selected')
        setOptions([e.target.value, ...options])
      }
      
    }

    const handleFinished = (selected) => {
      console.log(selected);
       // history.push("./recommendations")
    }

    return (
      <div className="main">
        <h1>{ filter ? "Choose an anime" : "Choose a genre"}</h1>
        { !filter &&
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
        </div>}
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