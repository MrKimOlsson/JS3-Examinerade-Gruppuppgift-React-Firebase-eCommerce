import React from 'react';
import './Formbtn.scss';

const Formbtn = ({ onSubmit }) => {
  return (
    <div>
      <button className='btn-submit-login' type="submit" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Formbtn;
