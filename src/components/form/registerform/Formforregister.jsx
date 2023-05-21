import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../../firebase/config';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import Btnregister from './btnregister/Btnregister';
import './Formforregister.scss';
import { useNavigate } from 'react-router-dom';

const Formforregister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const navigate = useNavigate();

  const handleProfilePicChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !streetName || !postalCode || !city || !email || !password || !passwordConfirm) {
      console.log('Please fill in all required fields with *');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const collectionRef = collection(db, 'users');

      const userData = {
        firstName,
        lastName,
        streetName,
        postalCode,
        city,
        email,
        profilePic,
      };
      const docRef = doc(collectionRef, user.uid);
      await setDoc(docRef, userData);

      console.log('New user ID:', docRef.id);
      console.log('Registered user:', user);

      // Reset form fields after successful submission
      setFirstName('');
      setLastName('');
      setStreetName('');
      setPostalCode('');
      setCity('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setProfilePic('');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='form-register-wrapper'>
      <div className='form-register-container'>
        <Form onSubmit={handleSubmit}>
          <h4>Please Register Your new Account</h4>
          <div className="top-section-register">
            <div className="register-section-name padding-between">
              <label htmlFor="firstName">First Name*</label>
              <input className='half-register-input' type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="register-section-name padding-between">
              <label htmlFor="lastName">Last Name*</label>
              <input className='half-register-input' type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="streetName">Streetname*</label>
            <input className="whole-register-input" type="text" id="streetName" value={streetName} onChange={(e) => setStreetName(e.target.value)} />
          </div>
          <div className="top-section-register">
            <div className="register-section-name padding-between">
              <label htmlFor="postalCode">Postal Code*</label>
              <input className='half-register-input' type="number" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
            </div>
            <div className="register-section-name padding-between">
              <label htmlFor="city">City*</label>
              <input className='half-register-input' type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          <div className="top-section-register">
            <div className="register-section-name padding-between">
              <label htmlFor="mobile">Mobile  (optional)</label>
              <input className='half-register-input' type="number" id="mobile" />
            </div>
            <div className="register-section-name padding-between">
              <label htmlFor="company">Company  (optional)</label>
              <input className='half-register-input' type="text" id="company" />
            </div>
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="email">E-mail*</label>
            <input className="whole-register-input" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="password">Password*</label>
            <input className="whole-register-input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="passwordConfirm">Confirm Password*</label>
            <input className="whole-register-input" type="password" id="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="streetname">Upload Profil (optional)</label>
            <input type="file"
              id="profilePic" name="profilePic"
              accept="image/png, image/jpeg" value={profilePic} onChange={handleProfilePicChange} />
          </div>
          <div className='section-terms'>
            <input type="checkbox" name="" id="" />
            <p>I have read and accepts the terms and agreements</p>
          </div>
          <Btnregister />
        </Form>
      </div>
    </div>
  )
};

export default Formforregister;
