import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="logo">
        S R Legal<span>&nbsp;Services</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
                to="/clients"
                className={location.pathname === "/clients" ? "active" : ""}
            >
                Clients
            </Link>
</li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
