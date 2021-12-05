/**
 * Context Provider for Customer / Table Ordering Views
 **/

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// init context
const CustContext = createContext();

// initial state
const defaultState = {
  tableInfo: {
    id: null,
    location: {},
    order: {},
  },
  order: {
    payment_type: null,
    id: null,
    customer: {},
    items: [],
  },
};

// provider
export const CustProvider = ({ children }) => {
  const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  // table ordering detail. save details in local storage
  const [tableInfo, setTableInfo] = useState(
    JSON.parse(localStorage.getItem('tableInfo')) || defaultState.tableInfo
  );
  // we will use this at some point, for now, use name from order
  const [user, setUser] = useState(localStorage.getItem('custUser') || null);
  // global error if table doesn't exist
  const [error, setError] = useState(null);
  // Current Order Detail
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem('order')) || defaultState.order
  );
  // menu
  const [menu, setMenu] = useState(null);
  //selected brand
  const [brands, setBrands] = useState(
    JSON.parse(localStorage.getItem('brands')) || []
  );
  const [selectedBrand, setSelectedBrand] = useState(
    JSON.parse(localStorage.getItem('selectedBrand')) || {}
  );
  /**
   * get table info
   * @param table_id
   **/
  const getTableInfo = async (table_id) => {
    // if there is exiting table, check if table_id match
    /*if (tableInfo) {
      if (table_id == tableInfo.id) {
        return tableInfo;
      }
    }*/
    // else re-call, we are at a different table
    try {
      const res = await API.get(`/api/tables/${table_id}`);
      if (res.data.success) {
        // save the table detail
        setTableInfo(res.data.data);
        // persistent local storage
        localStorage.setItem('tableInfo', JSON.stringify(res.data.data));
      } else {
        // fail to fetch, not found?
        setTableInfo(defaultState.tableInfo);
        setError(res.data.error_code);
      }
    } catch (err) {
      // console.log(err)
      // setError(err)
      console.log(error);
    }
  };
  // return table no
  const getTableNumber = () => {
    if (tableInfo.id) {
      return tableInfo.name;
    }
  };

  /**
   * create order
   * @param int table_id
   * @param obj formData
   */
  const createOrder = async (table_id, formData) => {
    try {
      const res = await API.put(`/api/tables/${table_id}/join`, formData);
      if (res.data.success) {
        // save state and save to localStorage if we want to access it at a later state
        setOrder(res.data.data.order);
        localStorage.setItem('order', JSON.stringify(res.data.data.order));
      } else {
        // fail to put
        setOrder(defaultState.order);
        setError('Error creating order');
        return true;
      }
    } catch (err) {
      console.log(error);
      // setError(err)
    }
    // API.put(`/api/tables/${table_id}`, formData)
  };
  const handleSelectBrand = (value) => {
    setSelectedBrand(value);
    localStorage.setItem('selectedBrand', JSON.stringify(value));
  };
  const getBrands = async (table_id, select) => {
    try {
      const res = await API.get(`/api/tables/${table_id}/menu`);
      if (res.data.success) {
        if (res.data.data?.stores) {
          setBrands(res.data.data.stores);
          localStorage.setItem('brands', JSON.stringify(res.data.data.stores));
          if (select) {
            handleSelectBrand(res.data.data.stores[0]);
          } else {
            let selected_brand = JSON.parse(
              localStorage.getItem('selectedBrand')
            )?.id;
            if (selected_brand !== undefined) {
              let obj = res.data.data.stores.find((item) => {
                return item.id === selected_brand;
              });
              handleSelectBrand(obj);
            }
          }
        }
        if (res.data.data?.store) {
          setBrands([res.data.data.store]);
          localStorage.setItem('brands', JSON.stringify([res.data.data.store]));
          handleSelectBrand(res.data.data.store);
        }
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  //
  // context values
  const value = {
    tableInfo,
    order,
    menu,
    error,
    getTableNumber,
    getTableInfo,
    createOrder,
    getBrands,
    brands,
    selectedBrand,
    handleSelectBrand,
  };

  useEffect(() => {
    setError(null);
  }, []);
  return <CustContext.Provider value={value}>{children}</CustContext.Provider>;
};

// get context method
export const useCustContext = () => {
  return useContext(CustContext);
};
