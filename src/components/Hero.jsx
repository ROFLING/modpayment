import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">
        <div className="hero__title-light">
          <div>DISCOVER THE</div>
          <div>FUTURE OF</div>
        </div>
        <span className="hero__title-dark">GLOBAL PAYMENTS</span>
      </h1>
      
      <div className="hero__description-container">
        <div className="hero__lines-container">
          <div className="hero__vertical-line"></div>
          <div className="hero__horizontal-line"></div>
        </div>
        <p className="hero__description">
          Securely connect cards, crypto, and banks to your product — even before launch
        </p>
      </div>

      <div className="hero__buttons">
        <button className="hero__button hero__button--filled">START WITH MODPAYMENT</button>
        <button className="hero__button hero__button--outlined">ABOUT THE PLATFORM</button>
      </div>
    </div>
  );
};

export default Hero; 