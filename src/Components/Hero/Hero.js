import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <section className="hero" >
      <div className="hero__contentContainer">
        <div className="hero__content">
          <h1>Enabling success that make a positive impact.</h1>
          <h2>Connecting businesses to resources that transform lives around the world.</h2>
          <Link className="hero__callToAction" to="#">Register</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;
