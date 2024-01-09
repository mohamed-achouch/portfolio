import React from "react";
import "../assets/styles/portfolio.css";
import IMG1 from "../assets/images/portfolio1.jpg";
import IMG2 from "../assets/images/portfolio2.jpg";
import IMG3 from "../assets/images/portfolio3.jpg";
import IMG4 from "../assets/images/portfolio4.jpg";
import IMG5 from "../assets/images/portfolio5.png";
import IMG6 from "../assets/images/portfolio6.jpg";
const Portfoilio = () => {
  const data = [
    {
      id: 1,
      title: "this is a portfolio item title",
      image: IMG1,
      github: "https//:github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 2,
      title: "this is a portfolio item title",
      image: IMG2,
      github: "https//:github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 3,
      title: "this is a portfolio item title",
      image: IMG3,
      github: "https//:github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 4,
      title: "this is a portfolio item title",
      image: IMG4,
      github: "https//:github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 5,
      title: "this is a portfolio item title",
      image: IMG5,
      github: "https//:github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 6,
      title: "this is a portfolio item title",
      image: IMG6,
      github: "https//:github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
  ];
  return (
    <section id="portfolio">
      <h5>my recet work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map((item,index) =>(
          <article className="portfolio__item" key={index}>
          <div className="portfolio__item-image">
            <img src={item.image} alt="" />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio__item-cta">
            <a href={item.github} className="btn">
              Github
            </a>
            <a
              href={item.demo}
              target="__blank"
              className="btn btn-primary"
            >
              live demo
            </a>
          </div>
        </article>     
        ))
       }  
      </div>
    </section>
  );
};

export default Portfoilio;
