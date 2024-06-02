// src/components/Portfolio.js
import React from 'react';
import '../assets/css/style.css';

// Importing images
import portfolio1 from '../assets/images/portfolio-1.jpg';
import portfolio2 from '../assets/images/portfolio-2.jpg';
import portfolio3 from '../assets/images/portfolio-3.jpg';
import portfolio4 from '../assets/images/portfolio-4.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio" aria-labelledby="portfolio-label">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle" id="portfolio-label">Our Works</p>
            <h2 className="h2 section-title">Portfolio</h2>
          </div>
          <p className="section-text">
            Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the drana risus tincidunt convallis
            velit orci congue tortor eu dignissim ipsum suam non odio. Pellenta esuntion miss the imperdiet metus
            ornare.
          </p>
        </div>

        <div className="slider" data-slider>
          <ul className="slider-container" data-slider-container>
            <li className="slider-item" data-slider-item>
              <div className="portfolio-card img-holder" style={{ '--width': '', '--height': '' }}>
                <img src={portfolio1} width="600" height="600" loading="lazy" alt="portfolio" className="img-cover" />
                <div className="card-content">
                  <h3 className="h3 card-title">Lab. 001</h3>
                  <p className="card-text">Website Design</p>
                </div>
                <a href="#" className="layer-link"></a>
              </div>
            </li>

            <li className="slider-item">
              <div className="portfolio-card img-holder" style={{ '--width': '600', '--height': '600' }}>
                <img src={portfolio2} width="600" height="600" loading="lazy" alt="portfolio" className="img-cover" />
                <div className="card-content">
                  <h3 className="h3 card-title">Aer Agency</h3>
                  <p className="card-text">Website / Development</p>
                </div>
                <a href="#" className="layer-link"></a>
              </div>
            </li>

            <li className="slider-item">
              <div className="portfolio-card img-holder" style={{ '--width': '600', '--height': '600' }}>
                <img src={portfolio3} width="600" height="600" loading="lazy" alt="portfolio" className="img-cover" />
                <div className="card-content">
                  <h3 className="h3 card-title">Joker Card</h3>
                  <p className="card-text">UX Design / Web App</p>
                </div>
                <a href="#" className="layer-link"></a>
              </div>
            </li>

            <li className="slider-item">
              <div className="portfolio-card img-holder" style={{ '--width': '600', '--height': '600' }}>
                <img src={portfolio4} width="600" height="600" loading="lazy" alt="portfolio" className="img-cover" />
                <div className="card-content">
                  <h3 className="h3 card-title">Peaky Blinders</h3>
                  <p className="card-text">Website / UX Design</p>
                </div>
                <a href="#" className="layer-link"></a>
              </div>
            </li>
          </ul>
          <div className="slider-controls">
            <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
              <div className="line"></div>
              <div className="arrow"></div>
            </button>

            <button className="slider-control next" data-slider-next aria-label="Slide to next item">
              <div className="line"></div>
              <div className="arrow"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
