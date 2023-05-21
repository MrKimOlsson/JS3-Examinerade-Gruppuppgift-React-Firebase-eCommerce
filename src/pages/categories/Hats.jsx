import React from 'react'
import ProductSearchGrid from '../../components/products/productGrid/productSerachGrid/ProductSearchGrid'
import GridMenu from '../../components/products/productGrid/gridMenu/GridMenu'
import WideHero from '../../components/universal/wideHero/WideHero'
import SpecialOffersWide from '../../components/products/specialOffersWide/SpecialOffersWide'


const Hats = ({ products }) => {
    
    let matches = []
    
    // Searching the products array categories to find search word
    const productSerachFunction = () => {
        products.forEach(product => {
          if(product.category.includes('Hat')){
            return matches.push(product)
          }
        });
      }
      productSerachFunction()

    return (
        <>
        <WideHero />
        <GridMenu />
        <ProductSearchGrid key={matches.id} matches={matches} />
        <SpecialOffersWide />
        </>
      )
    }

export default Hats