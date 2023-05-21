import React, { useState } from 'react'
import './smallProductCarousell.scss'
import ProductImage from '../../../images/200x122.svg'
import SmallProductCarousellProduct from './smallProductCarousellProduct/SmallProductCarousellProduct'
const smallCarousell = ({ products }) => {


    // Desides how many products will be shown in the grid
    let [productAmount, setProductAmount] = useState(4);
    let displayProducts = products.slice(0, productAmount)

  return (
        
    <div className='small-carousell-component-wrapper'>
        <div className='small-carousell-component-container'>
            <div className='small-carousell-grid-container'>
                <div className='small-carousell-product-container'>
                    {
                        displayProducts.length > 0
                        ? displayProducts.map(product => <SmallProductCarousellProduct key={product.id} product={product} />)
                        : <h2>No products to show</h2>
                    }
                </div>   
            </div>
        </div>
    </div>
   
  )
}

export default smallCarousell