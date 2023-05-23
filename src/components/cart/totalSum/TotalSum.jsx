import React from 'react';
import { useSelector } from 'react-redux';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

import './totalSum.scss';

function TotalSum({ cartItems }) {
    const user = useSelector(state => state.auth.user);

    const calculateTotalPrice = () => {
        if (!cartItems || cartItems.length === 0) {
            return 0;
        }

        const totalPrice = cartItems.reduce(
            (total, product) => total + product.price * product.quantity, 0);
        return totalPrice.toFixed(2);
    };

    const handleCheckout = async () => {
        const db = getFirestore();
        const ordersRef = collection(db, 'orders');
        console.log('cartItems:', cartItems);

        if (!user) {
            console.log('User not logged in. Cannot create order.');
            return;
        }

        try {
            const orders = cartItems.map(product => ({
                productId: product.id,
                title: product.title,
                description: product.description,
                image: product.imageURL[0],
                price: product.price
            }));

            await addDoc(ordersRef, { userId: user.id, products: orders });
            console.log('Checkout successful');
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };


    return (
        <div className="totalSum-wrapper">
            <div className="totalSum-inner-wrapper">
                <h2>Totalsumma</h2>
                <div className="ts-row">
                    <p>Deltotal</p>
                    <p className="bold">{calculateTotalPrice()} kr</p>
                </div>
                <div className="ts-row">
                    <p>Frakt</p>
                    <p className="bold">0,00 kr</p>
                </div>
                <div className="totalsum-calc">
                    <div className="ts-row">
                        <p>Totalsumma (incl. moms)</p>
                        <p className="bold">{calculateTotalPrice()} kr</p>
                    </div>
                    <button onClick={handleCheckout}>Gå till kassan</button>
                </div>
            </div>
        </div>
    );
}

export default TotalSum;


