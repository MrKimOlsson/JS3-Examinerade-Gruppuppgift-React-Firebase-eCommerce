import React from 'react'
import '../grid.scss'
import Product from '../../../product/Product'

const ProductSearchGrid = ({ matches }) => {
  
  return (

    <div className='grid-component'>
        <div className='grid-container'>

            {console.log(matches)}

            {
            matches.length > 0
            ? matches.map(product => <Product key={product.id} product={product} />)
            : <h2>No products to show</h2>
          }
        
      </div>
    </div>
  )
}

export default ProductSearchGrid