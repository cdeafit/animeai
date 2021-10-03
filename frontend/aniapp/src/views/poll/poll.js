import './poll.css';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Poll() {
    const history = useHistory()

    const handleSubmit = (event) => {
      event.preventDefault()
      history.push("/reccomendations")
    }

    return (
      <div className="main">
        <h1>Choose a gender</h1>
        <div className="gender">
          <div><input type="radio" value="Action" name="gender" />Action</div>
          <div><input type="radio" value="Adventure" name="gender" />Adventure</div>
          <div><input type="radio" value="Cars" name="gender" />Cars</div>
          <div><input type="radio" value="Comedy" name="gender" />Comedy</div>
          <div><input type="radio" value="Dementia" name="gender" />Dementia</div>
          <div><input type="radio" value="Demons" name="gender" />Demons</div>
          <div><input type="radio" value="Mystery" name="gender" />Mystery</div>
          <div><input type="radio" value="Drama" name="gender" />Drama</div>
          <div><input type="radio" value="Ecchi" name="gender" />Ecchi</div>
          <div><input type="radio" value="Fantasy" name="gender" />Fantasy</div>
          <div><input type="radio" value="Game" name="gender" />Game</div>
          <div><input type="radio" value="Hentai" name="gender" />Hentai</div>
          <div><input type="radio" value="Historical" name="gender" />Historical</div>
          <div><input type="radio" value="Horror" name="gender" />Horror</div>
          <div><input type="radio" value="Kids" name="gender" />Kids</div>
          <div><input type="radio" value="Magic" name="gender" />Magic</div>
          <div><input type="radio" value="Martial_Arts" name="gender" />Martial_Arts</div>
          <div><input type="radio" value="Mecha" name="gender" />Mecha</div>
          <div><input type="radio" value="Music" name="gender" />Music</div>
          <div><input type="radio" value="Parody" name="gender" />Parody</div>
          <div><input type="radio" value="Samurai" name="gender" />Samurai</div>
          <div><input type="radio" value="Romance" name="gender" />Romance</div>
          <div><input type="radio" value="School" name="gender" />School</div>
          <div><input type="radio" value="Sci-Fi" name="gender" />Sci-Fi</div>
          <div><input type="radio" value="Shoujo" name="gender" />Shoujo</div>
          <div><input type="radio" value="Shoujo_Ai" name="gender" />Shoujo_Ai</div>
          <div><input type="radio" value="Shounen" name="gender" />Shounen</div>
          <div><input type="radio" value="Shounen_Ai" name="gender" />Shounen_Ai</div>
          <div><input type="radio" value="Space" name="gender" />Space</div>
          <div><input type="radio" value="Sports" name="gender" />Sports</div>
          <div><input type="radio" value="Super_Power" name="gender" />Super_Power</div>
          <div><input type="radio" value="Vampire" name="gender" />Vampire</div>
          <div><input type="radio" value="Yaoi" name="gender" />Yaoi</div>
          <div><input type="radio" value="Yuri" name="gender" />Yuri</div>
          <div><input type="radio" value="Harem" name="gender" />Harem</div>
          <div><input type="radio" value="Slice_of_Life" name="gender" />Slice_of_Life</div>
          <div><input type="radio" value="Supernatural" name="gender" />Supernatural</div>
          <div><input type="radio" value="Military" name="gender" />Military</div>
          <div><input type="radio" value="Police" name="gender" />Police</div>
          <div><input type="radio" value="Psychological" name="gender" />Psychological</div>
          <div><input type="radio" value="Thriller" name="gender" />Thriller</div>
          <div><input type="radio" value="Seinen" name="gender" />Seinen</div>
          <div><input type="radio" value="Josei" name="gender" />Josei</div>
          <div><input type="radio" value="Award_Winning" name="gender" />Award_Winning</div>
          <div><input type="radio" value="Gourmet" name="gender" />Gourmet</div>
          <div><input type="radio" value="Work_Life" name="gender" />Work_Life</div>
          <input type="submit" value="Submit"/>
        </div>
      </div>
    );
  }
  
export default Poll;