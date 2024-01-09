import React from "react";
import "../assets/styles/about.css";
import ME from "../assets/images/me-about.jpg";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const about = () => {
  return (
    <section id="about">
      <h5>get top now</h5>
      <h2>about me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_image" />
          </div>
        </div>
        <div className="about-content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years work</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>8+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            vitae recusandae iste eos dolorem perferendis quaerat modi fuga
            explicabo nobis cupiditate accusamus repellat, praesentium nesciunt
            sunt sit nostrum aliquam voluptatum.
          </p>
          <a href="#contact" className="btn btn-primary">let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
