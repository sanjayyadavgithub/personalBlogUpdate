import React,{useState} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';


/**
* @author
* @function Navbaar
**/

const Navbaar = (props) => {

  const [search,setSearch] = useState(false);

  const submitSearcher = (e) => {
    e.preventDefault();
    alert('Searched');
  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search ? 'searchinput:active' : 'searchinput';

  return(
    <div className="navbar">
      <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/post/1">Posts</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </ul>
      <div className="search">
        <form onSubmit = {submitSearcher}>
            < input type = "text" className={ searchClass} placeholder = "Search" />
            <img onClick = {openSearch} className="searchIcon" src = {require('../../asserts/icons/search.png')} alt = "Search" />
         </form>
      </div>
    </div>
   )

 }

export default Navbaar