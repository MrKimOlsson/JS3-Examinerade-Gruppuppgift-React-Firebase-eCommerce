import { useState } from 'react'
import '../components/products/productGrid/gridButton/GridButton'
import Hero from '../components/home/hero/Hero'
import GridMenu from '../components/products/productGrid/gridMenu/GridMenu'
import Grid from '../components/products/productGrid/Grid'
// import GridButton from '../components/products/productGrid/gridButton/GridButton'
import SpecialOffers from '../components/products/specialOffers/SpecialOffers'
import ProductCarousell from '../components/home/productCarousell/ProductCarousell'
import AdminPost from '../components/home/adminPosts/AdminPost'
import NewsletterSub from '../components/home/newsletter/NewsletterSub'

const Home = ({ products }) => {

// Desides how many products will be shown in the grid
let [baseAmount, setBaseAmount] = useState(8);
let displayProducts = products.slice(0, baseAmount)

  return (
    <>
     {
        products.length > 0
          ? <Hero key={products._id} products={products} />
          : <h2>No products to show</h2>
      }
      <GridMenu />
      {
        displayProducts.length > 0
          ? <Grid key={displayProducts._id} displayProducts={displayProducts} />
          : <h2>No products to show</h2>
      }
      
      <div className='grid-button-container'>
        {/* On click - the amount of the grid will increse by 8 */}
        <button onClick={() => setBaseAmount(baseAmount + 8)}>LOAD MORE</button>
      </div>  

      <SpecialOffers />
      {
        products.length > 0
          ? <ProductCarousell key={products._id} products={products} />
          : <h2>No products to show</h2>
      }
      <AdminPost />
      <NewsletterSub />
    </>
  )
}

export default Home