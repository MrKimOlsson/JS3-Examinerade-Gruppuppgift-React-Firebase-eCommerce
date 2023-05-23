import React from 'react'
import './CustomerOrder.scss'

const CustomerOrder = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.products);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }

  return (
    <>
      {cartItems.map(product => (
        <div className="cartItem-details" key={product.id}>
          <div className="ci-details-left">
            <div className="ci-img-placeholder">
              <img className='largeProductImg' src={product.imageURL[0]} alt="Product image" srcSet="" />
            </div>
            <div className="ci-details">
              <p className="ci-details-title">{product.title}</p>
              <p className="ci-details-shortDescription">{product.shortDescription}</p>
              <p className="ci-details-shipping">
                <FaShippingFast /> Faster shipping
              </p>
            </div>
          </div>

        </div>
      ))}
    </>
  );
}

export default CustomerOrder