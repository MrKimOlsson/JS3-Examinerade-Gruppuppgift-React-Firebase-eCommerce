import React, { useState } from 'react'
import Formforlogin from '../components/form/formforlogin/Formforlogin'

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  

  return (
    <>
      <Formforlogin handleLogin={handleLogin} />
    </>
  )
}

export default Login