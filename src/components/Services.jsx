import React from "react";
import { BiCheck } from "react-icons/bi";
import '../assets/styles/services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>what i offer</h5>
      <h2>services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="servise__list">
            <li>
              <BiCheck className="icon"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
           
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
     
          <ul className="servise__list">
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
         
          <ul className="servise__list">
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>         
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
         
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>        
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
