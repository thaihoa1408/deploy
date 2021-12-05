import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MultiSelect from './MultiSelect';
function SetTimeSlot(props) {
  //item list
  const [menuItems, setMenuItems] = useState([
    {
      id: '1',
      value: 'Pizza',
      label: 'Pizza',
    },
    {
      id: '2',
      value: 'CocaCola',
      label: 'CocaCola',
    },
  ]);
  const [menuItemSelect, setMenuItemSelect] = useState(null);
  const handleSetMenuItemSelect = (value) => {
    setMenuItemSelect(value);
  };
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
  //
  const day = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='content'>
        <Navbar />

        <div className='container-fluid mainview-container'>
          <div className='row d-flex align-items-center'>
            <div className='col-12'>
              <h2>Menu</h2>
              <div style={{ color: '#828282' }}>
                Home/Menu/Add Item/Time Slot
              </div>
            </div>
          </div>
          <div className='row mt-2 px-2'>
            <form className='col-md-12 col-lg-10 col-xl-8 shadow rounded'>
              <div className='border-bottom d-flex align-items-center py-2 px-2 fw-bold'>
                Set Time Slot
              </div>
              <div className='container-fluid p-1'>
                <div className='row mt-2'>
                  <div className='col-md-6 mb-2'>
                    <label className='form-label'>Select Item</label>
                    <MultiSelect
                      options={menuItems}
                      multi={true}
                      handleChange={handleSetMenuItemSelect}
                      value={menuItemSelect}
                    />
                  </div>
                  <div className='col-md-6 mb-2'>
                    <label className='form-label'>Select Store</label>
                    <div>
                      {storeList.map((item) => {
                        return (
                          <div className='form-check form-check-inline'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
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
                            <label className='form-check-label'>
                              {item.name}
                            </label>
                          </div>
                        );
                      })}
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          checked={
                            selectStoreIds.length === storeList.length
                              ? true
                              : false
                          }
                          onChange={() => handleSelectStore(null, null, true)}
                        />
                        <label className='form-check-label'>All</label>
                      </div>
                    </div>
                  </div>
                </div>
                {day.map((item) => {
                  return (
                    <div className='row'>
                      <div className='col-md-2 order-md-1 d-flex align-items-center mb-2'>
                        <span>{item}</span>
                      </div>
                      <div className='col-md-2 order-md-3 d-flex align-items-center mb-2'>
                        <div className='form-check form-switch form-switch-md'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            role='switch'
                          />
                        </div>
                      </div>
                      <div className='col-md-8 order-md-2 d-flex align-items-center justify-content-between mb-2'>
                        <input
                          style={{ width: '45%' }}
                          className='form-control'
                          type='time'
                          step='2'
                        />
                        <span style={{ width: '10%', textAlign: 'center' }}>
                          To
                        </span>
                        <input
                          style={{ width: '45%' }}
                          className='form-control'
                          type='time'
                          step='2'
                        />
                      </div>
                    </div>
                  );
                })}
                <div className='row mt-2'>
                  <div className='col-lg-2 col-md-4 offset-lg-7 px-1 mb-2'>
                    <button
                      type='button'
                      className='form-control btn-outline-dark'
                    >
                      Cancel
                    </button>
                  </div>
                  <div className='col-lg-2 col-md-4 px-1 mb-2'>
                    <button
                      type='button'
                      className='form-control btn-outline-dark'
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
    </div>
  );
}

export default SetTimeSlot;
