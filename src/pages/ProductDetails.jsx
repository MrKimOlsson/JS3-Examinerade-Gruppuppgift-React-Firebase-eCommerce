import React from 'react'
import WideHero from '../components/universal/wideHero/WideHero'
import Details from '../components/products/productDetails/Details'
import ProductInfo from '../components/products/productInformation/ProductInfo'
import RelatedProducts from '../components/products/relatedProducts/RelatedProducts'
import SmallProductCarousell from '../components/products/smallCarousell/SmallProductCarousell'
import useDoc from '../hooks/useDoc'
import Loader from '../components/loader/Loader'
import { useParams } from 'react-router-dom'


function ProductDetails() {

  const { id } = useParams()
  const { data: product, error, loading } = useDoc('products', id)

  if (!product) return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  )

  return (
    <>
      <WideHero key={'wideHeroProductKey'} product={product} />
      <Details key={'detailsProductKey'} product={product} />
      <ProductInfo key={'productInfoProductKey'} product={product} />
      <RelatedProducts key={'RelatedProductsProductKey'} product={product} />
      <SmallProductCarousell key={'SmallProductCarousellProductKey'} product={product} />
    </>
  )
}

export default ProductDetails