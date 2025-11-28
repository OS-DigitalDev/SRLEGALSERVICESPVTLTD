import React from "react";
import "./Contact.css";
import handleSubmit from "../components/handleSubmit";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Get in <span>Touch</span></h1>
          <p>We’re here to help you with professional recovery and management solutions.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              Reach out for any service inquiries, partnerships, or support — our team will respond promptly.
            </p>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Head Office</h4>
                <p>
                  <strong>S R Legal Services Pvt Ltd</strong><br />
                  Kharbas Complex, Sirsi Road,<br />
                  Panchyawala, Jaipur, Rajasthan – 302034<br />
                  <a
                    href="https://www.google.com/maps/place/S+R+Legal+Services+Pvt+Ltd/@26.9216592,75.7234849,17z"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link"
                  >
                    📍 View on Google Maps
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 992-9112-467<br />+91 882-4197-135</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>srlegal10@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Your Message..." required></textarea>
              </div>
              <button type="submit" className="btn-primary-2">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.610634578987!2d75.7234849!3d26.9216592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49fb31ab8e3%3A0xa6bdb19498989851!2sS%20R%20Legal%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1730185600000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="S R Legal Services Map"
        ></iframe>
      </section>

      {/* FontAwesome */}
      <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Contact;
