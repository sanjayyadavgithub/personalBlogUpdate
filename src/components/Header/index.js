import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
      <header className="header">
          <nav className="headerMenu">
              <h1> Dashboard </h1>
              <a href="/">Home</a>
              <a href="/#">Tutorial</a>
              <a href="/#">Service</a>
              <a href="/about-us">About Us</a>
              <a href="/contact-us">Contact Us</a> 
          </nav>
          
    </header>
   )

 }

export default Header