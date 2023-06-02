import React, { useState, useEffect }from 'react'
import WideHero from '../components/universal/wideHero/WideHero'
import Details from '../components/products/productDetails/Details'
import ProductInfo from '../components/products/productInformation/ProductInfo'
import RelatedProducts from '../components/products/relatedProducts/RelatedProducts'
import SmallProductCarousell from '../components/products/smallCarousell/SmallProductCarousell'
import useDoc from '../hooks/useDoc'
import Loader from '../components/loader/Loader'
import { useParams, useLocation } from 'react-router-dom'


function ProductDetails({ products }) {
  
  
  const { id } = useParams()

  const { data: product, error, loading } = useDoc('products', id)
  if (!product) return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>

  )
    


  let matches = []
  const category = product.category
    
  // Searching the products array categories to find search word
  const productSerachFunction = () => {
      products.forEach(product => {
        if(product.category.includes(category)){
          return matches.push(product)
        }
      });
    }

    productSerachFunction()
    // console.log(matches)

  return (
    <>
      <WideHero key={'wideHeroProductKey'} product={product} />
      <Details key={'detailsProductKey'} product={product} />
      <ProductInfo key={'productInfoProductKey'} product={product} />
      <RelatedProducts key={'RelatedProductsProductKey'} matches={matches} />
      <SmallProductCarousell key={'SmallProductCarousellProductKey'} products={products} />
    </>
  )
}

export default ProductDetails