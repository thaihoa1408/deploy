/**
 * Pay Check Page
 * url: /customer/pay-check/:restaurant/:table
 * This is the payment page
 * TBD: Is this for pay now features ?
 **/

import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ToggleButton,
  Card,
  Image,
  ListGroup,
  Accordion,
  FloatingLabel,
} from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import CustomerLayout from '../layout/CustomerLayout';
import NavbarCust from '../NavbarCust';
import styles from '../layout/PayCheck.module.css';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
// summary order
import CheckoutSummaryOrderList from '../CheckoutSummaryOrderList';
import PayCheckFooter from '../PayCheckFooter';
import { useCustContext } from '../../../CustomerContext';
import { getOrderInfo, PayForOrder } from '../../../api';

export default function PayCheck() {
  const history = useHistory();
  const { order } = useCustContext();
  const { table_id } = useParams();
  // an array of orders here. slight order variation will be moved to another object
  const [tip, setTip] = useState(0);
  const [otherTipValue, setOtherTipValue] = useState(0);
  const [otherTipFormat, setOtherTipFormat] = useState('$');
  const stripe = useStripe();
  const elements = useElements();
  const otherTipFormatOption = [{ value: '$' }, { value: '%' }];
  const tipOption = [
    { value: 5 },
    { value: 7 },
    { value: 10 },
    { value: 'Other' },
  ];
  const clickPay = async (e) => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    try {
      const card = elements.getElement(CardNumberElement);
      const result = await stripe.createToken(card);
      console.log('[PaymentMethod]', result);
      if (result?.token) {
        const res = await PayForOrder(order.id, {
          stripe_token: result.token.id,
        });
        if (res.data.success) {
          history.push({
            pathname: `/customer/pay-check-invoice/${table_id}`,
            state: { result: true },
          });
        } else {
          history.push({
            pathname: `/customer/pay-check-invoice/${table_id}`,
            state: { result: false },
          });
        }
      }
    } catch (err) {
      console.log(err);
      history.push({
        pathname: `/customer/pay-check-invoice/${table_id}`,
        state: { result: false },
      });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
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
  useEffect(() => {
    getOrder();
  }, [order]);
  const [message, setMessage] = useState({
    number: '',
    expiry: '',
    cvc: '',
  });
  return (
    <CustomerLayout>
      <NavbarCust goBack={true} title={'Pay check'} />
      <Container
        fluid
        className='mt-2'
        style={{
          paddingBottom: '200px',
        }}
      >
        {/* Dropdown orders */}
        <Accordion className='mt-2'>
          <Accordion.Item eventKey='0' className={styles.accordion_order}>
            <Accordion.Button className={styles.accordion_order__btn}>
              Your Orders ({amount})
            </Accordion.Button>
            <Accordion.Body className={styles.accordion_order__body}>
              {
                <CheckoutSummaryOrderList
                  orders={orderSummary}
                  readOnly={true}
                />
              }
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* payment method */}
        <h6 className='text-secondary fw-bold mt-4'>Payment Method</h6>
        {/* Credit Card */}
        <Card
          className={
            'bg-secondary-5 border-0 mb-3 ' + styles.paycheck_border_radius
          }
        >
          <Card.Body>
            <span className='h6 fw-bold text-secondary'>
              <i className='bi bi-credit-card'></i>&nbsp; Credit/Debit Card
            </span>
          </Card.Body>
        </Card>
        {/* Credit Card Form */}
        <Form className='mb-2'>
          <CardNumberElement
            className={styles.paycheck_custom}
            options={{
              style: {
                base: {
                  fontSize: '20px',
                },
              },
              placeholder: 'Card number',
            }}
            onReady={() => {
              console.log('CardNumberElement [ready]');
            }}
            onChange={(event) => {
              console.log('CardNumberElement [change]', event);
              if (event.error !== undefined) {
                setMessage({ ...message, number: event.error.message });
              } else {
                setMessage({ ...message, number: '' });
              }
            }}
            onBlur={() => {
              console.log('CardNumberElement [blur]');
            }}
            onFocus={() => {
              console.log('CardNumberElement [focus]');
            }}
          />
          <div style={{ color: '#df1b41' }} className='my-2 ps-1'>
            {message.number}
          </div>
          <Row className='g-1'>
            <Col xs='7'>
              <CardExpiryElement
                className={styles.paycheck_custom}
                options={{
                  style: { base: { fontSize: '20px' } },
                }}
                onReady={() => {
                  console.log('CardNumberElement [ready]');
                }}
                onChange={(event) => {
                  console.log('CardNumberElement [change]', event);
                  if (event.error !== undefined) {
                    setMessage({ ...message, expiry: event.error.message });
                  } else {
                    setMessage({ ...message, expiry: '' });
                  }
                }}
                onBlur={() => {
                  console.log('CardNumberElement [blur]');
                }}
                onFocus={() => {
                  console.log('CardNumberElement [focus]');
                }}
              />
              <div style={{ color: '#df1b41' }} className='my-2 ps-1'>
                {message.expiry}
              </div>
            </Col>
            <Col xs='5'>
              <CardCvcElement
                className={styles.paycheck_custom}
                options={{
                  style: { base: { fontSize: '20px' } },
                }}
                onReady={() => {
                  console.log('CardNumberElement [ready]');
                }}
                onChange={(event) => {
                  console.log('CardNumberElement [change]', event);
                  if (event.error !== undefined) {
                    setMessage({ ...message, cvc: event.error.message });
                  } else {
                    setMessage({ ...message, cvc: '' });
                  }
                }}
                onBlur={() => {
                  console.log('CardNumberElement [blur]');
                }}
                onFocus={() => {
                  console.log('CardNumberElement [focus]');
                }}
              />
              <div style={{ color: '#df1b41' }} className='my-2 ps-1'>
                {message.cvc}
              </div>
            </Col>
          </Row>
        </Form>
        {/* E-wallet */}
        <Card
          className={
            'bg-primary-4 border-0 mb-3 ' + styles.paycheck_border_radius
          }
        >
          <Card.Body>
            <span className='h6 fw-bold text-secondary'>
              <i className='bi bi-wallet'></i> E-wallet
            </span>
          </Card.Body>
        </Card>
        {/* Cash */}
        <Card
          className={
            'bg-primary-4 border-0 mb-3 ' + styles.paycheck_border_radius
          }
        >
          <Card.Body>
            <span className='h6 fw-bold text-secondary'>
              <i className='bi bi-cash'></i> Cash
            </span>
          </Card.Body>
        </Card>
        <h6 className='text-secondary fw-bold mt-4'>
          Add Tip <span className='small text-muted fw-normal'>(optional)</span>
        </h6>
        <div className='d-grid gap-2'>
          <ButtonGroup className='mb-2'>
            {tipOption.map((option, index) => {
              return (
                <ToggleButton
                  key={index}
                  id={`radio-${index}-tip`}
                  type='radio'
                  name='radio-tip'
                  className={'py-3 ' + styles.paycheck_btn_tip}
                  variant='outline-secondary'
                  value={option.value}
                  checked={option.value == tip}
                  onChange={(e) => setTip(e.currentTarget.value)}
                >
                  {Number.isInteger(option.value) ? `$` : ''}
                  {option.value}
                </ToggleButton>
              );
            })}
          </ButtonGroup>
          {/* Only show the extra tip input if the user clicks on other */}
        </div>
        {tip == 'Other' && (
          <Row>
            <Col xs='4'>
              <ButtonGroup className='mb-2'>
                {otherTipFormatOption.map((option, index) => {
                  return (
                    <ToggleButton
                      key={index}
                      id={`radio-${index}-tip-format`}
                      type='radio'
                      variant='outline-secondary'
                      className={'px-4 py-3 ' + styles.paycheck_btn_tip_format}
                      name='radio-tip-format'
                      value={option.value}
                      checked={option.value == otherTipFormat}
                      onChange={(e) => setOtherTipFormat(e.currentTarget.value)}
                    >
                      {option.value}
                    </ToggleButton>
                  );
                })}
              </ButtonGroup>
            </Col>
            <Col xs='8'>
              <Form.Group>
                <Form.Control
                  type='number'
                  inputMode='decimal'
                  className={'py-3 ' + styles.paycheck_border_radius}
                  onChange={(e) => {
                    setOtherTipValue(e.currentTarget.value);
                  }}
                  placeholder='20'
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        )}
      </Container>
      <PayCheckFooter
        tip={tip}
        otherTipFormat={otherTipFormat}
        otherTipValue={otherTipValue}
        total={total}
        onSubmit={clickPay}
        total={total}
      />
    </CustomerLayout>
  );
}
