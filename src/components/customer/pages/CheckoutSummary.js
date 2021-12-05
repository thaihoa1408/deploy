/**
 * The checkout summary page
 * url: /customer/checkout/:restaurant/:table
 * This is the cart/summary page of the ordering*/

import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup,
} from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import CustomerLayout from "../layout/CustomerLayout";
import NavbarCust from "../NavbarCust";

// Restaurant logo
import Logo from "../../../assets/images/logo.png";
import RestaurantLogo from "../RestaurantLogo";

// Components
import CheckoutoutSummaryOrderList from "../CheckoutSummaryOrderList";
import CheckoutSummaryFooter from "../CheckoutSummaryFooter";
import { useCustContext } from "../../../CustomerContext";
import { deleteOrderItem, getOrderInfo } from "../../../api";
export default function CheckoutSummmary() {
  const { table_id } = useParams();
  const history = useHistory();
  const { order } = useCustContext();
  // restaurant information fake
  const restaurantData = {
    name: "Bo's Coffee House",
    logo: Logo,
  };

  // an array of orders here. slight order variation will be moved to another object
  /*const orderSummary = [
    {
      id: 1, 
      name: 'Signature Noodles',
      price: 5.25,
      quantity: 1,
      list_modifier:[
        {
          // we don't need to include the name here. tbc 
          id: 1,
          name: 'Small'
        }
      ]
    },
    {
      id:2,
      name: 'Mee Goreng Seafood ',
      price: 7,
      quantity: 2,
      list_modifier:[
        {
          id:2,
          name: 'Large'
        }
      ],
      special_instructions: 'Please add more gravy thanks. I need something else more '
    },
    {
      id: 1, 
      name: 'Signature Noodles',
      price: 5.25,
      quantity: 1,
      list_modifier:[
        {
          // we don't need to include the name here. tbc 
          id: 1,
          name: 'Small'
        }
      ]
    },
  ]*/
  const [total, setTotal] = useState();
  const [amount, setAmount] = useState();
  const [orderSummary, setOrderSummary] = useState([]);
  const getOrder = async () => {
    try {
      if (order.id) {
        const res = await getOrderInfo(order.id);
        setOrderSummary(res.data.data.order_items);
        setTotal(res.data.data.total);
        let num = 0;
        res.data.data.order_items.forEach((item) => {
          num = num + item.quantity;
        });
        setAmount(num);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteOrderItem = async (id) => {
    try {
      const res = await deleteOrderItem(id);
      console.log(res.data);
      getOrder();
    } catch (err) {
      console.log(err);
    }
  };
  const handleEditOrderItem = (order_item_id, menu_item_id) => {
    history.push(
      `/customer/table-ordering/${table_id}/menu/${menu_item_id}/${order_item_id}`
    );
  };
  useEffect(() => {
    getOrder();
  }, [order]);
  return (
    <div id="scroll">
      <NavbarCust goBack={true} title={"Order Summary"} />
      {/* Remind the user which restaurant they are ordering at. cos right now there is no indicator */}
      <Container fluid className="pt-3">
        {/* <div className="d-flex justify-content-between align-items-center">
          <RestaurantLogo
            orientation="horizontal"
            logo={restaurantData.logo}
            name={restaurantData.name}
            />
          <Button
            variant="light"
            size="sm"
            className="pull-right"
            onClick={() => history.goBack()}
            >
              Order More
          </Button>
        </div> */}
        <div className="text-center">
          <div className="text-muted small">{amount} dish selected</div>
          <h4 className="fw-bold">
            Total: ${total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
      </Container>
      {/* Display all the orders */}
      <CheckoutoutSummaryOrderList
        orders={orderSummary}
        handleDeleteOrderItem={handleDeleteOrderItem}
        handleEditOrderItem={handleEditOrderItem}
      />
      <CheckoutSummaryFooter getOrder={getOrder} />
    </div>
  );
}
