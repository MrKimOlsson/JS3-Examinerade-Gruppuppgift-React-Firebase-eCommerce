import React from 'react'
import './relatedProducts.scss'
import ProductImage from '../../../images/270x295.svg'

const RelatedProducts = () => {
  return (
    <div className='related-products-component-wrapper'>
        
        <div className='related-products-component-container'>
            <h3>Related Products</h3>

        <div className='related-products-grid-container'>
                <div className='related-products-product-container'>
                    <img src={ProductImage} alt="" />
                    <div className='grid-text'>
                        <p>Product title</p>
                        <p>price</p>
                    </div>
                </div>

                <div className='product-container'>
                    <img src={ProductImage} alt="" />
                    <div className='grid-text'>
                        <p>Product title</p>
                        <p>price</p>
                    </div>
                </div>

                <div className='product-container'>
                    <img src={ProductImage} alt="" />
                    <div className='grid-text'>
                        <p>Product title</p>
                        <p>price</p>
                    </div>
                </div>

                <div className='product-container'>
                    <img src={ProductImage} alt="" />
                    <div className='grid-text'>
                        <p>Product title</p>
                        <p>price</p>
                    </div>
                </div>
            </div>   

        </div>
        
    </div>
  )
}

export default RelatedProducts