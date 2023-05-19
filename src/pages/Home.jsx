import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/products/productsSlice'
import Loader from '../components/loader/Loader'

import Hero from '../components/home/hero/Hero'
import GridMenu from '../components/products/productGrid/gridMenu/GridMenu'
import Grid from '../components/products/productGrid/Grid'
import GridButton from '../components/products/productGrid/gridButton/GridButton'
import SpecialOffers from '../components/products/specialOffers/SpecialOffers'
import ProductCarousell from '../components/home/productCarousell/ProductCarousell'
import AdminPost from '../components/home/adminPosts/AdminPost'
import NewsletterSub from '../components/home/newsletter/NewsletterSub'

const Home = ({ products }) => {




  // { loading && <Loader />}
  //     { error && <p>{error}</p>}

  // filter products
  // Get a list of 8 products
  // Get 3 separate products for special offers
  // on click grid button increase the list by 12 more
  


// Find the index of the first match of a product category in the products array
//  const category = () => {
//   const i = products.findIndex(e => e.category === 'Pants');
//   if (i > -1) {
//   return console.log(products[i])
// }
//  }
//  category()

// Find the index of the first match of a product category in the products array
// const category = () => {
//   const i = products.find(e => e.category === 'Pants');
//   if (i > -1) {
//   return console.log(products[i])
// }
//  }
//  category()


  // let footwear = []
  // const i = []

  return (
    <>
      {/* { loading && <Loader />}
      { error && <p>{error}</p>} */}
      <Hero />
      <GridMenu />

      { 
        products.length > 0
        ? <Grid key={products._id} products={products} />
        : <h2>No products to show</h2>
      }
      <GridButton />
      <SpecialOffers />
      {/* <ProductCarousell /> */}
      { 
        products.length > 0
        // ? <ProductCarousell key={products.id} products={products} />
        ? <ProductCarousell key={products._id} products={products} />
        : <h2>No products to show</h2>
      }
      <AdminPost />
      <NewsletterSub />
      
    </>
  )
}

export default Home