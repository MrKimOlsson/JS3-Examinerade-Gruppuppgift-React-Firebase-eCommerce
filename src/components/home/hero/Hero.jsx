import React from 'react'
import { useState, useEffect } from 'react'
import './hero.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Hero = ({ products }) => {

  // Use state to set current product
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  useEffect(() => {

    // Interval to dispal a new product every third second
    const interval = setInterval(() => {
      nextProduct()
  }, 3000)

    return () => {
      clearInterval(interval)
    }
}, [products] )


// Previous product function
const previousProduct = () => {
  setCurrentProductIndex((prevIndex) => 
  prevIndex === 0 ? products.length -1 : prevIndex - 1
  )
}

// Next product function
const nextProduct = () => {
  setCurrentProductIndex((prevIndex) =>  {
    if(prevIndex >= products.length -1) return 0
    else return prevIndex +1
  }
  )
}

// If no products return nothing
if (products.length === 0) {
  return null
}

// If products exist - take current product
const currentProduct = products[currentProductIndex]
// get the current product image and title
const imageURL = currentProduct ? currentProduct.imageURL[0] : ''
const title = currentProduct ? currentProduct.title : ''
const id = currentProduct ? currentProduct.id : ''
  

  return (
    <div className='hero-wrapper'>
        <button className="arrowBtn" onClick={previousProduct}>
          <AiOutlineLeft />
        </button>
        <div className='hero-container'>



        <Link to={`/productDetails/${id}`}>

      <div className='hero'>
          <div className='hero-text'>
            <h1>Welcome to bmarketo shop</h1>
            <h2>{title}</h2><br />
            <button className='shopNowBtn'>SHOP NOW</button>
          </div>
          
          <div className='hero-img-container'>
          <img src={imageURL} alt="" />
          </div>
        </div>  
        </Link>


      </div>
          <button className="arrowBtn" onClick={nextProduct}>
            <AiOutlineRight />
          </button>  
    </div>
  )
}

export default Hero