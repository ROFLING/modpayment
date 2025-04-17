import React from 'react';
import Header from './Header';
import Hero from './components/Hero';
import ProductBlock from './components/ProductBlock';
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductBlock />
      <Cards />
      <div className="modpayment-text">MODPAYMENT</div>
      <div className="modpayment-text-right">MODPAYMENT</div>
    </>
  );
}

export default App;
