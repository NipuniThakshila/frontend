import React from 'react'
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'

function NavBar() {
  const navref = useRef();

  const showNavbar = () => {
    navref.current.classList.toggle('responsive-nav');
  }

  return (
    <header>
      <h3>AT DIGITAL</h3>
      <nav ref={navref}>
        <a href='/#'>HOME</a>
        <a href='/#'>SERVICES</a>
        <a href='/#'>ABOUT US</a>
        <a href='/#'>CONTACT US</a>
        <a href='/#'>CAREERS</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}

export default NavBar
