import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { AiOutlineRight } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { MdOutlineFileUpload } from 'react-icons/md';
import noimage from '../../assets/images/Rectangle3.png';
function AddItem(props) {
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
            <div className='col-12'>
              <h2>Menu</h2>
              <div style={{ color: '#828282' }}>Home/Menu/Add Item</div>
            </div>
          </div>
          <form className='shadow rounded mt-2'>
            <div className='border-bottom d-flex align-items-center py-2 px-4 fw-bold'>
              Add Item
            </div>
            <div className='row px-4 py-3'>
              <div className='col-lg-9'>
                <div className='row mb-2'>
                  <div className='col-6'>
                    <label className='form-label'>Select Category</label>
                    <select className='form-select' id='inputGroupSelect02'>
                      <option selected>Choose...</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                  <div className='col-6'>
                    <label className='form-label'>Sub-Category</label>
                    <select className='form-select' id='inputGroupSelect02'>
                      <option selected>Choose...</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                </div>
                <div className='row mb-2'>
                  <div className='col-8'>
                    <label className='form-label'>Item Name</label>
                    <input
                      className='form-control'
                      placeholder='Enter item name ...'
                      required
                    />
                  </div>
                  <div className='col-4'>
                    <label className='form-label'>Quantity</label>
                    <input
                      type='number'
                      className='form-control'
                      placeholder='Enter quantity ...'
                      required
                    />
                  </div>
                </div>
                <div className='row mb-2'>
                  <div className='col-6'>
                    <label className='form-label'>Description</label>
                    <textarea
                      type='textarea'
                      className='form-control'
                      style={{ height: '123px' }}
                    />
                  </div>
                  <div className='col-6'>
                    <label className='form-label d-flex justify-content-between'>
                      <span>Select Store</span>
                      <a
                        style={{ textDecoration: 'none' }}
                        href='#'
                        className='text-orange'
                      >
                        Add Store
                      </a>
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
                            onChange={() => handleSelectStore(null, null, true)}
                          />
                        </span>
                      </div>
                      <ul
                        style={{ height: '82px', overflow: 'auto' }}
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
                <div className='row mb-2'>
                  <div className='col-6'>
                    <label className='form-label d-flex justify-content-between'>
                      <span>Select Variants</span>
                      <a
                        style={{ textDecoration: 'none' }}
                        href='/admin/menu/add-variants'
                        className='text-orange'
                      >
                        Add Variants
                      </a>
                    </label>
                    <div className='card'>
                      <div className='card-header position-relative'>
                        <span>Variants</span>
                      </div>
                      <ul
                        style={{ height: '123px', overflow: 'auto' }}
                        className='list-group list-group-flush'
                      >
                        <li>
                          <div
                            className='list-group-item border-end-0 border-start-0 d-flex justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#variant_1'
                            aria-expanded='false'
                            aria-controls='variant_1'
                          >
                            Pizza
                            <span className='collapse show' id='variant_1'>
                              <AiOutlineRight />
                            </span>
                            <span className='collapse' id='variant_1'>
                              <BsChevronDown />
                            </span>
                          </div>
                          <div className='collapse' id='variant_1'>
                            <li className='list-group-item border-end-0 border-start-0 ps-5'>
                              12* 16* 17
                            </li>
                            <li className='list-group-item border-end-0 border-start-0 ps-5'>
                              10* 16* 20
                            </li>
                          </div>
                        </li>
                        <li>
                          <div
                            className='list-group-item border-end-0 border-start-0 d-flex justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#variant_2'
                            aria-expanded='false'
                            aria-controls='variant_2'
                          >
                            Pizza
                            <span className='collapse show' id='variant_2'>
                              <AiOutlineRight />
                            </span>
                            <span className='collapse' id='variant_2'>
                              <BsChevronDown />
                            </span>
                          </div>
                          <div className='collapse' id='variant_2'>
                            <li className='list-group-item border-end-0 border-start-0 ps-5'>
                              12* 16* 17
                            </li>
                            <li className='list-group-item border-end-0 border-start-0 ps-5'>
                              10* 16* 20
                            </li>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-6'>
                    <label className='form-label d-flex justify-content-between'>
                      <span>Select Modifier</span>
                      <a
                        href='/admin/menu/add-modifier'
                        style={{ textDecoration: 'none' }}
                        className='text-orange'
                      >
                        Add Modifier
                      </a>
                    </label>
                    <div className='card'>
                      <div className='card-header position-relative'>
                        <span>Modifier Name</span>
                      </div>
                      <ul
                        style={{ height: '123px', overflow: 'auto' }}
                        className='list-group list-group-flush'
                      >
                        <li className='list-group-item d-flex justify-content-between'>
                          <span>Cheese</span>
                          <span>$1.00</span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between'>
                          <span>Bacon</span>
                          <span>$3.00</span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between'>
                          <span>Mozzarela</span>
                          <span>$5.00</span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between'>
                          <span>Lorem</span>
                          <span>$7.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 d-flex flex-column justify-content-between'>
                <div className='col-12 w-100 mb-2'>
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
                <div style={{ height: '50px' }} className='col-12 mb-3'>
                  <label
                    style={{ border: '1px dashed #797979', color: '#FE7B50' }}
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
                <div className='col-12 d-flex mb-3 align-items-center justify-content-between'>
                  <div>
                    <div className='text-gray fw-bold'>Status Available</div>
                    <div className='text-orange'>
                      Select Store/
                      <a
                        href='/admin/menu/add-item/set-time-slot'
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
                <div className='col-12 d-flex justify-content-between mb-2'>
                  <button
                    type='button'
                    style={{ width: '45%' }}
                    className='btn btn-outline-dark'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    style={{ width: '45%' }}
                    className='btn btn-outline-dark'
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
