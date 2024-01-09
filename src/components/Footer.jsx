import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {CiInstagram} from 'react-icons/ci'
import {IoLogoTwitter} from 'react-icons/io'
import '../assets/styles/footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#d" target="_blank" className='footer__logo'>
        AchMohamed
      </a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com"target='_blank'><CiInstagram/></a>
        <a href="https://www.twitter.com"target='_blank'><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mohamed Achouch. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer