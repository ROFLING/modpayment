import React from 'react';
import './Header.css';

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const scrollToProduct = () => {
    const productBlock = document.getElementById('product');
    if (productBlock) {
      const offsetTop = productBlock.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <img src="/src/assets/images/logo.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <button onClick={scrollToProduct}>Product</button>
        <button>How it works</button>
        <button>Pricing</button>
        <button>Contact</button>
      </nav>
      <button className="connect">join us</button>
    </header>
  );
}

export default Header;