import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, doc, getDocs } from 'firebase/firestore';

const CustomerOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollectionRef = collection(db, 'orders');
        const querySnapshot = await getDocs(ordersCollectionRef);
        const ordersData = querySnapshot.docs.map((doc) => ({
          orderId: doc.id,
          products: doc.data().products,
          userId: doc.data().userId,
        }));
        setOrders(ordersData);
      } catch (error) {
        console.log('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Customer Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            Order ID: {order.orderId}<br />
            User ID: {order.userId}<br />
            Products: {JSON.stringify(order.products)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerOrder;



