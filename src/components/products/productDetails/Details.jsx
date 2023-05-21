import React from 'react'
import { AiFillStar } from 'react-icons/Ai'
import './details.scss'
import { MdOutlineAddShoppingCart } from 'react-icons/Md'


const Details = ({ product }) => {


  return (
    <>
      {/* {loading && <p>Loading...</p>}
      {product && */}

        <div className='details-wrapper'>

          <div className='details-container'>

            <div className='img-wrapper'>
              <div className='largeProductImgContainer'>
                <img className='largeProductImg' src={product.imageURL[0]} alt="Product image" srcSet="" />
              </div>
              <div className='smallImg-wrapper'>
                <img className='smallProductImg' src={product.imageURL[1]} alt="Product image" srcSet="" />
                <img className='smallProductImg' src={product.imageURL[2]} alt="Product image" srcSet="" />
                <img className='smallProductImg' src={product.imageURL[3]} alt="Product image" srcSet="" />
                <img className='smallProductImg' src={product.imageURL[4]} alt="Product image" srcSet="" />
              </div>
            </div>
            <div className='text-wrapper'>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className='detailsLine'></div>
              <div className='reviews'>
                <div className='reviewStars'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className='review-count'>
                  <p>16 Reviews</p>
                </div>
              </div>
              <p className='productDetailsPrice'>$30</p>
              {console.log(product)}
              <div className='addToCart'>
                <div className='productDetailsButtonWrapper'>
                  <button>-</button>
                  <div className='productDetailsProductAmount'><p>2</p></div>
                  <button>+</button>
                </div>
                <button className='addToCartBtn'>Add to Cart <span className='addToCartBtnIcon'><MdOutlineAddShoppingCart /></span></button>
              </div>

              <div className='sku-wrapper'>
                <div className='sku-ball-wrapper'>
                  <div className='ball red'></div>
                  <div className='ball yellow'></div>
                  <div className='ball green'></div>
                </div>
                <div className='sku-text-wrapper'>
                  <p>SKU: N/A</p>
                </div>
              </div>

              <button className='wishlistBtn'>Add to wishlist</button>
              <p className='productDetailsCategory'>Category: {product.category}</p>
            </div>

          </div>
        </div>
    </>
  )
}

export default Details