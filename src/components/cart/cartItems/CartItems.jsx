import React from 'react'
import './cartItems.scss'
import { BsTrash } from 'react-icons/bs'
import { FaShippingFast } from 'react-icons/fa'

function CartItems() {
  return (
    <>
        <div className="cartItem-details">
            <div className="ci-details-left">
                <div className="ci-img-placeholder"></div>
                <div className="ci-details">
                    <p className="ci-details-title">Tommy Hilfiger</p>
                    <p className="ci-details-shortDescription">TEE UNISEX 2 PACK - Tshirt - bas - grey</p>
                    <p className="ci-details-color">Färg: grey</p>
                    <p className="ci-details-size">Size: 180</p>
                    <p className="ci-details-shipping"><FaShippingFast /> Faster shipping</p>
                </div>
            </div>
            <div className='ci-details-right'>
                <select className="ci-dropdown">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <p className="ci-details-price">292,00 kr</p>
                <button><BsTrash /> Ta bort</button>
            </div>
        </div>

    </>
  )
}

export default CartItems