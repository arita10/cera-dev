import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import ProductCarousel from './components/ProductCarousel';
import Footer from './components/Footer';


const images = [
  '/assets/images/product/glass.jpeg',
  '/assets/images/product/lamp.jpeg',
  '/assets/images/product/plate.jpeg',
];


function App() {

  return (
    <>
    <Header/>
    <div>
      <ProductCarousel/>
      {/* Other components that may need product data */}
    </div>
   <Footer/>
    </>
  );
}

export default App;
