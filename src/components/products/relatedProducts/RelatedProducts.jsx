import React from 'react'
import { useState } from 'react'
import './relatedProducts.scss'
import RelatedProductsProduct from './relatedProductsProduct/RelatedProductsProduct'

const RelatedProducts = ({ matches }) => {


    // Desides how many matching products will be shown
    let [matchAmount, setMatchAmount] = useState(4);
    let displayMatches = matches.slice(0, matchAmount)

  return (
    <div className='related-products-component-wrapper'>

        <div className='related-products-component-container'>
            <h3>Related Products</h3>
            <div className='related-products-grid-container'>
                    {   
                        displayMatches.length > 0
                        ? displayMatches.map(product => <RelatedProductsProduct key={product.id} product={product} />)
                        : <h2>No products to show</h2>
                    }
            </div>   
        </div>
    </div>
  )
}

export default RelatedProducts
