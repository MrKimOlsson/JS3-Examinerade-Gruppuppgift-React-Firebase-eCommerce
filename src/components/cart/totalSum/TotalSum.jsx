import React from 'react'
import './totalSum.scss'
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';


function TotalSum({ cartItems }) {
    const calculateTotalPrice = () => {
        if (!cartItems || cartItems.length === 0) {
            return 0;
        }

        const totalPrice = cartItems.reduce((total, product) => total + product.price, 0);
        return totalPrice.toFixed(2);
    };

    const handleCheckout = async () => {
        const ordersRef = collection(db, 'orders');
        try {
            const orders = cartItems.map(product => ({
                productId: product.id,
                quantity: product.quantity
            }));

            await addDoc(ordersRef, { products: orders });
            console.log('Checkout successful');

        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };


    return (
        <div className="totalSum-wrapper">
            <div className='totalSum-inner-wrapper'>
                <h2>Totalsumma</h2>
                <div className="ts-row">
                    <p>Deltotal</p>
                    <p className='bold'>{calculateTotalPrice()} kr</p>
                </div>
                <div className="ts-row">
                    <p>Frakt</p>
                    <p className='bold'>0,00 kr</p>
                </div>
                <div className="totalsum-calc">
                    <div className="ts-row">
                        <p>Totalsumma (incl. moms)</p>
                        <p className='bold'>{calculateTotalPrice()} kr</p>
                    </div>
                    <button onClick={handleCheckout}>Gå till kassan</button>
                </div>
            </div>
        </div>
    );

}

export default TotalSum