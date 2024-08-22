import React from "react";
import "./App.css";
import bgImage from "./assets/bg.jpg"; 
import logo from "./assets/logo.png"; 

function Home() {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </nav>
      </header>
      <main className="hero-section">
        <div className="hero-content">
          <h1>
            Transforming <span className="highlighted-text">Dream</span> Into Augmented and <br />
            <span className="highlighted-text-alt">Virtual Reality</span>
          </h1>
          <a href="#explore" className="explore-button">Explore</a>
        </div>
      </main>
    </div>
  );
}

export default Home;
