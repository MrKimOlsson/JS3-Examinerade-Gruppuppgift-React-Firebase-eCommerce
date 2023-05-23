import React from 'react';
import './cartItems.scss';
import { BsTrash } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../../app/cartSlice';

function CartItems() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.products);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleQuantityChange = (e, product) => {
        const quantity = parseInt(e.target.value, 10);
        dispatch(updateQuantity({ productId: product.id, quantity }));
    };

    return (
        <>
            {cartItems.map((product) => (
                <div className="cartItem-details" key={product.id}>
                    <div className="ci-details-left">
                        <div className="ci-img-placeholder">
                            <img
                                className="largeProductImg"
                                src={product.imageURL[0]}
                                alt="Product image"
                                srcSet=""
                            />
                        </div>
                        <div className="ci-details">
                            <p className="ci-details-title">{product.title}</p>
                            <p className="ci-details-shortDescription">
                                {product.shortDescription}
                            </p>
                            <p className="ci-details-shipping">
                                <FaShippingFast /> Faster shipping
                            </p>
                        </div>
                    </div>
                    <div className="ci-details-right">
                        <select
                            className="ci-dropdown"
                            value={product.quantity}
                            onChange={(e) => handleQuantityChange(e, product)}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        <p className="ci-details-price">{product.quantity} x {product.price} kr</p>
                        <button onClick={() => handleRemoveFromCart(product)}>
                            <BsTrash /> Remove
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CartItems;

