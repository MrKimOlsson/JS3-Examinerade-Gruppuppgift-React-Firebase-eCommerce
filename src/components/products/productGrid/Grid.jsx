import React from 'react'
import './grid.scss'
import Product from '../../product/Product'


const Grid = ({ displayProducts }) => {
  
  return (

    <div className='grid-component'>
        <div className='grid-container'>

            {
            displayProducts.length > 0
            ? displayProducts.map(product => <Product key={product.id} product={product} />)
            : <h2>No products to show</h2>
            }
        
      </div>
    </div>

  )
}
export default Grid



