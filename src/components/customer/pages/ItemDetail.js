/**
 * ITEM DETAIL PAGE
 * url: /customer/menu/{restaurant}/{table}/{item}
 * This is the product detail of the item.
 * It includes all the available variation of the item. */

import React, { useState, useEffect } from 'react';
import CustomerLayout from '../layout/CustomerLayout';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import styles from '../layout/ItemDetail.module.css';
import ItemDetailModifier from '../ItemDetailModifier';
import ItemDetailFooter from '../ItemDetailFooter';
import {
  addToCart,
  deleteOrderItem,
  getItemDetails,
  getOrderInfo,
  updateOrderItem,
} from '../../../api';

import { ReactComponent as NoteSvg } from '../../../assets/icons/notes.svg';
import ItemDetailVariant from '../ItemDetailVariant';
import { useCustContext } from '../../../CustomerContext';
export default function ItemDetail() {
  const { order } = useCustContext();
  const { item_id, order_item_id } = useParams();
  // quantity
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemInfo, setItemInfo] = useState({});
  const [price, setPrice] = useState();
  const history = useHistory(0);
  const [selectedModifiers, setSelectedModifiers] = useState([]);
  const handleSelectModifiers = (item) => {
    let mod = [];
    item.forEach((item1) => {
      item1.forEach((item2) => {
        mod.push(item2);
      });
    });
    console.log(mod);
    setSelectedModifiers(mod);
  };
  const [groupVariant, setGroupVariant] = useState();
  const handleSetGroupVariant = (arr) => {
    let joinArr = arr.join(' - ');
    if (itemInfo.group_variants.length) {
      let group_var = itemInfo.group_variants[0].options.find(
        (item) => item.name === joinArr
      );
      console.log(group_var);
      setGroupVariant(group_var);
    }
  };
  const isFloat = (x) => {
    return !!(x % 1);
  };
  const handleAddToCart = async () => {
    let formData = {
      order_items: [
        {
          menu_item_id: parseInt(item_id),
          quantity: itemQuantity,
          name: itemInfo.name,
          price: itemInfo.price,
        },
      ],
    };

    let modifiers = selectedModifiers.map((item) => {
      return { ...item, quantity: itemQuantity };
    });
    formData.order_items[0]['modifiers'] = modifiers;

    if (groupVariant?.name) {
      formData.order_items[0]['variants'] = {
        name: groupVariant.name,
        price: groupVariant.price,
        quantity: itemQuantity,
      };
    } else {
      formData.order_items[0]['variants'] = {};
    }
    try {
      const res = await addToCart(order.id, formData);
      console.log(res.data);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdatetoCart = async () => {
    let formData = {
      quantity: itemQuantity,
    };

    let modifiers = selectedModifiers.map((item) => {
      return { ...item, quantity: itemQuantity };
    });
    formData['modifiers'] = modifiers;
    if (groupVariant?.name) {
      formData['variant'] = {
        name: groupVariant.name,
        price: groupVariant.price,
        quantity: itemQuantity,
      };
    } else {
      formData['variant'] = {};
    }
    console.log(formData);
    try {
      const res = await updateOrderItem(order_item_id, formData);
      console.log(res.data);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  // fake data
  /*const data = {
    id: item_id,
    name: "Signature Noodles",
    category: "Tasty!",
    description:
      "The Crowd Favourite! Signature Noodle is served with sliced and diced meat",
    time_from: "09:00",
    time_to: "10:00",
    price: 5.25,
    image:
      "https://images.deliveryhero.io/image/fd-sg/Products/16977760.jpg?width=500",
    // the modifier section. the modifier may have one or more section here
    list_modifier: [
      {
        name: "Choose your size",
        id: 1,
        options: [
          {
            id: 1,
            name: "Small",
            price: 5.25,
          },
          {
            id: 2,
            name: "Medium",
            price: 8,
          },
          {
            id: 3,
            name: "Large",
            price: 10,
          },
        ],
      },
    ],
    // note the spelling for the varient is a typo
    list_variant: [
      {
        name: "Spicy Level",
        id: 1,
        options: [
          {
            id: 1,
            name: "No Spicy",
          },
          {
            id: 2,
            name: "Mild Spicy",
          },
          {
            id: 3,
            name: "Extra Spicy",
          },
        ],
      },
    ],
  };*/
  const [orderItem, setOrderItem] = useState({});
  const getOrder = async () => {
    try {
      if (order.id) {
        const res = await getOrderInfo(order.id);
        let order_item = res.data.data.order_items.find((item) => {
          return item.id == order_item_id;
        });
        setOrderItem(order_item);
        setSelectedModifiers(order_item.modifiers);
        setGroupVariant(order_item.variants);
        setItemQuantity(order_item.quantity);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getItemDetail = async () => {
    const res = await getItemDetails(item_id);
    if (res.status === 200) {
      await setItemInfo(res.data.data);
    }
  };
  useEffect(() => {
    getItemDetail();
    if (order_item_id !== undefined) {
      getOrder();
    }
    window.scrollTo(0, 0);
  }, []);
  const handleDeleteOrderItem = async (id) => {
    try {
      const res = await deleteOrderItem(id);
      history.goBack();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // only do this once
    if (itemQuantity <= 0) {
      if (order_item_id !== undefined) {
        handleDeleteOrderItem(order_item_id);
      } else {
        setItemQuantity(1);
      }
    }
    // update price
    if (itemQuantity > 0) {
      // we need to take into consideration the additional top up
      let modifierPrice = 0;
      selectedModifiers.forEach((item) => {
        modifierPrice = modifierPrice + parseFloat(item.price);
      });

      if (groupVariant?.price) {
        setPrice(itemQuantity * (groupVariant?.price + modifierPrice));
      } else {
        setPrice(itemQuantity * (itemInfo?.price + modifierPrice));
      }
    }
  }, [itemQuantity, itemInfo, selectedModifiers, groupVariant, orderItem]);

  return (
    <CustomerLayout>
      {/* full dish background */}
      <div className='d-md-flex'>
        <div>
          <div className={styles.image_overlay}>
            <Image
              fluid
              src={itemInfo?.image ? itemInfo?.image?.public_url : null}
              className={styles.image_overlay__image}
            />
            {/* back button */}
          </div>
          <div
            className='position-fixed top-0 left-0 opacity-75'
            style={{ zIndex: 1 }}
          >
            <Button
              onClick={(e) => history.goBack()}
              variant='dark'
              className='rounded-circle ms-3 mt-3'
            >
              <i className='bi bi-arrow-left-short'></i>
            </Button>
          </div>
        </div>
        <div>
          {/* To create the cool scroll and hide image, we need to set a margin based on the image */}
          <div className={styles.itemdetail_content}>
            <Container fluid>
              <div className='d-flex justify-content-between align-items-center'>
                <h3 className='text-secondary fw-bold'>{itemInfo?.name}</h3>
                <h4 className='fw-tp fw-normal'>${itemInfo?.price}</h4>
              </div>
              <p className='small'>{itemInfo?.description}</p>
            </Container>
            {/* Item Detail Modifiers */}
            <ItemDetailModifier
              modifiers={itemInfo?.modifiers}
              orderModifiers={orderItem?.modifiers}
              required={true}
              handleSelectModifiers={handleSelectModifiers}
              type='checkbox'
            />
            {/* Item Detail Varients */}
            <ItemDetailVariant
              variants={itemInfo?.variants}
              orderVariants={orderItem?.variants}
              type='radio'
              handleSetGroupVariant={handleSetGroupVariant}
            />
            <hr />
            <Container fluid>
              <Form>
                {/* special instructions section */}
                <Form.Group className='d-flex align-items-center'>
                  <Form.Label className='mb-0'>
                    <span className='text-primary'>
                      <NoteSvg />
                    </span>
                  </Form.Label>
                  <Form.Control
                    placeholder='Extra note: E.g no pickles, more sauce..'
                    className='border-0 input-sm'
                  ></Form.Control>
                </Form.Group>
              </Form>
            </Container>
          </div>
        </div>
      </div>

      {/* Add to cart footer */}
      <ItemDetailFooter
        quantity={itemQuantity}
        setQuantity={setItemQuantity}
        price={price}
        handleAddToCart={handleAddToCart}
        handleUpdatetoCart={handleUpdatetoCart}
      />
    </CustomerLayout>
  );
}
