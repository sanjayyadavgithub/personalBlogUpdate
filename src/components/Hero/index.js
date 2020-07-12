import React from 'react'
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbaar from '../Navbar';
/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
      <Card>
        <div style={{padding:"50px 0"}}>
          <Logo/>
        </div>
        <Navbaar/>
      </Card>
    </div>
   )

 }

export default Hero