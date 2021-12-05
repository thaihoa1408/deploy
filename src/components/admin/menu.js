import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { PaginationFunction } from './PaginationFunction';
import './admin.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { SortFunction } from './SortFunction';
function Menu(props) {
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Ice Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 10,
      price: 14.89,
      stock: true,
    },
    {
      id: '2',
      name: 'Ace Cream',
      category: 'Drinks',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 9,
      price: 15.89,
      stock: false,
    },
    {
      id: '3',
      name: 'Oce Cream',
      category: 'Food',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 9,
      price: 10.89,
      stock: false,
    },
    {
      id: '4',
      name: 'Mke Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
    {
      id: '5',
      name: 'Mke Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
    {
      id: '6',
      name: 'Amx Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
    {
      id: '7',
      name: 'Pds Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
    {
      id: '8',
      name: 'Nmx Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
    {
      id: '9',
      name: 'Oiw Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
    {
      id: '10',
      name: 'Lia Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
    {
      id: '11',
      name: 'Css Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
    {
      id: '12',
      name: 'Html Cream',
      category: 'Desert',
      description: 'Lorem Ipsum Dolor',
      time_available: '07:00 - 09:00',
      qty: 12,
      price: 20.89,
      stock: true,
    },
  ]);
  // pagination
  const { currentItems, pagination } = PaginationFunction(data);
  // sort table
  const { items, requestSort, getClassNamesFor } = SortFunction(currentItems);
  //hande change the state of stock
  const handleChangeStock = (id) => {
    let copy = [...data];
    let newData = copy.map((item) => {
      if (item.id === id) {
        return { ...item, stock: !item.stock };
      } else {
        return item;
      }
    });
    setData(newData);
  };
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
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <div className='container-fluid mainview-container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-5 mb-2'>
              <h2>Menu</h2>
              <div style={{ color: '#828282' }}>Home/menu</div>
            </div>
            <div className='col-lg-3 mb-2'>
              <div className='form-control rounded-pill d-flex align-items-center'>
                <input
                  type='text'
                  placeholder='search here'
                  style={{ outline: 'none' }}
                  name=''
                  id=''
                  className='w-100 border-0'
                />
                <BsSearch />
              </div>
            </div>
            <div className='col-lg-2 mb-2'>
              <button className='form-control rounded-pill btn-secondary'>
                Add Item
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
          <div className='row py-3'>
            <div className='col-12'>
              <button
                style={{ width: '150px' }}
                className='btn btn-outline-dark m-1'
              >
                Store
              </button>
              <button
                style={{ width: '150px' }}
                className='btn btn-outline-dark m-1'
              >
                Category
              </button>
              <button
                style={{ width: '150px' }}
                className='btn btn-outline-dark m-1'
              >
                Sub-Category
              </button>
              <button
                style={{ width: '150px' }}
                className='btn btn-outline-dark m-1'
              >
                Item
              </button>
              <button
                style={{ width: '150px' }}
                className='btn btn-outline-dark m-1'
              >
                Variable
              </button>
              <button
                style={{ width: '150px' }}
                className='btn btn-outline-dark m-1'
              >
                Modifier
              </button>
            </div>
          </div>
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <table
              style={{
                minHeight: data.length ? '' : '500px',
                minWidth: '700px',
              }}
              class='table table-striped shadow mt-2'
            >
              <thead>
                <tr>
                  <th scope='col' className='border-0'>
                    #
                  </th>
                  <th scope='col' className='border-0'>
                    <button
                      type='button'
                      onClick={() => requestSort('name')}
                      className='d-flex align-item-center border-0 bg-transparent'
                    >
                      <span className='fw-bold'>Name</span>
                      <span className='d-flex flex-column align-item-center justify-content-center sort-icon'>
                        <AiFillCaretUp
                          className={
                            getClassNamesFor('name') === 'descending'
                              ? 'descending'
                              : undefined
                          }
                        />
                        <AiFillCaretDown
                          className={
                            getClassNamesFor('name') === 'ascending'
                              ? 'ascending'
                              : undefined
                          }
                        />
                      </span>
                    </button>
                  </th>
                  <th scope='col' className='border-0'>
                    <button
                      type='button'
                      onClick={() => requestSort('category')}
                      className='d-flex align-item-center border-0 bg-transparent'
                    >
                      <span className='fw-bold'>Category</span>
                      <span className='d-flex flex-column align-item-center justify-content-center sort-icon'>
                        <AiFillCaretUp
                          className={
                            getClassNamesFor('category') === 'descending'
                              ? 'descending'
                              : undefined
                          }
                        />
                        <AiFillCaretDown
                          className={
                            getClassNamesFor('category') === 'ascending'
                              ? 'ascending'
                              : undefined
                          }
                        />
                      </span>
                    </button>
                  </th>
                  <th scope='col' className='border-0'>
                    Description
                  </th>
                  <th scope='col' className='border-0'>
                    Time Available
                  </th>
                  <th scope='col' className='border-0'>
                    <button
                      type='button'
                      onClick={() => requestSort('qty')}
                      className='d-flex align-item-center border-0 bg-transparent'
                    >
                      <span className='fw-bold'>Qty</span>
                      <span className='d-flex flex-column align-item-center justify-content-center sort-icon'>
                        <AiFillCaretUp
                          className={
                            getClassNamesFor('qty') === 'descending'
                              ? 'descending'
                              : undefined
                          }
                        />
                        <AiFillCaretDown
                          className={
                            getClassNamesFor('qty') === 'ascending'
                              ? 'ascending'
                              : undefined
                          }
                        />
                      </span>
                    </button>
                  </th>
                  <th scope='col' className='border-0'>
                    <button
                      type='button'
                      onClick={() => requestSort('price')}
                      className='d-flex align-item-center border-0 bg-transparent'
                    >
                      <span className='fw-bold'>price</span>
                      <span className='d-flex flex-column align-item-center justify-content-center sort-icon'>
                        <AiFillCaretUp
                          className={
                            getClassNamesFor('price') === 'descending'
                              ? 'descending'
                              : undefined
                          }
                        />
                        <AiFillCaretDown
                          className={
                            getClassNamesFor('price') === 'ascending'
                              ? 'ascending'
                              : undefined
                          }
                        />
                      </span>
                    </button>
                  </th>
                  <th scope='col' className='border-0'>
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr>
                      <th scope='row'>
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
                      </th>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.description}</td>
                      <td>{item.time_available}</td>
                      <td>{item.qty}</td>
                      <td>${item.price}</td>
                      <td>
                        <div className='form-check form-switch position-relative'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            role='switch'
                            checked={item.stock}
                            onChange={() => handleChangeStock(item.id)}
                          />
                          <label className='form-check-label fw-normal'>
                            {item.stock ? 'Available' : 'Not Available'}
                          </label>
                          <IoEllipsisHorizontalSharp
                            style={{ right: '15px' }}
                            className='position-absolute'
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {pagination}
        </div>
      </div>
    </div>
  );
}

export default Menu;
