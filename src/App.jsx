import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import './assets/css/style.css';

function App() {
  return (
    <div>
      <Header />
      <Hero /> 
       <Services />
      <Skills />
      <Portfolio />
      <Blog /> 
      <Footer />
      </div>
  );
}

export default App;