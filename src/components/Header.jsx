import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/style.css';

const Header = () => {
    return (
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src={logo} width="170" height="40" alt="Logo" />
          </a>
          <button className="nav-toggle-btn" data-nav-toggler data-nav-toggle-btn aria-label="Toggle menu">
            <span className="line line-1"></span>
            <span className="line line-1"></span>
          </button>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li><a href="#" className="navbar-link">Home</a></li>
              <li><a href="#" className="navbar-link">Resume</a></li>
              <li><a href="#" className="navbar-link">Services</a></li>
              <li><a href="#" className="navbar-link">Portfolio</a></li>
              <li><a href="#" className="navbar-link">Blog</a></li>
              <li><a href="#" className="navbar-link">Contact</a></li>
            </ul>
          </nav>
          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    );
  };
  
  export default Header;