import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
     

      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>About <span>S R Legal Services</span></h1>
          <p>Established in 2014 — Serving Financial Institutions Across Rajasthan</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="overview">
        <div className="content">
          <div className="text">
            <h2>Our Story</h2>
            <p>
              Founded in 2014, <strong>S R Legal Services Pvt. Ltd.</strong> has emerged as a
              leading loan recovery company in Rajasthan. We specialize in providing
              comprehensive debt recovery solutions to banks and NBFCs.
            </p>
            <p>
              With over 200 dedicated professionals and offices across all districts of
              Rajasthan, we have built a reputation for excellence in loan recovery, EMI
              collection, and asset capture services.
            </p>
            <p>
              Our commitment to professionalism, transparency, and results has made us the
              preferred partner for leading financial institutions.
            </p>
          </div>

          <div className="stats-card">
            <h3>Company Strength</h3>
            <ul>
              <li><span>Total Staff</span> <strong>200+</strong></li>
              <li><span>Backend Staff</span> <strong>75+</strong></li>
              <li><span>Main Office Backend Staff</span> <strong>50+</strong></li>
              <li><span>Tele-callers</span> <strong>30+</strong></li>
              <li><span>Districts Covered</span> <strong>All Rajasthan</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership">
        <h2>Leadership Team</h2>
        <div className="leaders">
          <div className="leader-card">
            <div className="icon"><i className="fas fa-user-tie"></i></div>
            <h3>Rajesh Bhawaria</h3>
            <p>Owner</p>
          </div>
          <div className="leader-card">
            <div className="icon"><i className="fas fa-user-tie"></i></div>
            <h3>Sushila</h3>
            <p>Owner</p>
          </div>
          {/* <div className="leader-card">
            <div className="icon"><i className="fas fa-laptop"></i></div>
            <h3>CP Sharma</h3>
            <p>IT Manager</p>
          </div> */}
          
         
        </div>
      </section>

      {/* Office Section */}
      <section className="offices">
        <h2>Our Offices</h2>
        <div className="office-grid">
          <div className="office-card">
            <h3>Head Office - Jaipur</h3>
            <p>
              <strong>S R Legal Services Pvt. Ltd.</strong><br />
              Kharbas Complex, Sirsi Road,<br />
              Panchyawala, Jaipur, Rajasthan - 302034
            </p>
          </div>
          <div className="office-card">
            <h3>Second Main Office - Jaipur</h3>
            <p>
              302, 3rd Floor, Vinayak Enclave,<br />
              Nursery Circle, Vaishali Nagar,<br />
              Jaipur, Rajasthan
            </p>
          </div>
        </div>
        <div className="coverage">
          <p>
            Operating across all <span>33 districts</span> of Rajasthan
          </p>
          <p>Expanding to other states soon</p>
        </div>
      </section>

      
    </div>
  );
};

export default About;
