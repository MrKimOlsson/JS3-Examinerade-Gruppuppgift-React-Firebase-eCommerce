import React from 'react'
import CartItems from '../components/cart/cartItems/CartItems'
import TotalSum from '../components/cart/totalSum/TotalSum'
import NewsletterSub from '../components/home/newsletter/NewsletterSub'

function Cart() {
  return (
    <>
      <div className="cart-wrapper">
        <div className="cartItem-wrapper">
          <h2>Cart (1 item)</h2>
          <p className='ci-p'>Shipped by Bmarkedo</p>
          <CartItems />
          <CartItems />

        </div>
        <TotalSum />
      </div>
      <NewsletterSub />
    </>
  )
}

export default Cart