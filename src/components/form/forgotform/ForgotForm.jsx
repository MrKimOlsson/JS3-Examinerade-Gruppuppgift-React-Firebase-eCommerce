import React from 'react'
import { Form } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './forgotform.scss'
import FormBtn from './btnforgot/FormBtn'
import ProductImage from '../../../images/369x310.svg'
const ForgotForm = () => {

  return (
<div className='forgotformwrapper'>
    <div className="forgotformcontainer">
        <Form>
    <h4>Please enter your email to reset your password</h4>
    <p>Enter the email address you used when you joined and we'll send you instructions to reset your password</p>
        <div className="inputemail">
            <label className='form-label-link' htmlFor="email">E-mail*</label>
            <input type="email" name="email" id="email" className='forgotinput'/>
        </div>
        <br />
            <FormBtn />
        </Form>
    </div>
    <div>
        <img src={ProductImage} alt="Technical solutions img" />
    </div>
</div>
  );
};

export default ForgotForm