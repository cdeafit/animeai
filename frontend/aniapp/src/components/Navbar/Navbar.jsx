import React from 'react';
import { useState} from 'react';
import './navbar.css';
//import {Router, Route} from 'react-router';  
//import {Link} from 'react'; 
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import logo from "../../img/logo.png";

const Navbar = (props) => { 
    const [error, setError] = useState("")
    const { logout, currentUser } = useAuth()
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
    
    const goRecommendations = () => {
      history.push("/recommendations")
    }
  
    const goMyList = () => {
        history.push("/mylist")
    }


 const {options} = props;
 const [collapse, setCollapse] = useState(false);
 const handleCollapse = ()  =>
     {
        document.getElementsByClassName("nav-items")[0].classList.toggle("collapse");
     };

 return (
 <div className = "navbar">
 <div className = "navbar-header">
    {/*<div>{currentUser.photoURL}</div>*/}
    <div className = "user-profile" onClick = {handleCollapse} >
         <img src = {currentUser.photoURL} />
         <p className = "name-user">{currentUser.displayName}</p>
    </div>
    <div className = "logo">
        <a href="/"><img src = {logo}></img></a>
    </div>
 </div>
 <div className = "nav-items">
   <ul>
    <li><a onClick = {goMyList} >Your list</a></li>
    <li><a onClick = {goRecommendations} >Previous recommendations</a></li>
    <li><a onClick = {goSettings} >Settings</a></li>
    <li><a onClick = {handleLogout} >Log out</a></li>
   </ul>
     </div>
 </div>)
};
export default Navbar;