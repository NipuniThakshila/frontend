import React, { useState } from 'react';
import './HamburgerMenu.css'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <>&times;</> : <>☰</>}
      </button>
      {isOpen && (
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#careers">Careers</a>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;