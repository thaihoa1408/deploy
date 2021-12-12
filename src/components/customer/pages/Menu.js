/**
 * MAIN RESTAURANT MENU PAGE
 * url: /customer/menu/{restaurant}/{table}
 * This page contains all the menu details and item to add into their cart */
import React, { useEffect, useState, useRef } from 'react';
import CustomerLayout from '../layout/CustomerLayout';
import NavbarCust from '../NavbarCust';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MenuSearch from '../MenuSearch';
import MenuCategory from '../MenuCategory';
import MenuCardList from '../MenuCardList';
import FooterCart from '../MenuFooterCart';
import { getMenu, getOrderInfo } from '../../../api';
import MenuBrand from '../MenuBrand';
import { useCustContext } from '../../../CustomerContext';
export default function Menu() {
  const { selectedBrand, order, getBrands } = useCustContext();
  // maybe we can get the table no from a context
  //const { restaurant, table } = useParams();
  const { table_id } = useParams();
  // the filtered menu items
  const [menuData, setMenuData] = useState([]);
  const [menuDataFilter, setMenuDataFilter] = useState([]);
  const [menuCategory, setMenuCategory] = useState([]);

  const handleFilterCategories = () => {
    let category_id = [];
    let categories = [];
    if (selectedBrand.items !== undefined) {
      selectedBrand.items.forEach((item) => {
        let check = category_id.includes(item.category.id);
        if (!check) {
          category_id.push(item.category.id);
          categories.push({ label: item.category.name, id: item.category.id });
        }
      });
    }
    setMenuCategory(categories);
  };
  useEffect(() => {
    handleFilterCategories();
    setMenuData(selectedBrand.items);
    setMenuDataFilter(selectedBrand.items);
    //setOrderData(orders);
  }, [selectedBrand]);
  const searchFunction = (myInput) => {
    const input = document.getElementById(myInput);
    const filter = input.value.toUpperCase();
    let data = [];
    menuData.forEach((item) => {
      if (
        item.name.toUpperCase().indexOf(filter) > -1 ||
        item.description.toUpperCase().indexOf(filter) > -1
      ) {
        data.push(item);
      }
    });
    setMenuDataFilter(data);
  };
  const [orderItems, setOrderItems] = useState({});
  const getOrder = async () => {
    try {
      if (order.id) {
        const res = await getOrderInfo(order.id);
        setOrderItems(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOrder();
  }, [order]);
  useEffect(() => {
    getBrands(table_id, false);
  }, []);
  return (
    <CustomerLayout>
      <NavbarCust table={table_id} page={'home'} />
      {/* 
        NOTE: the search and the category UI needs to be a sticky when scrolling. so we wrap them in a div 
      */}
      <div className='bg-primary-4'>
        <div className='sticky-top sticky-md-none bg-primary-4'>
          <Link
            to={`/customer/table-ordering/${table_id}/brands`}
            style={{ textDecoration: 'none' }}
          >
            <MenuBrand
              logo={selectedBrand.logo?.public_url}
              background={selectedBrand.cover_photo?.public_url}
              text={selectedBrand?.name}
              drop
            />
          </Link>
          <Container fluid>
            <Row>
              <Col xs='12'>
                {/* Search UI */}
                <MenuSearch
                  //type={'food_center'}
                  searchFunction={searchFunction}
                />
              </Col>
            </Row>
          </Container>
          {/*  Category Section */}
          <MenuCategory categories={menuCategory} />
        </div>
        {/* Menu Card section */}
        <MenuCardList
          menu={menuDataFilter}
          categories={menuCategory}
          orders={orderItems}
          table={table_id}
        />
        {/* Footer Cart */}
        <FooterCart orderItems={orderItems} />
      </div>
    </CustomerLayout>
  );
}
