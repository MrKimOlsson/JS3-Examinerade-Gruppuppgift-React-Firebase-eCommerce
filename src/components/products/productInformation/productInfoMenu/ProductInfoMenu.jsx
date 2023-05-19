import React from 'react'
import './productInfoMenu.scss'

const ProductInfoMenu = () => {
  return (
    <div className='product-info-menu-wrapper'>
      <div className='product-info-menu-container'>
          <button>DESCRIPTION</button>
          <button>ADDITIONAL INFO</button>
          <button>REVIEWS {"(0)"}</button>
          <button>SHIPPING & DELIVERY</button>
      </div>
    </div>

  )
}

export default ProductInfoMenu