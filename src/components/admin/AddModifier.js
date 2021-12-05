import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { BsSearch } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';

import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import { PaginationFunction } from './PaginationFunction';
import { SortFunction } from './SortFunction';
import { searchFunction } from './SearchFunction';
import MultiSelect from './MultiSelect';
function AddModifier(props) {
  const [data, setData] = useState([
    {
      id: '1',
      modifier_name: 'Toppings',
      options: [
        {
          name: 'Chese',
          price: 1.5,
        },
        {
          name: 'Bacon',
          price: 1.9,
        },
      ],
    },
    {
      id: '2',
      modifier_name: 'Addons',
      options: [
        {
          name: 'Honey',
          price: 2.9,
        },
        {
          name: 'Syrup',
          price: 1.5,
        },
      ],
    },
  ]);
  // pagination
  const { currentItems, pagination } = PaginationFunction(data);
  // sort table
  const { items, requestSort, getClassNamesFor } = SortFunction(currentItems);
  //select id
  const [selectIds, setSelectIds] = useState([]);
  const handleSelect = (id) => {
    let copy = [...selectIds];
    let check = copy.find((item) => {
      return item === id;
    });
    if (check === undefined) {
      copy.push(id);
    } else {
      copy.splice(copy.indexOf(id), 1);
    }
    console.log(copy);
    setSelectIds(copy);
  };
  const handleDelete = () => {
    let copy = [...data];
    selectIds.forEach((id) => {
      copy = copy.filter((item) => {
        return item.id !== id;
      });
    });
    setData(copy);
  };
  //
  const [menuItems, setMenuItems] = useState([
    {
      id: '1',
      value: 'Pizza',
      label: 'Pizza',
    },
    {
      id: '2',
      value: 'Ice Cream',
      label: 'Ice Cream',
    },
    {
      id: '3',
      value: 'Beef Steak',
      label: 'Beef Steak',
    },
  ]);
  const [menuItemsSelect, setMenuItemsSelect] = useState(null);
  const handleSetMenuItemsSelect = (value) => {
    setMenuItemsSelect(value);
  };
  //handle set modifier name
  const [modifier, setModifier] = useState(null);
  const handleSetModifier = (value) => {
    setModifier(value);
  };
  //handle set options
  const [options, setOptions] = useState([{ name: null, price: null }]);
  const handlePlusOptions = () => {
    let copy = [...options];
    copy.push({ name: null, price: null });
    setOptions(copy);
  };
  const handleSetOptions = (target, value, index) => {
    let copy = [...options];
    if (target === 'name') {
      copy[index] = { ...copy[index], name: value };
    } else if (target === 'price') {
      copy[index] = { ...copy[index], price: value };
    }
    setOptions(copy);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setData([
      ...data,
      {
        id: data.length + 1,
        modifier_name: modifier,
        options: options,
      },
    ]);
  };
  const handleCancel = (event) => {
    document.getElementById('form').reset();
    setModifier(null);
    setOptions([null]);
    setMenuItemsSelect(null);
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
              <div style={{ color: '#828282' }}>Home/Menu/Modifier</div>
            </div>
            <div className='col-lg-3 mb-2'>
              <div className='form-control rounded-pill d-flex align-items-center'>
                <input
                  type='text'
                  placeholder='search here'
                  style={{ outline: 'none' }}
                  name=''
                  id='myInput'
                  onKeyUp={() => searchFunction('myInput', 'myTable')}
                  className='w-100 border-0'
                />
                <BsSearch />
              </div>
            </div>
            <div className='col-lg-2 mb-2'>
              <button
                type='button'
                className='form-control rounded-pill btn-secondary'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
              >
                Add Modifier
              </button>
            </div>
            <div className='col-lg-2 mb-2'>
              <button
                className='form-control rounded-pill btn-secondary'
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <table
              style={{
                minHeight: data.length ? '' : '500px',
                minWidth: '500px',
              }}
              className='table table-striped rounded shadow mt-2'
            >
              <thead>
                <tr>
                  <th scope='col' className='border-0'>
                    #
                  </th>
                  <th scope='col' className='border-0'>
                    <button
                      type='button'
                      onClick={() => requestSort('modifier_name')}
                      className='d-flex align-item-center border-0 bg-transparent'
                    >
                      <span className='fw-bold'>Modifier Name</span>
                      <span className='d-flex flex-column align-item-center justify-content-center sort-icon'>
                        <AiFillCaretUp
                          className={
                            getClassNamesFor('modifier_name') === 'descending'
                              ? 'descending'
                              : undefined
                          }
                        />
                        <AiFillCaretDown
                          className={
                            getClassNamesFor('modifier_name') === 'ascending'
                              ? 'ascending'
                              : undefined
                          }
                        />
                      </span>
                    </button>
                  </th>
                  <th scope='col' className='border-0'>
                    Options
                  </th>
                </tr>
              </thead>
              <tbody id='myTable'>
                {items.map((item, index) => {
                  return (
                    <tr>
                      <td className='pt-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          checked={
                            selectIds.find((id) => {
                              return id === item.id;
                            }) !== undefined
                              ? true
                              : false
                          }
                          onChange={() => handleSelect(item.id)}
                        />
                      </td>
                      <td className='pt-3'>{item.modifier_name}</td>
                      <td className='d-flex justify-content-between align-items-center pe-3'>
                        <span>
                          {item.options
                            .map((opt) => {
                              return opt.name;
                            })
                            .toString()}
                        </span>
                        <span>
                          <button
                            type='button'
                            className='btn btn-secondary me-3'
                          >
                            Add to Items
                          </button>
                          <BiPencil />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {pagination}
          <div
            className='modal fade'
            id='staticBackdrop'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            tabIndex='-1'
            aria-labelledby='staticBackdropLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header px-3 py-1'>
                  <h5
                    style={{ fontSize: '16px' }}
                    className='modal-title'
                    id='staticBackdropLabel'
                  >
                    Add Modifier
                  </h5>
                </div>
                <form action='' onSubmit={handleSubmit} id='form'>
                  <div className='modal-body'>
                    <div className='mb-3'>
                      <label className='form-label'>Modifier Name</label>
                      <input
                        className='form-control'
                        placeholder='enter modifier name ...'
                        onChange={(e) => handleSetModifier(e.target.value)}
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Select Item</label>
                      <MultiSelect
                        options={menuItems}
                        multi={true}
                        handleChange={handleSetMenuItemsSelect}
                        value={menuItemsSelect}
                      />
                    </div>
                    <div>
                      <label className='form-label'>Options</label>
                      <div style={{ maxHeight: '200px', overflow: 'auto' }}>
                        {options.map((item, index) => {
                          return (
                            <div className='d-flex align-items-center mb-2'>
                              <input
                                className='form-control w-50 rounded-0 rounded-start'
                                placeholder='option name'
                                onChange={(e) =>
                                  handleSetOptions(
                                    'name',
                                    e.target.value,
                                    index
                                  )
                                }
                                required
                              />
                              <input
                                className='form-control w-25 rounded-0 rounded-end'
                                placeholder='price ($)'
                                onChange={(e) =>
                                  handleSetOptions(
                                    'price',
                                    e.target.value,
                                    index
                                  )
                                }
                                required
                              />
                              <AiOutlinePlusCircle
                                style={{ cursor: 'pointer' }}
                                className='ms-2'
                                onClick={handlePlusOptions}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button type='submit' className='btn btn-primary'>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModifier;
