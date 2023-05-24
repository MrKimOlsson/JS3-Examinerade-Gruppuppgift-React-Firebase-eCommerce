import React from 'react'
import CustomerOrder from '../components/customerorder/CustomerOrder'
import { useSelector } from 'react-redux';


const UserOrders = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <div>
      <CustomerOrder user={user} />
    </div>
  )
}

export default UserOrders