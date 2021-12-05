import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { PaginationFunction } from './PaginationFunction';
import { SortFunction } from './SortFunction';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
function CreateCategory(props) {
  const [data, setData] = useState([
    {
      id: '1',
      category: 'Pizza',
      sub_category: ['Thin Crust Pizza', 'Thick Crust Pizza'],
      store: ['TigerPuff, McDonalds'],
    },
    {
      id: '2',
      category: 'Beverage',
      sub_category: ['Hot Drinks', 'Cold Drinks'],
      store: ['CocaCola', 'Pessi'],
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
  //handle set category name
  const [category, setCategory] = useState(null);
  const handleSetCategory = (value) => {
    setCategory(value);
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
  //handle set sub category
  const [subCategory, setSubCategory] = useState([null]);
  const handlePlusSubCategory = () => {
    let copy = [...subCategory];
    copy.push(null);
    setSubCategory(copy);
  };
  const handleSetSubCategory = (value, index) => {
    let copy = [...subCategory];
    copy[index] = value;
    setSubCategory(copy);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setData([
      ...data,
      {
        id: data.length + 1,
        category: category,
        sub_category: subCategory,
        store: selectStoreNames,
      },
    ]);
  };
  const handleCancel = (event) => {
    document.getElementById('form').reset();
    setCategory(null);
    setSubCategory([null]);
    setSelectStoreIds([]);
    setSelectStoreNames([]);
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
              <div style={{ color: '#828282' }}>Home/Menu/Category List</div>
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
              <button
                type='button'
                className='form-control rounded-pill btn-secondary'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
              >
                Add Category
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
                    Sub Category
                  </th>
                  <th scope='col' className='border-0'>
                    Store
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr>
                      <td>
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
                      <td>{item.category}</td>
                      <td>{item.sub_category.toString()}</td>
                      <td className='position-relative'>
                        <span>{item.store.toString()}</span>
                        <BiPencil
                          style={{ right: '15px', cursor: 'pointer' }}
                          className='position-absolute'
                        />
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
                    Add Category
                  </h5>
                </div>
                <form action='' onSubmit={handleSubmit} id='form'>
                  <div className='modal-body'>
                    <div className='mb-3'>
                      <label className='form-label'>Category Name</label>
                      <input
                        className='form-control'
                        placeholder='enter category name ...'
                        onChange={(e) => handleSetCategory(e.target.value)}
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>
                        Select Store Location
                      </label>
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
                    <div>
                      <label className='form-label'>Add Sub-Category</label>
                      {subCategory.map((item, index) => {
                        return (
                          <div className='d-flex align-items-center mb-2'>
                            <input
                              className='form-control w-75'
                              placeholder='enter sub-category name ...'
                              onChange={(e) =>
                                handleSetSubCategory(e.target.value, index)
                              }
                              required
                            />
                            <AiOutlinePlusCircle
                              style={{ cursor: 'pointer' }}
                              className='mx-2'
                              onClick={handlePlusSubCategory}
                            />
                          </div>
                        );
                      })}
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

export default CreateCategory;
