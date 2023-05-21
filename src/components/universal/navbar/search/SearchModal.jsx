import React, { useState } from 'react';
import './search.scss'
import {FiSearch} from 'react-icons/fi'

const SearchModal = () => {
  const [search, setSearch] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    
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
