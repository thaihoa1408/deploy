import React from 'react';
import CustomerLayout from '../layout/CustomerLayout';
import NavbarCust from '../NavbarCust';
import MenuBrand from '../MenuBrand';
import { useCustContext } from '../../../CustomerContext';
import { useHistory } from 'react-router';
function Brands(props) {
  const { brands, selectedBrand, handleSelectBrand, tableInfo } = useCustContext();
  const history = useHistory();
  // onclick, it should go back automatically 
  const clickSelectBrand = (item) =>{
    handleSelectBrand(item); 
    // return back 
    history.goBack();
  }
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
      <NavbarCust 
        goBack
        title={(tableInfo.location?.name)}
      />
      {brands.map((item, index) => {
        return (
          <div key={index} onClick={() => clickSelectBrand(item)}>
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
