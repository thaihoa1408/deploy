import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { MdOutlineFileUpload } from 'react-icons/md';
import noimage from '../../assets/images/Rectangle3.png';
function AddComboMeal(props) {
  const [file, setFile] = useState(null);
  //store list
  const [storeList, setStoreList] = useState([
    {
      id: '1',
      name: 'TigerPuff',
    },
    {
      id: '2',
      name: 'McDonalds',
    },
    {
      id: '3',
      name: 'Jollibee',
    },
    {
      id: '4',
      name: 'KFC',
    },
  ]);
  const [selectStoreIds, setSelectStoreIds] = useState([]);
  const [selectStoreNames, setSelectStoreNames] = useState([]);
  const handleSelectStore = (id, name, selectAll) => {
    if (!selectAll) {
      let copyId = [...selectStoreIds];
      let copyName = [...selectStoreNames];
      let check = copyId.find((item) => {
        return item === id;
      });
      if (check === undefined) {
        copyId.push(id);
        copyName.push(name);
      } else {
        copyId.splice(copyId.indexOf(id), 1);
        copyName.splice(copyName.indexOf(name), 1);
      }
      setSelectStoreIds(copyId);
      setSelectStoreNames(copyName);
    } else {
      if (storeList.length !== selectStoreIds.length) {
        let copy = [...storeList];
        let storeIds = copy.map((item) => {
          return item.id;
        });
        let storeNames = copy.map((item) => {
          return item.name;
        });
        setSelectStoreIds(storeIds);
        setSelectStoreNames(storeNames);
      } else {
        setSelectStoreIds([]);
        setSelectStoreNames([]);
      }
    }
  };
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <div className='container-fluid mainview-container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-5 mb-2'>
              <h2>Menu</h2>
              <div style={{ color: '#828282' }}>Home/ Menu/ Add Combo Meal</div>
            </div>
          </div>
          <div className='row mt-2 px-2'>
            <form className='col-lg-10 col-xl-9 shadow rounded'>
              <div className='border-bottom d-flex align-items-center py-2 px-4 fw-bold'>
                Add Combo Meal Set
              </div>
              <div className='row px-4 py-3'>
                <div className='col-lg-8'>
                  <div className='row mb-2'>
                    <div className='col-lg-12 col-xl-10'>
                      <label className='form-label'>Add Combo Meal Name</label>
                      <input
                        className='form-control'
                        placeholder='Enter combo meal name ...'
                        required
                      />
                    </div>
                  </div>
                  <div className='row mb-2'>
                    <div className='col-lg-12 col-xl-10'>
                      <label className='form-label d-flex justify-content-between'>
                        <span>Select Store</span>
                      </label>
                      <div className='card'>
                        <div className='card-header d-flex justify-content-between'>
                          <span>Store</span>
                          <span>
                            Mark All
                            <input
                              className='form-check-input ms-3'
                              type='checkbox'
                              checked={
                                selectStoreIds.length === storeList.length
                                  ? true
                                  : false
                              }
                              onChange={() =>
                                handleSelectStore(null, null, true)
                              }
                            />
                          </span>
                        </div>
                        <ul
                          style={{ height: '116px', overflow: 'auto' }}
                          className='list-group list-group-flush'
                        >
                          {storeList.map((item) => {
                            return (
                              <li className='list-group-item d-flex justify-content-between'>
                                <span>{item.name}</span>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  checked={
                                    selectStoreIds.find((id) => {
                                      return id === item.id;
                                    }) !== undefined
                                      ? true
                                      : false
                                  }
                                  onChange={() =>
                                    handleSelectStore(item.id, item.name, false)
                                  }
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12 col-xl-10'>
                      <label className='form-label'>Options</label>
                      <div className='row'>
                        <div className='col-md-7 mb-2'>
                          <ul
                            className='list-group'
                            style={{ height: '117px', overflow: 'auto' }}
                          >
                            <li className='list-group-item'>An item</li>
                            <li className='list-group-item'>A second item</li>
                            <li className='list-group-item'>A third item</li>
                          </ul>
                        </div>
                        <div className='col-md-5 mb-2'>
                          <button
                            type='button'
                            className='form-control btn-outline-dark'
                          >
                            Browse From Menu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 d-flex flex-column justify-content-between'>
                  <div className='row mb-2'>
                    <div className='col-12'>
                      <div style={{ height: '160px' }} className='w-100'>
                        <img
                          className='w-100 h-100'
                          style={{ objectFit: 'cover' }}
                          src={file ? URL.createObjectURL(file) : noimage}
                          alt=''
                        />
                      </div>
                      <div>Product Image</div>
                    </div>
                  </div>
                  <div className='row mb-2'>
                    <div className='col-12' style={{ height: '50px' }}>
                      <label
                        style={{
                          border: '1px dashed #797979',
                          color: '#FE7B50',
                        }}
                        className='w-100 h-100 rounded d-flex align-items-center justify-content-between px-2'
                      >
                        <span>Upload Image</span>
                        <MdOutlineFileUpload />
                        <input
                          style={{ display: 'none' }}
                          type='file'
                          id='file'
                          accept='.png,.jpeg,.jpg'
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>
                  <div className='row mb-2'>
                    <div className='col-12 d-flex align-items-center justify-content-between'>
                      <div>
                        <div className='text-gray fw-bold'>
                          Status Available
                        </div>
                        <div className='text-orange'>
                          <a
                            href='/admin/menu/combo-meal/set-time-slot'
                            className='text-orange'
                          >
                            Set Time Slot
                          </a>
                        </div>
                      </div>
                      <div className='form-check form-switch'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          role='switch'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mb-2'>
                    <div className='col-12 d-flex align-items-center justify-content-between'>
                      <div className='text-gray fw-bold'>Loyalty Rewards</div>
                      <div className='form-check form-switch'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          role='switch'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mb-2'>
                    <div className='col-6'>
                      <button
                        type='button'
                        className='form-control btn-outline-dark'
                      >
                        Cancel
                      </button>
                    </div>
                    <div className='col-6'>
                      <button
                        type='button'
                        className='form-control btn-outline-dark'
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddComboMeal;
