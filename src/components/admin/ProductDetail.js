import React from 'react';
import noimage from '../../assets/images/Rectangle3.png';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function ProductDetail(props) {
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <div className='container-fluid mainview-container'>
          <div className='row'>
            <div className='col'>
              <h2>Menu</h2>
              <div style={{ color: '#828282' }}>Home/Menu/Product Detail</div>
            </div>
          </div>
          <div className='row py-3'>
            <div className='col-md-6'>
              <div className='card shadow'>
                <div
                  style={{ fontSize: '20px' }}
                  className='card-header fw-bold py-3'
                >
                  Production Details
                </div>
                <div className='card-body w-100'>
                  <img
                    src={noimage}
                    className='card-img'
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card shadow'>
                <div
                  style={{ fontSize: '20px' }}
                  className='card-header fw-bold py-3'
                >
                  Product Info
                </div>
                <ul className='list-group list-group-flush fw-bold'>
                  <li className='list-group-item d-flex justify-content-between'>
                    <span>Prices</span>
                    <span>$20</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between'>
                    <span>Product Category</span>
                    <span>Desert</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    <span>Availability</span>
                    <span
                      style={{ background: '#c4c4c4' }}
                      className='p-2 rounded-pill'
                    >
                      Available
                    </span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between'>
                    <span>Lorem Ipsum</span>
                    <span>Free</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between'>
                    <span>SKU Identification</span>
                    <span>22345</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between py-4'>
                    <button className='btn btn-outline-dark w-25'>Edit</button>
                    <button className='btn btn-outline-dark w-25'>
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
