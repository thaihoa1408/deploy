/**
 * Menu List component for the customer
 **/
import { Container, Row, Card, Col, Image, Button } from 'react-bootstrap';
import MenuCard from './MenuCard';
import styles from './layout/MenuCardList.module.css';
import { useHistory } from 'react-router';
import { truncateText } from './Helper.js';
import { useEffect } from 'react';
export default function MenuCardList(props) {
  // history
  const history = useHistory();
  const clickViewItem = (id) => {
    if (id) {
      // push route to the product detail page
      history.push(`/customer/table-ordering/${props.table}/menu/${id}`);
    }
  };
  // if there is an order already, return the object
  const getOrder = (id) => {
    if(! props.orders?.id){
      return {}
    }
    const orderItems = props.orders?.order_items;
    if(orderItems.length){
      const order = orderItems.filter((x) => x.menu_item_id == id)
      if (order.length) {
        return order;
      }
    }
    return {};
  };
  const renderMenuList = (category_id) => {
    if (!props.menu.length) {
      return null;
    }
    const filtered_menu = props.menu.filter(
      (x) => x.category.id == category_id
    );
    if (filtered_menu.length) {
      return filtered_menu.map((item) => {
        return (
          <Col lg='4' xs='12' md='6' className={styles.col} key={item.id}>
            <MenuCard
              name={item.name}
              image={item.image?.public_url}
              id={item.id}
              description={item.description}
              price={item.price}
              clickViewItem={clickViewItem}
              available={item.available}
              selected={getOrder(item.id)}
            />
          </Col>
        );
      });
    }
    return null;
  };
  return (
    <Container fluid className={`${styles.container} position-relative`}>
      {props.categories.length ? (
        <div
          data-bs-spy='scroll'
          data-bs-target='#menuCategory-tab'
          data-bs-offset='50'
          tabIndex='0'
          className='position-relative'
        >
          {props.categories.map((item, index) => {
            return (
              <div id={`category-header-${item.id}`} key={index}>
                <Container className='py-1' fluid>
                  <div className='text-uppercase fs-6 fw-bold'>
                    {item.label}
                  </div>
                </Container>
                <Row className={`${styles.row}`}>{renderMenuList(item.id)}</Row>
              </div>
            );
          })}
        </div>
      ) : null}
    </Container>
  );
}
