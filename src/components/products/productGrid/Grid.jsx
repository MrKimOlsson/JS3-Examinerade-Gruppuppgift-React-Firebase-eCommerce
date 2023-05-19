import React from 'react'
// import { useState } from 'react'
import './grid.scss'
// import ProductListItem from '../../productListItem/ProductListItem'
// import { useFetchAmount } from "../../../hooks/useFetch"
// import { useDispatch, useSelector } from 'react-redux'
import Product from '../../product/Product'
// import { useEffect } from 'react'
// import { getAllProducts } from '../../../store/products/productsSlice'


const Grid = ({ products }) => {
  
  return (

    <div className='grid-component'>
        <div className='grid-container'>

            {/* { loading && <p>Loading...</p> }
            { error && <p>{error}</p> } */}

            {
            products.length > 0
            ? products.map(product => <Product key={product.id} product={product} />)
            : <h2>No products to show</h2>
          }
        
      </div>
    </div>

  )
}
export default Grid

// const Grid = () => {
  
  // Change the amount of products in the grid
  // let amount = 8;
  
  // const [url, setUrl] = useState('http://localhost:9999/api/product')
  // const { data: products, loading, error } = useFetchAmount(url, { method: 'GET' }, amount)

//   return (

//     <div className='grid-component'>
//         <div className='grid-container'>

//         { loading && <p>Loading...</p> }
//         { error && <p>{error}</p> }

//         { products && !loading && !error && products.map(product => (
//           <ProductListItem key={product._id} product={product} />
//         ))}
        
//       </div>
//     </div>
//   )
// }

// export default Grid

