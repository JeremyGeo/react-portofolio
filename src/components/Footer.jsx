import React from 'react';
import '../assets/css/style.css';
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoLinkedin } from 'ionicons/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <li><p className="h4 footer-list-title">Get in touch</p></li>
          <li><a href="mailto:info@kwilliams.com" className="footer-link">jeremygeofany@gmail.com</a></li>
        </ul>
        <ul className="footer-list">
          <li><p className="h4 footer-list-title">Locations</p></li>
          <li><a href="#" className="footer-link">Surabaya - Indonesia</a></li>
        </ul>
        <ul className="social-list">
          <li><a href="#" className="social-link">
          <IonIcon icon={logoInstagram} /></a></li>
          <li><a href="#" className="social-link"><IonIcon icon={logoLinkedin} /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;