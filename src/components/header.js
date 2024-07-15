
import logo from "../assets/images/logo.svg";
import React, { useEffect } from 'react';


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
    return (
      <>
        <ScrollHandler />
        <div className="header-wrapper">
            <header className="header">
                <a href="/" className="navi-logo"><img src={logo} alt="logo" /></a>
                <div className="navi-wrapper">
                    <nav className="nav">
                        <ul>
                            <li><a href="/"><span>Produkte</span></a></li>
                            <li><a href="/"><span>Catering</span></a></li>
                            <li><a href="/"><span>Über uns</span></a></li>
                            <li><a href="/"><span>Kontakt</span></a></li>
                            <li><a href="/"><span>Bestellen </span></a></li>
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