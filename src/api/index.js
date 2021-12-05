import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

/**
 * ported over CustContext
 */
// export const getInfoTable = (table_id) => API.get(`/api/tables/${table_id}`);
// export const createOrder = (id, formData) =>
//   API.put(`/api/tables/${id}/join`, formData);

/**
 * Get the menu items
 * @param int table_id
 **/
export const getMenu = (table_id) => API.get(`/api/tables/${table_id}/menu`);

/**
 * Get the item details
 * @param int item_id
 **/
export const getItemDetails = (item_id) =>
  API.get(`/api/menus/items/${item_id}`);
export const addToCart = (id, formData) =>
  API.patch(`/api/orders/${id}/add-to-cart`, formData);
export const getOrderInfo = (id) => API.get(`/api/orders/${id}`);
export const deleteOrderItem = (id) => API.delete(`/api/orders/items/${id}`);
export const updateOrderItem = (id, formData) =>
  API.patch(`/api/orders/items/${id}`, formData);
export const PayForOrder = (id, formData) =>
  API.post(`/api/orders/${id}/pay`, formData);
