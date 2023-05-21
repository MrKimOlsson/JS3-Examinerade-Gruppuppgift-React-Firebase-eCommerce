import React from 'react'
import './cartItems.scss'
import { BsTrash } from 'react-icons/bs'
import { FaShippingFast } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../app/cartSlice'

function CartItems() {
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
                    <div className="ci-details-right">
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
                        <p className="ci-details-price">{product.price} kr</p>
                        <button>
                            <BsTrash onClick={() => handleRemoveFromCart(product)} /> Ta bort
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}


export default CartItems