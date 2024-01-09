import React from 'react'
import'../../assets/styles/header.css'
import Cta from './CTA'
import me from "../../assets/images/me.png"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
   <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Mohamed Achouch</h1>
        <h5 className='text-light'>Front End Developper</h5>
        <Cta/>
        <HeaderSocials/>
         <div className='me'>
          <img src={me} alt="me" />
         </div>
         <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>   
   </header>
  )
}

export default Header