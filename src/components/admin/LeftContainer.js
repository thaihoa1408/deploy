import React from 'react';
import Logo from '../../assets/images/TigerPuffLogo.png';
import SquareImage from '../../assets/images/Rectangle3.png';

const LeftContainer = (props) => {
  return (
    <div className='col-md-4'>
      <div class='text-center left-admin-container'>
        <img src={Logo} className='tigerPufflogo' />
        <h2 class='fw-bold'>Welcome Back!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus.
        </p>
      </div>
      <div className='bottom-image-container d-flex justify-content-center'>
        <img src={SquareImage} width='300px' height='200px' />
      </div>
    </div>
  );
};

export default LeftContainer;
