import React from 'react'
import LargeGrid from '../components/products/productGrid/largeGrid/LargeGrid'
import GridMenu from '../components/products/productGrid/gridMenu/GridMenu'
import WideHero from '../components/universal/wideHero/WideHero'
import SpecialOffersWide from '../components/products/specialOffersWide/SpecialOffersWide'


function Products({ products }) {

  return (
    <>
    <WideHero />
    <GridMenu />
    { 
      products.length > 0
          ? <LargeGrid key={products._id} products={products} />
          : <h2>No products to show</h2>
        }
    <SpecialOffersWide />
    </>
  )
}

export default Products