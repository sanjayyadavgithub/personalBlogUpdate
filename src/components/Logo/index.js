import React from 'react';
import './style.css'; 

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
        <img  className="logo1" src={require('../../blogPostImages/sanjay.jpg')}/>
        <a href="/#">Sanjay yadav</a>
    </div>
   )

 }

export default Logo