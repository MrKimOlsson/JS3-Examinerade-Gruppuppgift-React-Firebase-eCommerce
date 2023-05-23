import React, { useState } from 'react';
import './search.scss'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const SearchModal = ({ products }) => {
  const [search, setSearch] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalValue, setModalValue] = useState('');
  const [matchingProducts, setMatchingProducts] = useState([]);

  // check input
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  // hide modal
  const hideModal = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormVisible(false);
    if (search.trim() === '') return
    setModalVisible(true);
    setSearch('');

    // Product catergory search function

    const matches = products.filter(product => product.category.includes(search));
    setMatchingProducts(matches);

    products.forEach(product => {
      if (product.category.includes(search)) {
        let matches = product
      }
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
  // console.log(products)
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
              <FiSearch className='opacity height' /></button>
          </form>
        )}
      </li>
      {modalVisible && (
        <>
          <div className="modal-overlay" onClick={() => setModalVisible(false)}></div>
          <div className="modal">
            <span className="close" onClick={hideModal}>&times;</span>
            <div className="modal-content">
              <p>{modalValue}</p>
              {matchingProducts.map(products => (
                <Link onClick={() => setModalVisible(false)} key={products.id} to={`/productDetails/${products.id}`}>
                  <div key={products.id} className="modalcontainer">
                    <img className='modalimg' src={products.imageURL} alt="" />
                    <div className="product-details">
                      <h3 className='modalproducttitel'>{products.title}</h3>
                      <p>{products.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchModal;
