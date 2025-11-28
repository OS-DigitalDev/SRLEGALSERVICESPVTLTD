import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">
     

      {/* Hero Section */}
      <section className="services-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Our <span>Services</span></h1>
          <p>Comprehensive recovery and management solutions for financial institutions</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="icon"><i className="fas fa-landmark"></i></div>
            <h3>Loan & Debt Recovery</h3>
            <p>
              Efficient and ethical recovery of overdue loans, EMIs, and financial dues through
              our trained professionals.
            </p>
          </div>
          <div className="service-card">
            <div className="icon"><i className="fas fa-car"></i></div>
            <h3>Vehicle Repossession</h3>
            <p>
              Legally compliant and professional repossession of vehicles for banks and NBFCs
              across Rajasthan.
            </p>
          </div>
          <div className="service-card">
            <div className="icon"><i className="fas fa-chart-line"></i></div>
            <h3>NPA Management</h3>
            <p>
              End-to-end management of non-performing assets with detailed reporting and
              performance tracking.
            </p>
          </div>
          <div className="service-card">
            <div className="icon"><i className="fas fa-headset"></i></div>
            <h3>Telecalling & Reminder Services</h3>
            <p>
              Automated and manual telecalling systems to ensure consistent communication and
              timely EMI collection.
            </p>
          </div>
          <div className="service-card">
            <div className="icon"><i className="fas fa-user-shield"></i></div>
            <h3>Field Investigation</h3>
            <p>
              On-ground verification and recovery support handled by our experienced field team
              across all districts.
            </p>
          </div>
          <div className="service-card">
            <div className="icon"><i className="fas fa-file-signature"></i></div>
            <h3>Legal Recovery Support</h3>
            <p>
              Coordination with legal departments and compliance support to ensure smooth and
              lawful recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partners">
        <h2>Trusted By Leading Institutions</h2>
        <p>
          We are proud to be associated with top banks, NBFCs, and financial firms across
          Rajasthan.
        </p>
        <div className="logos">
          <div className="logo-card">HDFC Bank</div>
          <div className="logo-card">ICICI Bank</div>
          <div className="logo-card">Axis Bank</div>
          <div className="logo-card">Tata Capital</div>
          <div className="logo-card">HDB Financial Services</div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;
