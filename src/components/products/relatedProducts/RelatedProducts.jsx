import React from 'react'
import './relatedProducts.scss'
import ProductImage from '../../../images/270x295.svg'

const RelatedProducts = ({ product }) => {


    // Check if product is related
    // check use params id



  return (
    <div className='related-products-component-wrapper'>
        
        <div className='related-products-component-container'>
        <h3>Related Products</h3>

        <div className='related-products-grid-container'>
            <div className='related-products-product-container'>
                <img src={product.imageURL[0]} alt="" />
                <div className='grid-text'>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            </div>

            <div className='related-products-product-container'>
                <img src={product.imageURL[0]} alt="" />
                <div className='grid-text'>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            </div>

            <div className='related-products-product-container'>
                <img src={product.imageURL[0]} alt="" />
                <div className='grid-text'>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            </div>

            <div className='related-products-product-container'>
                <img src={product.imageURL[0]} alt="" />
                <div className='grid-text'>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            </div>


            </div>   

        </div>
        
    </div>
  )
}

export default RelatedProducts