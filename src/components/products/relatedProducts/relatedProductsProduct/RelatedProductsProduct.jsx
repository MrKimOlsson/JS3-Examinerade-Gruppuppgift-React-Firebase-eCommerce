import React from 'react'
import '../relatedProducts.scss'
import { Link } from 'react-router-dom'


const RelatedProductsProduct = ({ product }) => {

  return (
    <Link to={`/productDetails/${product.id}`}>
    <div className='related-products-product-container'>
      <img src={product.imageURL[0]} alt="" />
      <div className='grid-text'>
          <p>{product.title}</p>
          <p>{product.price}</p>
      </div>
    </div>
    </Link>
  )
}

export default RelatedProductsProduct

