import React from 'react';
import './ProductBlock.css';
import wallet from '../assets/images/wallet.png';
import secure from '../assets/images/secure.png';
import global from '../assets/images/global.png';
import cardmain from '../assets/images/cardmain.png';

const ProductBlock = () => {
  return (
    <section id="product" className="product-block">
      <div className="product-block__container">
        <div className="product-block__top-container">
          <h2 className="product-block__heading">Payments that just{'\n'}work</h2>
          <p className="product-block__subtitle">
            Accept card payments, bank transfers, and more with a single{'\n'}integration that fits right into your product's architecture.
          </p>
          <div className="product-block__divider"></div>
        </div>
        <img src={wallet} alt="Wallet" className="product-block__wallet-image" />
        <div className="product-block__middle-container-second">
          <img src={secure} alt="Secure Payments" className="product-block__secure-image" />
        </div>
        <div className="product-block__middle-container">
          <img src={global} alt="Global Payments" className="product-block__global-image" />
        </div>
        <div className="product-block__bottom-container">
          <img src={cardmain} alt="Card Main" className="product-block__cardmain-image" />
        </div>
      </div>
    </section>
  );
};

export default ProductBlock; 