import logo from "../assets/images/logo.svg";
import React, { useState, useEffect } from 'react';

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add('scrolled-down');
      } else {
        document.body.classList.remove('scrolled-down');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [isActive]);

  return (
    <>
      <ScrollHandler />
      <div className="header-wrapper">
        <header className="header">
          <a href="/" className="navi-logo">
            <img src={logo} alt="logo" />
          </a>
          <a href="/" className="mobile-navi-shop-button">
            <span>Meat Shop</span>
          </a>
          <div
            className={`nav-icon ${isActive ? 'active' : ''}`}
            id="nav-icon"
            onClick={handleToggle}
          >
            <span></span>
          </div>
          <div className="navi-wrapper">
            <nav className={`nav ${isActive ? 'active' : ''}`}  onClick={handleToggle}>
              <ul>
                <li>
                  <a href="/">
                    <span>Produkte</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Catering</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Über uns</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Kontakt</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Bestellen </span>
                  </a>
                </li>
              </ul>
              <a href="/" className="navi-shop-button">
                Meat Shop
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

