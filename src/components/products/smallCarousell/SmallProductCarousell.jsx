import React from 'react'
import './smallProductCarousell.scss'
import ProductImage from '../../../images/200x122.svg'

const smallCarousell = () => {
  return (
        
    <div className='small-carousell-component-wrapper'>
        
        <div className='small-carousell-component-container'>

        <div className='small-carousell-grid-container'>
              <div className='small-carousell-product-container'>

                <div className='product-container'>
                    <img src={ProductImage} alt="" />
                </div>

                <div className='product-container'>
                    <img src={ProductImage} alt="" />
                </div>

                <div className='product-container'>
                    <img src={ProductImage} alt="" />
                </div>

                <div className='product-container'>
                    <img src={ProductImage} alt="" />
                </div>

                <div className='product-container'>
                    <img src={ProductImage} alt="" />
                </div>
                
            </div>   
        
        </div>
        </div>

    </div>
   
  )
}

export default smallCarousell