import React from 'react'
import '../assets/styles/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeClass,setActiveClass] = useState("#")
  return (
   <nav>
    <a href="#home" onClick={()=>setActiveClass('#')} className={activeClass ==='#' ? 'active' : ''} >
    <AiOutlineHome/>
    </a>
    <a href="#about" onClick={()=>setActiveClass("#about")} className={activeClass ==='#about' ? 'active' : ''}>
    <AiOutlineUser/>
    </a>
    <a href="#experience" onClick={()=>setActiveClass("#experience")} className={activeClass ==='#experience' ? 'active' : ''}>
    <BiBookAlt/>
    </a>
    <a href="#services" onClick={()=>setActiveClass("#services")} className={activeClass ==='#services' ? 'active' : ''}>
    <RiServiceLine/>
    </a>
    <a href="#contact" onClick={()=>setActiveClass("#contact")} className={activeClass ==='#contact' ? 'active' : ''}>
    <BiMessageSquareDetail/>
    </a>
   </nav>
  )
}

export default Nav