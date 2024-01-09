import React from "react";
import "../assets/styles/testimonials.css";
import AVATAR1 from "../assets/images/simo.jpg";
import AVATAR2 from "../assets/images/marwan.jpg";
import AVATAR3 from "../assets/images/basim.jpg";
import AVATAR4 from "../assets/images/avatar4.jpg";


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    name: "Mohamed El Masnaoui",
    image: AVATAR1,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem vel cum ullam nisi ea cupiditate esse necessitatibus maxime veritatis culpa nulla, saepe quo tenetur numquam nihil iure maiores excepturi!",
  },
  {
    id: 2,
    name: "Marwan Ouardi",
    image: AVATAR2,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem vel cum ullam nisi ea cupiditate esse necessitatibus maxime veritatis culpa nulla, saepe quo tenetur numquam nihil iure maiores excepturi!",
  },
  {
    id: 3,
    name: "Basim Marfook",
    image: AVATAR3,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem vel cum ullam nisi ea cupiditate esse necessitatibus maxime veritatis culpa nulla, saepe quo tenetur numquam nihil iure maiores excepturi!",
  },
  {
    id: 4,
    name: "Ayoub Achouch",
    image: AVATAR4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem vel cum ullam nisi ea cupiditate esse necessitatibus maxime veritatis culpa nulla, saepe quo tenetur numquam nihil iure maiores excepturi!",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonils__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
       {
        data.map((item) =>{
          return(
            <SwiperSlide className="testimonial" key={item.id}>
            <div className="client__avatar">
              <img src={item.image} alt="Avatar One" />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__review">
            {
            item.review
            }
            </small>
          </SwiperSlide>
          )
        })
       }
        
      </Swiper>
    </section>
  );
}

export default Testimonials;
