import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import './CustomerOrder.scss';

const CustomerOrder = ({ user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!user) {
          console.log('User not logged in.');
          return;
        }

        const orderRef = collection(db, 'orders');
        const querySnapshot = await getDocs(
          query(orderRef, where('userId', '==', user.id))
        );

        const ordersData = querySnapshot.docs.map((doc) => ({
          orderId: doc.id,
          products: doc.data().products,
          userId: doc.data().userId,
          totalPrice: doc.data().totalPrice,
          status: doc.data().status,
        }));

        setOrders(ordersData);
      } catch (error) {
        console.log('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className='container-order'>
      <h1>Customer Orders</h1>
      {orders.map((order) => (
        <div key={order.orderId} className="order-box">
          <div className="order-details">
            <h2>Order number: {order.orderId}</h2>
            {order.products.map((product, index) => (
              <div key={`${product.productId}-${index}`} className="product">
                <div className="image-container">
                  <div className="image-wrapper">
                    <img src={product.image} alt="Product" />
                  </div>
                </div>
                <div className="product-details">
                  <p>Title: {product.title}</p>
                  <p>Price: {product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
              </div>
            ))}
            <p>Total Price: {order.totalPrice}</p>
            <p>Status: {order.status}</p> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerOrder;





