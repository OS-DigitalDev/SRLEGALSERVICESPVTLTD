import React from "react";

import "./ClientsPartners.css";
import handleSubmit from "../components/handleSubmit";

const ClientsPartners = () => {
  return (
    <div className="clients-page">
      

      {/* Hero Section */}
      <section className="clients-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>
            Our <span>Clients & Partners</span>
          </h1>
          <p>
            Trusted by leading banks, NBFCs, and financial institutions across Rajasthan
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <h2>Our Valued Clients</h2>
        <p className="section-subtitle">
          We proudly serve and collaborate with some of the most reputable financial institutions.
        </p>
        <div className="clients-grid">
          <div className="client-card">HDFC Bank</div>
          <div className="client-card">ICICI Bank</div>
          <div className="client-card">Axis Bank</div>
          <div className="client-card">Tata Capital</div>
          <div className="client-card">HDB Financial Services</div>
          <div className="client-card">IDFC First Bank</div>
          <div className="client-card">Hero Fincorp</div>
          <div className="client-card">Bajaj Finance</div>
          <div className="client-card">Mahindra Finance</div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2>Our Strategic Partners</h2>
        <p className="section-subtitle">
          Together, we achieve greater reach and efficiency in loan recovery and management.
        </p>

        <div className="partners-grid">
          <div className="partner-card">
            <i className="fas fa-building"></i>
            <h3>Banking Partners</h3>
            <p>
              We collaborate with major private and public sector banks for efficient recovery
              solutions.
            </p>
          </div>
          <div className="partner-card">
            <i className="fas fa-handshake"></i>
            <h3>NBFC Partners</h3>
            <p>
              Our NBFC partnerships ensure faster communication, verification, and on-field
              actions.
            </p>
          </div>
          <div className="partner-card">
            <i className="fas fa-balance-scale"></i>
            <h3>Legal Partners</h3>
            <p>
              We work alongside legal experts and compliance firms to handle sensitive financial
              cases lawfully.
            </p>
          </div>
        </div>
      </section>

      {/* Become a Partner / Client Section */}
      <section className="apply-section">
        <h2>Work With Us </h2>
        <p className="section-subtitle">
          Interested in collaborating with <strong>S R Legal Services Pvt Ltd</strong>?  
          Fill out the form below, and our team will get back to you shortly.
        </p>

        <div className="apply-form-container">
          <form className="apply-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <input type="text" placeholder="Contact Person" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Official Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Contact Number" required />
            </div>
            <div className="form-group">
              <textarea
                rows="4"
                placeholder="Tell us about your requirements..."
                required
              ></textarea>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Organization Name" required />
            </div>
            <button type="submit" className="btn-primary-2">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “S R Legal Services is one of the most reliable partners we’ve worked with.
              Their professionalism and recovery rate are unmatched.”
            </p>
            <h4>— Senior Manager, HDFC Bank</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “They have a strong presence across Rajasthan, and their quick turnaround time
              makes them stand out.”
            </p>
            <h4>— Regional Head, Axis Bank</h4>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default ClientsPartners;
