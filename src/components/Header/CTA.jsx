import React from 'react'
import CV from '../../assets/images/cv.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Dowbload Cv</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA