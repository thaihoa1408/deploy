/**
 * A pay check transaction is the completed page after the user clicks on pay.
 * url: /customer/pay-check-transaction/bob/5
 */

import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  Accordion,
  Card,
} from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router';
import CustomerLayout from '../layout/CustomerLayout';
import RestaurantLogo from '../RestaurantLogo';
import CheckoutSummaryOrderList from '../CheckoutSummaryOrderList';
import styles from '../layout/PayCheck.module.css';
import Logo from '../../../assets/images/logo.png';
import { useCustContext } from '../../../CustomerContext';
import { getOrderInfo } from '../../../api';

export default function PayCheckInvoice() {
  const history = useHistory();
  const { restaurant, table } = useParams();
  const [amount, setAmount] = useState();
  const [orderSummary, setOrderSummary] = useState([]);
  const [total, setTotal] = useState();

  // const [isSuccessful, setIsSuccessful] = useState(false);
  const isSuccessful = useLocation().state?.result;

  // fake data
  const restuarantData = {
    name: "Bo's Coffee House",
    logo: Logo,
  };
  const { selectedBrand, order } = useCustContext();

  // const orderSummary = [
  //   {
  //     id: 1,
  //     name: "Signature Noodles",
  //     price: 5.25,
  //     quantity: 1,
  //     list_modifier: [
  //       {
  //         // we don't need to include the name here. tbc
  //         id: 1,
  //         name: "Small",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Mee Goreng Seafood ",
  //     price: 7,
  //     quantity: 2,
  //     list_modifier: [
  //       {
  //         id: 2,
  //         name: "Large",
  //       },
  //     ],
  //     special_instructions:
  //       "Please add more gravy thanks. I need something else more ",
  //   },
  //   {
  //     id: 1,
  //     name: "Signature Noodles",
  //     price: 5.25,
  //     quantity: 1,
  //     list_modifier: [
  //       {
  //         // we don't need to include the name here. tbc
  //         id: 1,
  //         name: "Small",
  //       },
  //     ],
  //   },
  // ];
  const redeemItems = [
    {
      image:
        'https://images.deliveryhero.io/image/fd-sg/Products/16977760.jpg?width=200',
      name: 'Coffee',
      point: 150,
    },
    {
      image:
        'https://images.deliveryhero.io/image/fd-sg/Products/16977760.jpg?width=200',
      name: 'Coffee',
      point: 150,
    },
  ];

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
  useEffect(() => {
    getOrder();
  }, [order]);
  return (
    <CustomerLayout>
      <Container fluid>
        <div className='mt-3 d-flex justify-content-center'>
          <div className='d-flex flex-column align-items-center'>
            <RestaurantLogo logo={selectedBrand.logo?.public_url} />
            {isSuccessful ? (
              <>
                <div className='d-block text-center mt-3 text-success'>
                  <i
                    className='bi bi-check-circle-fill'
                    style={{ fontSize: 70, color: '#58C2F1' }}
                  ></i>
                </div>
                <h5 className='mt-3 fw-bold text-secondary'>
                  Payment Successful!
                </h5>
              </>
            ) : (
              <>
                <div className='d-block text-center mt-3 text-success'>
                  <i
                    class='bi bi-exclamation-circle-fill'
                    style={{ fontSize: 70, color: '#F45757' }}
                  ></i>
                  <h5 className='mt-3 fw-bold' style={{ color: '#33495E' }}>
                    Something went wrong...
                  </h5>
                  <p style={{ color: '#001B36' }}>
                    Please contact our staffs or
                  </p>
                  <p
                    style={{ color: '#0084F8', cursor: 'pointer' }}
                    onClick={() => history.goBack()}
                  >
                    Try again
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Dropdown orders */}
        <Accordion className='mt-2'>
          <Accordion.Item eventKey='0' className={styles.accordion_order}>
            <Accordion.Button className={styles.accordion_order__btn}>
              Your Orders ({amount})
            </Accordion.Button>
            <Accordion.Body className={styles.accordion_order__body}>
              <CheckoutSummaryOrderList orders={orderSummary} readOnly={true} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* price breakdown */}
        <div className='d-flex mb-1 mt-4 justify-content-between align-items-center'>
          <div>Subtotal</div>
          <div className='fw-bold'>
            ${total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className='d-flex mb-1 mt-4s justify-content-between align-items-center'>
          <div>Tax</div>
          <div className='fw-bold'>
            ${(total * 0.01)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <hr />
        <div className='h4 d-flex mb-3 justify-content-between align-items-center'>
          <div>Total</div>
          <div>
            {(total + total * 0.01)
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className='d-grid gap-2 mt-4'>
          <Button
            variant='secondary'
            size='lg'
            className={'py-3 ' + styles.paycheck_border_radius}
            onClick={() => {
              history.push(`/customer/menu/${restaurant}/${table}`);
            }}
          >
            Order More
          </Button>
        </div>
        {isSuccessful && (
          <>
            {/* The loyalty point section. */}

            <div className='text-center'>
              <h4 className='text-secondary mt-5 fw-bold text-center'>
                You gained 200 points!
              </h4>
              <p className='text-muted'>
                Sign up to redeem this points and enjoy many perks for loyalty
                program
              </p>
            </div>

            <div className='d-grid gap-2'>
              <Button
                variant='primary'
                size='lg'
                className={'py-3 fw-bold ' + styles.paycheck_border_radius}
                onClick={() => {
                  history.push('/customer/signup');
                }}
              >
                Sign up for loyalty
              </Button>
            </div>
            {/* Show the customer what they actually can earn from this   */}

            <div className='mt-4'>
              <h6 className='fw-bold text-secondary text-center'>
                You can redeem this
              </h6>
              <Row className='mt-3'>
                {redeemItems.map((item) => {
                  return (
                    <Col>
                      <Card className='border-0 shadow-sm bg-primary-tint-800'>
                        <Card.Body className='p-2'>
                          <Image fluid src={item.image} className='rounded' />
                          <h6 className='mt-2 mb-0 text-truncate fw-bold'>
                            {item.name}
                          </h6>
                          <p className='mb-0'>{item.point} points</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </>
        )}
      </Container>
    </CustomerLayout>
  );
}
