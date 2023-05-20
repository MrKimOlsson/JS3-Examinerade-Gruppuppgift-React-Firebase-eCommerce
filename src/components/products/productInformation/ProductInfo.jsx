import React from 'react'
import ProductInfoMenu from './productInfoMenu/ProductInfoMenu'
import './productInfo.scss'
// import ProductImage from '../../../images/469x356.svg'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import Product from '../../product/Product'
import { clearProduct, getProductById } from '../../../store/products/singleProductSlice'


const ProductInfo = ({ product }) => {

  // const dispatch = useDispatch()
  // const { id } = useParams()

  // useEffect(() => {
  //   dispatch(getProductById(id))

  //   return () => {
  //     dispatch(clearProduct())
  //   }

  // }, [])

  // const { product, loading, error } = useSelector(state => state.singleProduct)

  // if(error) {
  //   return (
  //     <div>
  //       <h2>{error}</h2>
  //     </div>
  //   )
  // }


  return (
    <>
    
    <div className='product-info-component-wrapper'>
        <ProductInfoMenu />
        <div className='product-info-title-container'>

          <h3 className='product-info-title'>{product.title}</h3>
        </div>
        <div className='product-info-container'>
            <div className='product-info-text'>
                <p>{product.description}
                </p>
             </div>
              <div className='product-info-img-container'>
                <img src={product.imageURL[0]} alt="" srcSet="" />
              </div>
        </div>



    </div>
     </>
  )
}

export default ProductInfo