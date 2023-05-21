
import React, { useEffect, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import './userProfile.scss';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function UserProfile() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                if (user) {
                    const userRef = doc(db, 'users', user.uid);
                    const userSnap = await getDoc(userRef);
                    if (userSnap.exists()) {
                        setUserInfo(userSnap.data());
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <div className='up-container'>
            <div className='up-inner-container'>
                <div className='up-icon-container'>
                    <BiUserCircle className='up-user-icon' />
                </div>
                <div className='up-user-info'>
                    {userInfo && (
                        <>
                            <div className='up-user-detail'>
                                <p>{userInfo.firstName}</p>
                                <div>
                                    <CiEdit className='up-edit' />
                                </div>
                            </div>
                            <div className='up-user-detail'>
                                <p>{userInfo.streetName}</p>
                                <div>
                                    <CiEdit className='up-edit' />
                                </div>
                            </div>
                            <div className='up-user-detail'>
                                <p>{userInfo.postalCode}</p>
                                <div>
                                    <CiEdit className='up-edit' />
                                </div>
                            </div>
                            <div className='up-user-detail'>
                                <p>{userInfo.city}</p>
                                <div>
                                    <CiEdit className='up-edit' />
                                </div>
                            </div>
                            <div className='up-user-detail'>
                                <p>{userInfo.email}</p>
                                <div>
                                    <CiEdit className='up-edit' />
                                </div>
                            </div>
                            <div className='up-user-detail'>
                                <p>p********</p>
                                <li>
                                    <NavLink className='up-changeP'>Change password?</NavLink>
                                </li>
                            </div>
                            <button className='up-save'>Save</button>
                        </>
                    )}
                </div>
                <div className='up-options'>
                    <div className='up-errand-cont'>
                        <NavLink className='up-options-link'>My Errands</NavLink>
                    </div>
                    <div className='up-options-bottom'>
                        <NavLink className='up-options-link'>Show Order History</NavLink>
                        <NavLink className='up-options-link'>Delete Account</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;