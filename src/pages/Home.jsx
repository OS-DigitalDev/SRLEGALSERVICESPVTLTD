import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>
            <span>Professional</span> Loan Recovery Services
          </h1>
          <p>Trusted by Leading Banks & NBFCs Since 2014</p>
          <div className="btn-group">
            <a href="/clients" className="btn-primary">
              Work With Us
            </a>
            <a href="#" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h2>200+</h2>
          <p>Total Staff</p>
        </div>
        <div className="stat-card">
          <h2>75+</h2>
          <p>Backend Staff</p>
        </div>
        <div className="stat-card">
          <h2>30+</h2>
          <p>Tele-callers</p>
        </div>
        <div className="stat-card">
          <h2>33+</h2>
          <p>Districts Covered</p>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
