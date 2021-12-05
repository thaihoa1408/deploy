import React from 'react';
import CustomerLayout from '../layout/CustomerLayout';
import NavbarCust from '../NavbarCust';
import brand1Img from '../../../assets/images/brand1.png';
import bgbrand1Img from '../../../assets/images/bgbrand1.png';
import brand2Img from '../../../assets/images/brand2.png';
import bgbrand2Img from '../../../assets/images/bgbrand2.png';
import brand3Img from '../../../assets/images/brand3.png';
import bgbrand3Img from '../../../assets/images/bgbrand3.png';
import brand4Img from '../../../assets/images/brand4.png';
import bgbrand4Img from '../../../assets/images/bgbrand4.png';
import brand5Img from '../../../assets/images/brand5.png';
import bgbrand5Img from '../../../assets/images/bgbrand5.png';
import MenuBrand from '../MenuBrand';
import { useCustContext } from '../../../CustomerContext';
function Brands(props) {
  const { brands, selectedBrand, handleSelectBrand } = useCustContext();
  return (
    <div className='position-relative'>
      <div
        className='bg-primary-4'
        style={{
          height: '100vh',
          width: '100%',
          position: 'absolute',
          zIndex: '-1',
        }}
      ></div>
      <NavbarCust goBack />
      {brands.map((item, index) => {
        return (
          <div key={index} onClick={() => handleSelectBrand(item)}>
            <MenuBrand
              logo={item.logo?.public_url}
              background={item.cover_photo?.public_url}
              text={item.name}
              selected={item.id === selectedBrand.id ? true : false}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Brands;
