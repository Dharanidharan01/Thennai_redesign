import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProductSection.css';

const ProductSection = () => {
  const sectionRef = useRef(null);
  
  // Products data
  const products = [
    {
      id: 1,
      name: "Coconut Pest Sprayer                 ",
      
      description: "Advanced pest control solution for healthy coconut cultivation",
      image: "https://img.freepik.com/free-photo/cinematic-coconut-beach_23-2151645740.jpg?uid=R92362264&ga=GA1.1.1261156144.1730714495&semt=ais_hybrid&w=740",
      direction: "left"
    },
    {
      id: 2,
      name: "        Agreo-EV",
      description: "Eco-friendly electric vehicle designed for agricultural operations",
      image: "https://img.freepik.com/free-photo/agriculture-healthy-food_23-2151969852.jpg?t=st=1744949584~exp=1744953184~hmac=fed343f4010b653b9a651b4fd67e09eb54abceef3f6aa2b46e95a3b9653ec7bc&w=740",
      direction: "bottom"
    },
    {
      id: 3,
      name: "Coconut Harvesting Tool",
      description: "Efficient tool for safe and quick coconut harvesting          .",
      image: "https://img.freepik.com/free-photo/coconut-beach-cinematic-style_23-2151645722.jpg?t=st=1744949627~exp=1744953227~hmac=6b5c744166cb33d378f3f535ac00e99ea8ff7f2c11c52fc39923db225735b373&w=740",
      direction: "right"
    }
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={sectionRef} className="product-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, scrollYProgress }) => {
  // Configure animations based on direction
  let initialX = 0;
  let initialY = 0;
  
  if (product.direction === "left") {
    initialX = -200;
  } else if (product.direction === "right") {
    initialX = 100;
  } else if (product.direction === "bottom") {
    initialY = 100;
  }
  
  // Transform values based on scroll progress
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [initialX, 0, -initialX]
  );
  
  const y = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [initialY, 0, -initialY]
  );
  
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ x, y, opacity }}
      className="product-card"
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <button className="product-button">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default ProductSection;