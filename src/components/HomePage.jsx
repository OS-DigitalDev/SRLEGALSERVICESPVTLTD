import React from 'react';
import './HomePage.css';
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a demo home page for the project.</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    </div>
  );
};

export default HomePage;