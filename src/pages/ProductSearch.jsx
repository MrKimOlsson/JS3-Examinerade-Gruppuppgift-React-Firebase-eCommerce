import React from 'react'
import ProductSearchGrid from '../components/products/productGrid/productSerachGrid/ProductSearchGrid'
import GridMenu from '../components/products/productGrid/gridMenu/GridMenu'
import WideHero from '../components/universal/wideHero/WideHero'
import SpecialOffersWide from '../components/products/specialOffersWide/SpecialOffersWide'


//   productSerachFunction()
const ProductSearch = ({ products }) => {

    const productSerachFunction = () => {
        products.forEach(product => {
          if(product.category.includes('Coat')){
            console.log('You got a match')
            let matches = product
            console.log(matches)
          }
          console.log('No match')
        });
      }
      productSerachFunction()

    return (
        <>
        <WideHero />
        <GridMenu />
        { 
          matches.length > 0
              ? <ProductSearchGrid key={products._id} products={products} />
              : <h2>No products to show</h2>
            }
        <SpecialOffersWide />
        </>
      )
    }

export default ProductSearch