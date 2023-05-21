import React, { useState } from 'react';
import './search.scss'
import {FiSearch} from 'react-icons/fi'

const SearchModal = ({ products }) => {
  const [search, setSearch] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
 
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    console.log(products)

    
    // Product catergory search function
    products.forEach(product => {
      if(product.category.includes(search)){
        console.log('You got a match')
        let matches = product
        console.log(matches)
      }
      console.log('No match')
    });

   
    // reset form
    setSearch('');
    setIsFormVisible(false);
  };
    // hidden btn / form 
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsButtonClicked(!isButtonClicked);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(false); 
  };


  

  

  return (
    <div>
        <li>
        <button onClick={toggleFormVisibility} className={`searchbtnform ${isButtonClicked ? 'clicked' : ''}`} >
          <FiSearch className='opacity height' />
        </button>
        {isFormVisible && (
          <form className='searchform' onSubmit={handleFormSubmit}>
            <input
                className='searchinput'
                type="text"
                placeholder="Sök..."
                value={search}
                onChange={handleSearchChange}
            />
            <button type="submit" className='searchbtn' onClick={handleButtonClick} >
            <FiSearch className='opacity height'/></button>
          </form>
          )}
        </li>
    </div>
  );
};

export default SearchModal;
