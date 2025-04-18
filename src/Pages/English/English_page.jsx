import React from 'react';
import Navbar from '../English/Components/Navbar';
import Hero from './Components/Hero';
import ProductSection from './Components/ProductSection';
// Import other components as needed
// import AboutUs from '../components/AboutUs/AboutUs';
// import Products from '../components/Products/Products';
// import FarmingGuide from '../components/FarmingGuide/FarmingGuide';
// import LivePrices from '../components/LivePrices/LivePrices';
// import ContactUs from '../components/ContactUs/ContactUs';

const EnglishPage = () => {
  return (
    <div className="english-page">
      <Navbar />
      <br></br>
      <Hero/>
      <ProductSection/>
    </div>
  );
};

export default EnglishPage;