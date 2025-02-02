// src/components/Skills.js
import React from 'react';
import '../assets/css/style.css'; // Make sure to create and style this CSS file

const Skills = () => {
  return (
    <section className="sections skills" aria-label="our skills">
      <div className="container">
        <p className="section-subtitle">I Make The Future</p>

        <h2 className="h2 section-title">I Develop & Create Digital Future.</h2>

        <div className="skills-wrapper">
          <div>
            <p className="section-text">
              Pellentesque magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant morbi senectus
              dictum.
            </p>

            <p className="section-text">
              Web design magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant morbi tristique
              senectus the neuse malesuada nullam ac lorem miss the duru.
            </p>

            <a href="" className="btn has-before">jeremygeofany@gmail.com</a>

            <div>
              <ul className="skills-list">
                <li>
                  <div className="progress-wrapper">
                    <p className="progress-label">Design</p>
                    <data className="progress-value" value="90">90%</data>
                  </div>
                  <div className="progress-bg">
                    <div className="progress" style={{ width: '90%' }}></div>
                  </div>
                </li>

                <li>
                  <div className="progress-wrapper">
                    <p className="progress-label">Branding</p>
                    <data className="progress-value" value="80">80%</data>
                  </div>
                  <div className="progress-bg">
                    <div className="progress" style={{ width: '80%' }}></div>
                  </div>
                </li>

                <li>
                  <div className="progress-wrapper">
                    <p className="progress-label">Web Design</p>
                    <data className="progress-value" value="95">95%</data>
                  </div>
                  <div className="progress-bg">
                    <div className="progress" style={{ width: '95%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
