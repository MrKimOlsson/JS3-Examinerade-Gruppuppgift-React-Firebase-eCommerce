import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci'
import './userProfile.scss'
import Formforlogin from '../form/formforlogin/Formforlogin'

function UserProfile() {


    const user = localStorage.getItem('user')
    const userInfo = JSON.parse(user)

  return (
    <div className='up-container'>
        <div className="up-inner-container">
            <div className='up-icon-container'><BiUserCircle className='up-user-icon'/></div>
            <div className="up-user-info">
                <div className="up-user-detail">
                    <p>{userInfo && userInfo.firstName}</p>
                    <div><CiEdit className="up-edit"/></div>
                </div>
                <div className="up-user-detail">
                    <p>{userInfo && userInfo.streetName}</p>
                    <div><CiEdit className="up-edit"/></div>
                </div>
                <div className="up-user-detail">
                    <p>{userInfo && userInfo.postalCode}</p>
                    <div><CiEdit className="up-edit"/></div>
                </div>
                <div className="up-user-detail">
                    <p>{userInfo && userInfo.city}</p>
                    <div><CiEdit className="up-edit"/></div>
                </div>
                <div className="up-user-detail">
                    <p>{userInfo && userInfo.email}</p>
                    <div><CiEdit className="up-edit"/></div>
                </div>
                <div className="up-user-detail">
                    <p>p********</p>
                    <li><NavLink className='up-changeP'>Change password?</NavLink></li>
                </div>
                <button className="up-save">Save</button>
            </div>
                <div className="up-options">
                    <div className="up-errand-cont">
                        <NavLink className='up-options-link'>My Errands</NavLink>
                    </div>
                    <div className="up-options-bottom">
                        <NavLink className='up-options-link'>Show Order History</NavLink>
                        <NavLink className='up-options-link'>Delete Account</NavLink>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default UserProfile