import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { BsSearch } from 'react-icons/bs';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import ReactApexChart from 'react-apexcharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { SortFunction } from './SortFunction';
import { PaginationFunction } from './PaginationFunction';
import { searchFunction } from './SearchFunction';
function Orders(props) {
  const series = [
    {
      name: 'Sales',
      data: [1, 5, 7, 4, 9, 10, 3, 6, 9, 8, 12],
    },
  ];
  const options = {
    chart: {
      type: 'area',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [3],
    },
    legend: {
      show: true,
      labels: {
        colors: '#f1f1f1',
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May',
      'June',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#90A4AE',
        },
      },
      axisBorder: {
        show: true,
        color: '#78909C',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: [
      {
        seriesName: 'Sales',
        opposite: false,
        labels: {
          style: {
            colors: '#90A4AE',
          },
        },
      },
    ],
  };
  const percentage = 66;
  //
  const [data, setData] = useState([
    {
      id: '1',
      order_name: 'French Fries',
      table_no: '1',
      customer_name: 'Jhon Leo',
      location: 'New Town',
      order_status: 'Pending',
      delivery_time: '10:05',
      price: 10,
    },
    {
      id: '2',
      order_name: 'Spaghetti',
      table_no: '2',
      customer_name: 'Kristien',
      location: 'Hilltown Street',
      order_status: 'Canceled',
      delivery_time: '10:05',
      price: 10,
    },
    {
      id: '3',
      order_name: 'Sandwich',
      table_no: '3',
      customer_name: 'Jack Suit',
      location: 'Street 21',
      order_status: 'Delivered',
      delivery_time: '10:05',
      price: 21,
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
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <div className='container-fluid mainview-container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-5 mb-2'>
              <h2 className='mb-1'>Order</h2>
              <div style={{ color: '#828282' }}>Home/ Order</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-2'>
              <div class='card h-100 shadow'>
                <h6 class='card-header'>Sales Summary</h6>
                <div class='card-body p-1'>
                  <ReactApexChart
                    options={options}
                    series={series}
                    type='area'
                    height={'90%'}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-sm-6 mb-2'>
                  <div className='rounded shadow d-flex align-items-center ps-3 py-4'>
                    <div style={{ width: 100, height: 100 }} className='me-2'>
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                    <div>
                      <h5>123</h5>
                      <div>Total Menu</div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 mb-2'>
                  <div className='rounded shadow d-flex align-items-center ps-3 py-4'>
                    <div style={{ width: 100, height: 100 }} className='me-2'>
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                    <div>
                      <h5>400</h5>
                      <div>Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6 mb-2'>
                  <div className='rounded shadow d-flex align-items-center ps-3 py-4'>
                    <div style={{ width: 100, height: 100 }} className='me-2'>
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                    <div>
                      <h5>678</h5>
                      <div>Items Sold</div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 mb-2'>
                  <div className='rounded shadow d-flex align-items-center ps-3 py-4'>
                    <div style={{ width: 100, height: 100 }} className='me-2'>
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                    <div>
                      <h5>128</h5>
                      <div>Total Orders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='offset-md-7 col-md-3 mb-2'>
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
            <div className='col-md-2 mb-2'>
              <select className='form-select rounded-pill'>
                <option selected value='1'>
                  Daily
                </option>
                <option value='2'>Monthly</option>
                <option value='3'>Yearly</option>
              </select>
            </div>
          </div>
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <table
              style={{
                minHeight: data.length ? '' : '500px',
                minWidth: '700px',
                borderRadius: '10px',
              }}
              className='table table-striped shadow mt-2'
            >
              <thead>
                <tr>
                  <th scope='col' className='border-0'>
                    #
                  </th>
                  <th scope='col' className='border-0'>
                    <button
                      type='button'
                      onClick={() => requestSort('id')}
                      className='d-flex align-item-center border-0 bg-transparent'
                    >
                      <span className='fw-bold'>Order ID</span>
                      <span className='d-flex flex-column align-item-center justify-content-center sort-icon'>
                        <AiFillCaretUp
                          className={
                            getClassNamesFor('id') === 'descending'
                              ? 'descending'
                              : undefined
                          }
                        />
                        <AiFillCaretDown
                          className={
                            getClassNamesFor('id') === 'ascending'
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
                      onClick={() => requestSort('order_name')}
                      className='d-flex align-item-center border-0 bg-transparent'
                    >
                      <span className='fw-bold'>Order Name</span>
                      <span className='d-flex flex-column align-item-center justify-content-center sort-icon'>
                        <AiFillCaretUp
                          className={
                            getClassNamesFor('order_name') === 'descending'
                              ? 'descending'
                              : undefined
                          }
                        />
                        <AiFillCaretDown
                          className={
                            getClassNamesFor('order_name') === 'ascending'
                              ? 'ascending'
                              : undefined
                          }
                        />
                      </span>
                    </button>
                  </th>
                  <th scope='col' className='border-0'>
                    Table No
                  </th>
                  <th scope='col' className='border-0'>
                    Customer Name
                  </th>
                  <th scope='col' className='border-0'>
                    Location
                  </th>
                  <th scope='col' className='border-0'>
                    Order Status
                  </th>
                  <th scope='col' className='border-0'>
                    Delivery Time
                  </th>
                  <th scope='col' className='border-0'>
                    Price
                  </th>
                  <th scope='col' className='border-0'></th>
                </tr>
              </thead>
              <tbody id='myTable'>
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
                      <td>{item.id}</td>
                      <td>{item.order_name}</td>
                      <td>{item.table_no}</td>
                      <td>{item.customer_name}</td>
                      <td>{item.location}</td>
                      <td>
                        <span
                          style={{ background: 'rgba(62, 73, 84, 0.06)' }}
                          className='py-1 px-2 rounded'
                        >
                          {item.order_status}
                        </span>
                      </td>
                      <td>{item.delivery_time}</td>
                      <td>${item.price}</td>
                      <td>
                        <IoEllipsisHorizontalSharp />
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

export default Orders;
