import React from 'react'
import { Link } from 'react-router-dom'
import './gridMenu.scss'


    // Product catergory search function
    const GetSearchValue = (value) => {
        console.log(value)
    }

  

const GridMenu = () => {
  return (
    <div className='grid-menu-component'>
        <h3>Best Collection</h3>
        <ul className='grid-menu'>
            <li><Link to='/products'>All</Link></li>
            /
            <li><Link onClick={() => GetSearchValue('Coat')} to='/products/coats'>Coat</Link></li>
            /
            <li><Link onClick={() => GetSearchValue('Footwear')} to='/products/footwear'>Footwear</Link></li>
            /
            <li><Link onClick={() => GetSearchValue('Hat')} to='/products/hats'>Hat</Link></li>
            /
            <li><Link onClick={() => GetSearchValue('Hoodie')} to='/products/hoodies'>Hoodie</Link></li>
            /
            <li><Link onClick={() => GetSearchValue('Pants')} to='/products/pants'>Pants</Link></li>
            /
            <li><Link onClick={() => GetSearchValue('Sweater')} to='/products/sweaters'>Sweater</Link></li>
            /
            <li><Link onClick={() => GetSearchValue('T-Shirt')} to='/products/t-shirts'>T-Shirt</Link></li>
                
        </ul>

    </div>
  )
}

export default GridMenu