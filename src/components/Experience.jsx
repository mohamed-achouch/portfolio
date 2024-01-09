import React from 'react'
import '../assets/styles/experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>what skills i have</h5>
      <h2>my experience</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
           <h3>frontEnd developement</h3>
           <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
           <div>
           <h4>HTML</h4>
           <small className='text-light'>Experienced</small>
           </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
          <div>
          <h4>JavaScript</h4>
              <small className='text-light'>intermediate</small>
          </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
             <div>
             <h4>Bootstrap</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
             <div>
             <h4>Tailwind</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
           </div>
        </div>
        <div className="experience__backend">
        <h3>backend developement</h3>
           <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
              <h4>C#</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
              <h4>AspNet</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
             <div>
             <h4>Web Api</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
             <div>
             <h4>Entity Frameworks</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
             <div>
             <h4>SQL Server</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
              <h4>My SQL</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Experience