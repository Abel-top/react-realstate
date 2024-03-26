import React, { useEffect } from "react";
import "./hero.css";
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Hero() {
  useEffect(()=>{
      AOS.init()
  })
  return (
    <div className="hero-wrapper">
      <div className="hero-left" >
        <h1>
          Your home. <br /> Your memories.
          <br /> Our focus.
        </h1>
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          <input type="text" />
          <button className="button">Search</button>
        </div>
        <div className="stats">
          <div>
          <h3>
            Homes</h3>
          <CountUp  start ={7000} end={7500} duration={4}/>
          <span>+</span>
           
        </div>
        <div>
          <h3>
            Branches</h3>
          <CountUp  end={20}/>
          <span >+</span>
            </div>
        </div>
        
      </div>
      <div className="hero-right" data-aos="fade-left" data-aos-duration="3000">
        <img src="./hero-img.jpg" width={300} />
      </div>
    </div>
  );
}

export default Hero;
