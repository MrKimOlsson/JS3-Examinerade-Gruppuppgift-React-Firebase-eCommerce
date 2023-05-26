import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

import './totalSum.scss';

function TotalSum({ cartItems }) {
    const user = useSelector(state => state.auth.user);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Set the initial value to true

    const calculateTotalPrice = () => {
        if (!cartItems || cartItems.length === 0) {
            return 0;
        }

        const totalPrice = cartItems.reduce(
            (total, product) => total + product.price * product.quantity, 0);
        return totalPrice.toFixed(2);
    };

    const handleCheckout = async () => {
        if (!cartItems || cartItems.length === 0) {
            console.log('Cannot place an order with an empty cart.');
            return;
        }

        const db = getFirestore();
        const ordersRef = collection(db, 'orders');
        console.log('cartItems:', cartItems);

        if (!user) {
            setIsLoggedIn(false); // Set isLoggedIn to false when user is not logged in
            console.log('User not logged in. Cannot create order.');
            return;
        }

        try {
            const orders = cartItems.map((product) => ({
                productId: product.id,
                title: product.title,
                description: product.description,
                image: product.imageURL[0],
                price: product.price,
                quantity: product.quantity
            }));

            const totalPrice = calculateTotalPrice();

            const orderData = {
                userId: user.id,
                products: orders,
                totalPrice: totalPrice,
                status: 'Order placed'
            };

            await addDoc(ordersRef, orderData);
            console.log('Checkout successful');
            setOrderPlaced(true);
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div className="totalSum-wrapper">
            <div className="totalSum-inner-wrapper">
                <h2>Total</h2>
                <div className="ts-row">
                    <p>Deltotal</p>
                    <p className="bold">{calculateTotalPrice()} kr</p>
                </div>
                <div className="ts-row">
                    <p>Transport</p>
                    <p className="bold">0,00 kr</p>
                </div>
                <div className="totalsum-calc">
                    <div className="ts-row">
                        <p>Total price (incl. moms)</p>
                        <p className="bold">{calculateTotalPrice()} kr</p>
                    </div>
                    {!isLoggedIn && (
                        <div className="error-message">
                            <p className='errortext'>* You must log in to place an order *</p>
                        </div>
                    )}
                    {orderPlaced ? (
                        <div className="order-placed-message">
                            <p>Order placed!</p>
                        </div>
                    ) : (
                        <button onClick={handleCheckout}>Buy</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TotalSum;




