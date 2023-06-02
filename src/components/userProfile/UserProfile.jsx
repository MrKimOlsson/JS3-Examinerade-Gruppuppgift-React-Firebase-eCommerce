import React, { useEffect, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { NavLink, Navigate } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import './userProfile.scss';
import { db } from '../../firebase/config';
import { doc, getDoc, getFirestore, updateDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../app/action'


function UserProfile() {

    const id = localStorage.getItem('uid')
    console.log(id)

    const string = localStorage.getItem('user')
    const loggedUser = JSON.parse(string)
    console.log(loggedUser)

    const db = getFirestore()
    const docRef = doc(db, 'users', id)


    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [userInfo, setUserInfo] = useState([]);
    const [updateUser, setUpdateUser] = useState({
        firstName: loggedUser && loggedUser.firstName || '',
        lastName: loggedUser && loggedUser.lastName || '',
        streetName: loggedUser && loggedUser.streetName || '',
        postalCode: loggedUser && loggedUser.postalCode || '',
        city: loggedUser && loggedUser.city || '',
        email: loggedUser && loggedUser.email || ''
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdateUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSave = () => {
        const updatedUser = {
            ...loggedUser,
            firstName: updateUser.firstName || loggedUser.firstName,
            lastName: updateUser.lastName || loggedUser.lastName,
            streetName: updateUser.streetName || loggedUser.streetName,
            postalCode: updateUser.postalCode || loggedUser.postalCode,
            city: updateUser.city || loggedUser.city,
            email: updateUser.email || loggedUser.email
        };


        updateDoc(docRef, updatedUser)
        .then(docRef => {
            console.log('doc updated')
            localStorage.setItem('user', JSON.stringify(updatedUser))
            setUpdateUser(updatedUser)
        }) .catch ( err => {
            console.log(err.message)
        })
        setEdit(false)
    }



    // console.log(userInfo.streetName)

    return (
        <div className='up-container'>
            <div className='up-inner-container'>
                <div className='up-icon-container'>
                    <BiUserCircle className='up-user-icon' />
                </div>
                <div className="up-user-info">
                    {edit ? (
                        <>
                            <div className="up-user-detail">
                                <input
                                    name="firstName"
                                    placeholder={loggedUser && loggedUser.firstName}
                                    type="text"
                                    className="up-edit-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="up-user-detail">
                                <input
                                    name="lastName"
                                    placeholder={loggedUser && loggedUser.lastName}
                                    type="text"
                                    className="up-edit-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="up-user-detail">
                                <input
                                    name="streetName"
                                    placeholder={loggedUser && loggedUser.streetName}
                                    type="text"
                                    className="up-edit-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="up-user-detail">
                                <input
                                    name="postalCode"
                                    placeholder={loggedUser && loggedUser.postalCode}
                                    type="text"
                                    className="up-edit-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="up-user-detail">
                                <input
                                    name="city"
                                    placeholder={loggedUser && loggedUser.city}
                                    type="text"
                                    className="up-edit-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="up-user-detail">
                                <input
                                    name="email"
                                    placeholder={loggedUser && loggedUser.email}
                                    type="text"
                                    className="up-edit-input"
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="up-user-detail">
                                <p>{loggedUser && loggedUser.firstName + ' ' + loggedUser.lastName}</p>
                            </div>
                            <div className="up-user-detail">
                                <p>{loggedUser && loggedUser.streetName}</p>
                            </div>
                            <div className="up-user-detail">
                                <p>{loggedUser && loggedUser.postalCode}</p>
                            </div>
                            <div className="up-user-detail">
                                <p>{loggedUser && loggedUser.city}</p>
                            </div>
                            <div className="up-user-detail">
                                <p>{loggedUser && loggedUser.email}</p>
                            </div>
                        </>
                    )}
                    {edit ? (
                        <button onClick={handleSave} className="up-save">
                            Save
                        </button>
                    ) : (
                        <button onClick={() => setEdit(true)} className="up-save">
                            Edit
                        </button>
                    )}
                </div>
                <div className='up-options'>
                    <div className='up-errand-cont'>
                        <NavLink className='up-options-link'>My Errands</NavLink>
                    </div>
                    <div className='up-options-bottom'>
                        <NavLink className='up-options-link' to='/userorders'>Show Order History</NavLink>
                        <NavLink className='up-options-link'>Delete Account</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;