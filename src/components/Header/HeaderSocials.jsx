import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub ,AiFillDribbbleCircle} from 'react-icons/ai'
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='__blank'>
          <BsLinkedin/>
        </a>
        <a href="https://github.com" target='__blank'>
          <AiFillGithub/>
        </a>
        <a href="https://linkedin.com" target="__blank">
            <AiFillDribbbleCircle/>
        </a>
    </div>
  )
}

export default HeaderSocials