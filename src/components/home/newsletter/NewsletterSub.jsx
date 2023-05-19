import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './newsletterSub.scss'

let subEmail = document.querySelector('#subEmail')

// const SubscribeForm = () => {
//   const [email, setEmail]     = useState('')
// }

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (email) {
//     try {
//       const response = await axios.post('http://localhost:9999/api/subscribe', {
//         email
//       })
//       console.log(response.data)
//     } catch (error) {
//       console.log(error)
//     }
//   } else {
//     return email.value = 'Please enter your email adress'
//   }
// }

const NewsletterSub = () => {
  const [email, setEmail]     = useState('')

  // const actionData = useActionData()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await axios.post('http://localhost:9999/api/subscriber', {
          email
        })
        console.log(response.data)
        email.document = "";
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Please enter your email adress')
    }
  }
 
  return (
    <div className='newsletterSub-wrapper'>
        <div className='subscribeForm'>
            <div>
                <Form onSubmit={handleSubmit}>
                    <input type="text" name='email' id='subscribeEmailInput' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button className='btn-subscribe'>SUBSCIRIBE FOR NEWSLETTER</button>
                </Form>
            </div>
        </div>
    </div>
  )
}

// export const action = (setSubscriber) => async ({ request }) => {
//     const data = await request.formData()
//     const subscriberData = {
//       email: data.get('email')
//     }
//     return newsletterSub(subscriberData, setSubscriber)
// }

export default NewsletterSub