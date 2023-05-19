import React from 'react'
import { Link } from 'react-router-dom'
import './gridMenu.scss'

const GridMenu = () => {
  return (
    <div className='grid-menu-component'>
        <h3>Best Collection</h3>
        <ul className='grid-menu'>
            <li><Link to='/productDetails'>All</Link></li>
            /
            <li><Link to='/productDetails'>Coat</Link></li>
            /
            <li><Link to='/productDetails'>Footwear</Link></li>
            /
            <li><Link to='/productDetails'>Hat</Link></li>
            /
            <li><Link to='/productDetails'>Hoodie</Link></li>
            /
            <li><Link to='/productDetails'>Pants</Link></li>
            /
            <li><Link to='/productDetails'>Sweater</Link></li>
            /
            <li><Link to='/productDetails'>T-Shirt</Link></li>
                
        </ul>

    </div>
  )
}

export default GridMenu