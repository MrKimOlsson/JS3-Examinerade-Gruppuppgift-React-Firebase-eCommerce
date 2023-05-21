import React, { useState, useRef, useEffect } from 'react';
import './productCarousell.scss';
import CarousellHeading from './carousellHeading/CarousellHeading';
import Carousell from './carousell/Carousell';

const ProductCarousell = ({ products }) => {
  
  const carousellRef = useRef(null);
  
  // scroll right
  const handleRightScroll = () => {
    const carousel = carousellRef.current;
    if (carousel) {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  // scroll left
  const handleLeftScroll = () => {
    const carousel = carousellRef.current;
    if (carousel) {
      carousel.scrollBy({ left: -300, behavior: 'smooth' })
    }
  };
  // autoscroll, improvment needed
  // const handleAutoScroll = () => {
  //   const carousel = carousellRef.current;
  //   if (carousel) {
  //     carousel.scrollBy({ left: 1, behavior: 'smooth' })
  //   }
  // }
  // useEffect(() => {
  //   const intervalId = setInterval(handleAutoScroll, 1000); 
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  
  return (
    <div className='productCarousell-wrapper'>
      <CarousellHeading />
      <div className='productCarousell-container'>
      <Carousell key={products._id} products={products} ref={carousellRef} />
      </div>
      <div className="btn-center">
        <div className='adminPostBtn'>
          <button onClick={handleLeftScroll}>&lt;</button>
        </div>
        <div className='adminPostBtn'>
          <button onClick={handleRightScroll}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousell;
