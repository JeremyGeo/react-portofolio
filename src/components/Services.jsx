import React from 'react';
import '../assets/css/style.css';
import { IonIcon } from '@ionic/react';
import { desktopOutline, podiumOutline, basketOutline, colorFilterOutline } from 'ionicons/icons';


const Services = () => {
  return (
    <section className="service" aria-labelledby="">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">
              Services That I Provide
            </p>
            <h2 className="h2 section-title" id="service-label">Services</h2>
          </div>
          <p className="section-text">
            Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the drana risus tincidunt convallis
            velit orci congue tortor eu dignissim ipsum suam non odio. Pellenta esuntion miss the imperdiet metus
            ornare.
          </p>
        </div>

        <div className="slider" data-slider>
          <ul className="slider-container service-list" data-slider-container>
            <li className="slider-item" data-slider-item>
              <div className="service-card">
                <div className="card-icon">
                <IonIcon icon={desktopOutline} />
                </div>
                <h3 className="h3 card-title">Website Design</h3>
                <p className="card-text">
                  Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                </p>
                <span className="text-lg card-number">01</span>
                <a href="#" className="layer-link" aria-label="More about my website design service"></a>
              </div>
            </li>
            <li className="slider-item" data-slider-item>
              <div className="service-card">
                <div className="card-icon">
                <IonIcon icon={podiumOutline} />
                </div>
                <h3 className="h3 card-title">SEO Marketing</h3>
                <p className="card-text">
                  Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                </p>
                <span className="text-lg card-number">02</span>
                <a href="#" className="layer-link" aria-label="More about my SEO Marketing service"></a>
              </div>
            </li>
            <li className="slider-item" data-slider-item>
              <div className="service-card">
                <div className="card-icon">
                <IonIcon icon={basketOutline} />
                </div>
                <h3 className="h3 card-title">eCommerce</h3>
                <p className="card-text">
                  Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                </p>
                <span className="text-lg card-number">03</span>
                <a href="#" className="layer-link" aria-label="More about my eCommerce service"></a>
              </div>
            </li>
            <li className="slider-item" data-slider-item>
              <div className="service-card">
                <div className="card-icon">
                <IonIcon icon={colorFilterOutline} />
                </div>
                <h3 className="h3 card-title">Graphic Design</h3>
                <p className="card-text">
                  Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                </p>
                <span className="text-lg card-number">04</span>
                <a href="#" className="layer-link" aria-label="More about my Graphic Design service"></a>
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

export default Services;