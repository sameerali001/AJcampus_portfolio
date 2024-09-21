import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div>
      <section className="hero-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-section">
              <h1 className="animate-text">I AM SAMEER ALI</h1>
              <h2 className="animate-quote">"Web development is my passion."</h2>
              <h2 className="animate-quote">"Turning ideas into reality."</h2>
              <a href="/about" className="animated-button">About Me</a>
            </div>
            <div className="col-md-6 image-section">
              <img src="../../Assets/sameer.png" alt="Hero" className="hero-image" />
            </div>
          </div>
        </div>
      </section>
      
   
    </div>
  );
};

export default Home;
