import React from 'react'
import WideHero from '../components/universal/wideHero/WideHero'
import Details from '../components/products/productDetails/Details'
import ProductInfo from '../components/products/productInformation/ProductInfo'
import RelatedProducts from '../components/products/relatedProducts/RelatedProducts'
import SmallProductCarousell from '../components/products/smallCarousell/SmallProductCarousell'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// // import { useFetch } from '../hooks/useFetch'
// import Product from '../components/product/Product'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllProducts } from '../features/products/productsSlice'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import Product from '../components/product/Product'
// import { clearProduct, getProductById } from '../features/products/singleProductSlice'


function ProductDetails() {


//   const dispatch = useDispatch()
//   const { id } = useParams()

//   useEffect(() => {
//     dispatch(getProductById(id))

//     return () => {
//       dispatch(clearProduct())
//     }

//   }, [])

//   const { product, loading, error } = useSelector(state => state.singleProduct)

//   if(error) {
//     return (
//       <div>
//         <h2>{error}</h2>
//       </div>
//     )
//   }

  
  // const [product, setProduct] = useState(null)
  // const { id } = useParams();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const res = await fetch('http://localhost:9999/api/product/' + id)
  //     const data = await res.json()
  //     console.log(data)
  //     setProduct(data)
  //   }
  //   getProduct()
  // }, [])

  
  // console.log(product.title)


  
  
  return (
    <div>

      <WideHero />
      <Details />
      <ProductInfo />
      <RelatedProducts />
      <SmallProductCarousell />
    </div>
  )
}

export default ProductDetails