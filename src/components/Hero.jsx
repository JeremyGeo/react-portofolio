import React from 'react';
import heroBanner from '../assets/images/hero-banner.jpg';
import '../assets/css/style.css';

const Hero = () => {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Jeremy Geofany</h1>
          <p className="hero-subtitle">Web Developer</p>
          <div className="hero-banner">
            <img src={heroBanner} width="800" height="800" alt="Jeremy Geofany" className="w-100" />
          </div>
          <p className="section-text">
            Hi, I’m Jeremy and I am a web developer who dream making the world better place by
            creating captivating products.
          </p>
          <a href="#" className="btn has-before">
            <span className="span">Download CV</span>
            <ion-icon name="download-outline" aria-hidden="true"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;