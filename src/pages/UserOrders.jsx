import React from 'react'
import CustomerOrder from '../components/customerorder/CustomerOrder'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const UserOrders = () => {

  const { user } = useSelector(state => state.auth)
    if(!user) return <Navigate to='/login'/>

  // const user = useSelector(state => state.auth.user);
  return (
    <div>
      <CustomerOrder user={user} />
    </div>
  )
}

export default UserOrders