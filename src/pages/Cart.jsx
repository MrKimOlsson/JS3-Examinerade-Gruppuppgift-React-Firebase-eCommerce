import React from 'react'
import CartItems from '../components/cart/cartItems/CartItems'
import TotalSum from '../components/cart/totalSum/TotalSum'
import NewsletterSub from '../components/home/newsletter/NewsletterSub'
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart.products);

  return (
    <>
      <div className="cart-wrapper">
        <div className="cartItem-wrapper">
          <h2>Cart (1 item)</h2>
          <p className='ci-p'>Shipped by Bmarkedo</p>
          <CartItems />


        </div>
        <TotalSum cartItems={cartItems} />
      </div>
      <NewsletterSub />
    </>
  )
}

export default Cart