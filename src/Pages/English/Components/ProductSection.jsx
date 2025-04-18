import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProductSection.css';

const ProductSection = () => {
  const sectionRef = useRef(null);
  const [isCompletelyScrolled, setIsCompletelyScrolled] = useState(false);
  
  // Products data
  const products = [
    {
      id: 1,
      name: "Coconut Pest Sprayer",
      description: "Advanced pest control solution for healthy coconut cultivation",
      image: "https://img.freepik.com/free-photo/cinematic-coconut-beach_23-2151645740.jpg?uid=R92362264&ga=GA1.1.1261156144.1730714495&semt=ais_hybrid&w=740",
      direction: "topLeft"
    },
    {
      id: 2,
      name: "Agreo-EV",
      description: "Eco-friendly electric vehicle designed for agricultural operations",
      image: "https://img.freepik.com/free-photo/agriculture-healthy-food_23-2151969852.jpg?t=st=1744949584~exp=1744953184~hmac=fed343f4010b653b9a651b4fd67e09eb54abceef3f6aa2b46e95a3b9653ec7bc&w=740",
      direction: "bottom",
      elevated: true
    },
    {
      id: 3,
      name: "Coconut Harvesting Tool",
      description: "Efficient tool for safe and quick coconut harvesting.",
      image: "https://img.freepik.com/free-photo/coconut-beach-cinematic-style_23-2151645722.jpg?t=st=1744949627~exp=1744953227~hmac=6b5c744166cb33d378f3f535ac00e99ea8ff7f2c11c52fc39923db225735b373&w=740",
      direction: "topRight"
    }
  ];

  // Enhanced scrolling behavior with improved offset range
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Wider range for smoother transitions
  });
  
  // Track when section is fully scrolled through with smoother thresholds
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= 0.65) {
        setIsCompletelyScrolled(true);
      } else if (value < 0.25) {
        setIsCompletelyScrolled(false);
      }
      // Maintain state between thresholds (hysteresis) for smoother transitions
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={sectionRef} className="product-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Products
        </motion.h2>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              scrollYProgress={scrollYProgress}
              isCompletelyScrolled={isCompletelyScrolled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, scrollYProgress, isCompletelyScrolled }) => {
  // Configure diagonal animations with better initial values
  let initialX = 0;
  let initialY = 0;
  
  // Set diagonal animations for side cards with more subtle movement
  if (product.direction === "topLeft") {
    initialX = -200;
    initialY = -150;
  } else if (product.direction === "topRight") {
    initialX = 200;
    initialY = -150;
  } else if (product.direction === "bottom") {
    initialY = 150;
  }
  
  // Transform values with smoother curves for better scroll experience
  const x = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [initialX, initialX * 0.3, 0, 0, initialX * -0.05]
  );
  
  const y = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [initialY, initialY * 0.3, 0, 0, initialY * -0.05]
  );
  
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.5, 0.85, 1], 
    [0, 0.5, 1, 1, 0.9]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.8, 0.9, 1, 1, 0.98]
  );
  
  // Final position styles to apply when fully scrolled with smoother transition
  const fixedStyle = isCompletelyScrolled ? {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1
  } : {
    x,
    y,
    opacity,
    scale
  };

  return (
    <motion.div
      style={fixedStyle}
      className={`product-card ${product.elevated ? 'elevated' : ''}`}
      transition={{ 
        type: "spring", 
        damping: 15,  // Lower damping for smoother oscillation
        stiffness: 80, // Lower stiffness for more elastic feel
        mass: 1.2     // More mass means smoother motion
      }}
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
        <motion.button 
          className="product-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductSection;