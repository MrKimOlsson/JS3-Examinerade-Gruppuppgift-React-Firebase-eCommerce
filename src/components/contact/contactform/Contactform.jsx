import React from 'react'
// import { useActionData } from 'react-router-dom'
import { Form } from 'react-router-dom'
import './contactForm.css'
import axios from 'axios';
import { useState } from 'react'
import FormBtn from '../formBtn/FormBtn'

const ContactFormRegister = () => {
  const [nameFL,   setNameFL]   = useState('')
  const [email,    setEmail]    = useState('')
  const [number,   setNumber]   = useState('')
  const [company,  setCompany]  = useState('')
  const [text,     setText]     = useState('')
  const [checkbox, setcheckbox] = useState('')

const handleSubmit = async (event) => {
  event.preventDefault();
  if (nameFL && email && number) {
    
    try { 
      const response = await axios.post('http://localhost:9999/api/contact', {
        nameFL, email, number, company, text, checkbox 
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  } else {
    alert('Please fill in all required fields');
    // obs will change, alertboxes below every field thats required to be filled in
  }
}

  return (
    <div className="form">
      <div className="contactForm">
        <Form className='formParent' onSubmit={handleSubmit}>
        <p className='contactFormHeading'>Write Something</p>
        <div className='contactFormLine'></div>
          <div className="formWrapper">
            <div className="contactFormGroup">
              <label htmlFor="nameFL">Your Name*</label>
              <input type="text" name='nameFL' value={nameFL} onChange={(e) => setNameFL(e.target.value)}/>
            </div>
            <div className="contactFormGroup">
              <label htmlFor="email">Your Email</label>
              <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="contactFormGroup">
              <label htmlFor="number">Phone Number</label>
              <input type="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            </div>
            <div className="contactFormGroup">
              <label htmlFor="company">Company (optional)</label>
              <input type="text" name='company' value={company} onChange={(e) => setCompany(e.target.value)}/>
            </div>
            <div className="contactFormGroup">
              <label htmlFor="extra">Someting write*</label>
              <textarea rows="5" cols="60" type="text" className='contact-textarea' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
           </div>
           <div className='contactFormSubmitGroup'>
            <div className="contactFormRadioButtonGroup">
              <input type="checkbox" name="checkbox" id="contactForm-radioBtn" value={checkbox} onChange={(e) => setcheckbox(e.target.checked)}/>
              <p>Save my name, email and website in this browser for the next time i comment.</p>
            </div>
             <FormBtn className="contactFormBtn"/>
           </div>
        </Form>
      </div>
</div>
)
}

export default ContactFormRegister