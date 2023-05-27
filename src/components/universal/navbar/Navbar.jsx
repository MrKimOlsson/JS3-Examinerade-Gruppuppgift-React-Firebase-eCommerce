import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../../images/logo/logo.svg'
import './navbar.scss'
// import {FiSearch} from 'react-icons/fi'
import { FaShoppingCart } from 'react-icons/fa'
import SearchModal from './search/SearchModal'
import { clearUser } from '../../../app/action'
import { useDispatch, useSelector } from 'react-redux'
import { BiUserPin } from 'react-icons/bi'


const Navbar = ({ products, isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);


  const handleLogout = () => {
    setIsLoggedIn(false); // set isLoggedIn to false on logout
    localStorage.clear()
    navigate('/login');
    dispatch(clearUser())
  };

  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <Link to='/' ><img src={Logo} alt="" /></Link>
        </div>
        <ul>
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-link' to='/products'>Products</NavLink></li>
          <li><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
          <li><NavLink className='nav-link' to='/addProduct'>Add-Products</NavLink></li>
          {/* <li><FiSearch className='opacity height' /></li> */}
          <SearchModal key={products._id} products={products} />
          {isLoggedIn ? ( // show the logout button if the user is logged in
            <>
              <li><NavLink className='nav-link lowercase opacity' to='/userprofile'><BiUserPin className='user-icon' /></NavLink></li>
              <li><NavLink className='nav-link lowercase opacity' to='/login' onClick={handleLogout}>Logout</NavLink></li>
            </>
          ) : ( // show the login button if the user is logged out
            <>
              <li><NavLink className='nav-link lowercase opacity' to='/login'>Login</NavLink></li>
            </>
          )}
          <div className='cartss'>
            <li><NavLink className='nav-link ' to='/cart'><FaShoppingCart className='cart' /></NavLink></li>
            <p>{totalQuantity}</p>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;


