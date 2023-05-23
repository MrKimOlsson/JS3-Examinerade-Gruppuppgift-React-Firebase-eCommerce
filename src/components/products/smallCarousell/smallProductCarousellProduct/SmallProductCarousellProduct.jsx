import React from 'react'
import './smallProductCarousellProduct.scss'
import { Link } from 'react-router-dom'


const SmallProductCarousellProduct = ({ product }) => {
  return (
    <Link to={`/productDetails/${product.id}`}>
      <div className='product-container'>
      <img src={product.imageURL[0]} alt="" />
      </div>
    </Link>
  )
}

export default SmallProductCarousellProduct