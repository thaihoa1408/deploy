import React from 'react';
import { FaRegBell, FaBars } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import './admin.css';
function Navbar(props) {
  return (
    <div className='navbar-container px-3 d-flex justify-content-between align-items-center'>
      <FaBars style={{ fontSize: '20px' }} className='me-2' />
      <div className='d-flex align-items-center'>
        <div className='d-flex align-items-center me-5'>
          <div className='badge me-3'>
            <FaRegBell />
            <span></span>
          </div>
          <div className='badge me-3'>
            <BiMessageSquareDetail />
            <span></span>
          </div>
          <div className='badge'>
            <AiOutlineSetting />
            <span></span>
          </div>
        </div>
        <div className='d-flex align-items-center'>
          <div className='me-3 greeting'>
            <div style={{ fontSize: '14px', color: '#9C9C9C' }}>
              Good Morning
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
              Tiger Puff
            </div>
          </div>
          <div className='avatar'></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
