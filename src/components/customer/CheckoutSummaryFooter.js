/**
 * The footer section of Checkout Summary
 * Contains the place order button and popular with your order components
 * */
import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Image,
} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { truncateText } from './Helper.js';
import CustomerFooter from './layout/CustomerFooter.js';
import TPLogo from '../../assets/images/TigerPuffLogo.png';
// plus icon
import { ReactComponent as PlusSvg } from '../../assets/icons/plus-square-o.svg';
import { useCustContext } from '../../CustomerContext.js';
import { addToCart } from '../../api/index.js';
export default function CheckoutSummaryFooter(props) {
  const { table_id } = useParams();
  const history = useHistory();
  const popularOrderData = [
    {
      id: 1,
      name: 'Signature Noodles',
      image:
        'https://images.deliveryhero.io/image/fd-sg/Products/16977760.jpg?width=200',
      price: 9.99,
    },
    {
      id: 2,
      name: 'Signature Noodles With Fried beehon wei',
      image:
        'https://images.deliveryhero.io/image/fd-sg/Products/16977760.jpg?width=200',
      price: 9.99,
    },
    {
      id: 2,
      name: 'Signature Noodles With Fried beehon wei',
      image:
        'https://images.deliveryhero.io/image/fd-sg/Products/16977760.jpg?width=200',
      price: 9.99,
    },
  ];
  const { brands, order } = useCustContext();
  const [data, setData] = useState([]);
  const handleQuickAdd = async (item) => {
    let formData = {
      order_items: [
        {
          menu_item_id: parseInt(item.id),
          quantity: 1,
          name: item.name,
          price: item.price,
          modifiers: [],
          variants: {},
        },
      ],
    };
    try {
      const res = await addToCart(order.id, formData);
      console.log(res.data);
      props.getOrder();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    let arr = [];
    brands.forEach((brand) => {
      brand.items.forEach((item) => {
        if (
          item.available &&
          item.modifiers.length === 0 &&
          item.variants.length === 0
        ) {
          arr.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image?.public_url,
          });
        }
      });
    });
    setData(arr);
  }, [brands]);
  return (
    <CustomerFooter classPrefix='pt-3'>
      <Container fluid>
        <h6 className='text-secondary fw-bold'>Popular with your order</h6>
      </Container>
      {Array.isArray(popularOrderData) && popularOrderData.length && (
        <div className='overflow-scroll'>
          <Row className='flex-nowrap px-3 py-2 g-2'>
            {data.map((item, index) => {
              return (
                <Col key={index} xs='10' className='flex-shrink-0'>
                  <Card
                    className='overflow-hidden border-0 bg-primary-4'
                    style={{ height: '100px' }}
                  >
                    <Row className='g-0'>
                      {/* only show this if image is available */}
                      {item.image && (
                        <Col xs='4'>
                          <Image
                            fluid
                            src={item.image}
                            className='rounded-start'
                            style={{
                              objectFit: 'cover',
                              height: '100px',
                            }}
                          />
                        </Col>
                      )}
                      <Col xs='8'>
                        <Card.Body
                          className='position-relative'
                          style={{
                            height: '100px',
                          }}
                        >
                          <p
                            className='fw-bold text-secondary mb-0'
                            style={{
                              fontSize:
                                'calc(var(--bs-body-font-size) - 0.1rem)',
                            }}
                          >
                            {/* truncate text if too long  */}
                            {truncateText(item.name, 30)}
                          </p>
                          <div className='position-absolute bottom-0 start-0 w-100 p-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5 className='mb-0'>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                              </div>
                              <div
                                style={{
                                  color: 'var(--tp-blue)',
                                }}
                              >
                                <PlusSvg onClick={() => handleQuickAdd(item)} />
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      )}
      <Container fluid>
        <div className='d-grid gap-2 mt-2'>
          <p
            className='mb-0 text-center text-muted'
            style={{ fontSize: '11px' }}
          >
            By placing order, you agree to Tigerpuff{' '}
            <a className='text-secondary fw-bold'>Terms&Services</a> and
            acknowledge that you have read our{' '}
            <a className='text-secondary fw-bold'>Privacy Statement</a>
          </p>
          <Button
            variant='primary'
            className='tp-rounded fw-bold py-2'
            onClick={() => {
              history.push(`/customer/confirm-order/${table_id}/`);
            }}
          >
            Place Order
          </Button>
        </div>
        <div className='text-center small d-flex align-items-center justify-content-center'>
          Powered By
          <Image
            src={TPLogo}
            fluid
            className='pb-1'
            style={{
              height: '45px',
            }}
          />
        </div>
      </Container>
      {/* <Container fluid className="mt-1">
        <Row
          className="d-flex justify-content-between align-items-center"
          >
          <Col className="">
            {props.orderCount && <span>{props.orderCount} orders selected</span>}
            {props.orderTotal && <h4 className="fw-bold mt-0 mb-0">${props.orderTotal}</h4>}
          </Col>
          <Col className="text-end d-grid gap-2" xs="6">
            <Button
              onClick={() => {history.push(`/customer/pay-check/${restaurant}/${table}`)}}
              variant="primary"
              className="h-100 py-2">
                Place Order
            </Button>
          </Col>
        </Row>          
      </Container>       */}
    </CustomerFooter>
  );
}
