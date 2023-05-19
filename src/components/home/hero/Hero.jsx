import React from 'react'
import './hero.scss'
import HeroProduct from '../../../images/625x647.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>Welcome to bmarketo shop</h1>
          <h2>Exclusive Chair<br />
          gold Collection</h2>
          <button>SHOP NOW</button>
        </div>
        
        <div className='hero-img'>
        <img src={HeroProduct} alt="" />
        </div>
      </div>    
    </div>
  )
}

export default Hero