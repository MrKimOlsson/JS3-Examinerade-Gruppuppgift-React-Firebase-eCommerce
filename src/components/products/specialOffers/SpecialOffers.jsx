import React from 'react'
import './specialOffers.scss'
import SpecialOffersImage from '../../../images/369x310.svg'
import { MdOutlineAddShoppingCart } from 'react-icons/Md'
import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearProduct, getProductById } from '../../../store/products/singleProductSlice'

const SpecialOffers = ({ products }) => {

//     let id = '6457647e222f0c52a46addcc'

    // let productOne = products[4]
    // let productTwo = products[6]
    
//   const dispatch = useDispatch()
// //   const { id } = useParams()

//   useEffect(() => {
//     dispatch(getProductById(id))

//     return () => {
//       dispatch(clearProduct())
//     }

//   }, [])

//   const { productOne, loading, error } = useSelector(state => state.singleProduct)

//   if(error) {
//     return (
//       <div>
//         <h2>{error}</h2>
//       </div>
//     )
//   }


  return (
    <>
    {/* { loading && <p>Loading...</p> }
     { productOne && */}
    
    <div className='specialOffers-container'>
        <div className='specialOffers-card'>

            <img className='specialOffers-image' src={SpecialOffersImage} alt="product image" />
            <div className='specialOffer-text'>
                <p className='specialOffer-title'></p>
                <div className='specialOffer-price'><p><span>$50.00</span></p> <p>$30.00</p><div></div> <MdOutlineAddShoppingCart /></div>
            </div>
        </div>
        {/* {console.log(product.title)} */}

        <div className='specialOffers-card'>
            <div className='specialOffer-saletext'>
                <h4>Up to sell</h4>
                <h5>50% OFF</h5>
                <h6>Get The Best Price</h6>
                <p>Get the best daily offer et accusam et<br /> justo duo dolores et ea rebum. Stet<br /> clita kasd gubergren no sea taki</p>
                <p className='specialOffers-card-more'>Discover More</p>
            </div>
        </div>

        <div className='specialOffers-card'>
            <img src={SpecialOffersImage} alt="product image" />
            <div className='specialOffer-text'>
                <p className='specialOffer-title'>Table Lamp - scelerisque tempore</p>
                <div className='specialOffer-price'><p><span>$50.00</span></p> <p>$30.00</p><div></div> <MdOutlineAddShoppingCart /></div>
            </div>
        </div>
        
        
    </div>
    </>
  )
}

export default SpecialOffers