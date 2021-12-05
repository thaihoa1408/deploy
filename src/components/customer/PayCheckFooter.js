/**
 * PayCheck footer
 * Contains the final price breakdown with tax + tips*/

import React, { useState, useEffect } from 'react';
import CustomerFooter from './layout/CustomerFooter';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function PayCheckFooter(props) {
  const renderTipPrice = () => {
    let tip = 0;
    if (!props.tip) {
      return null;
    }
    if (props.tip && props.tip !== 'Other') {
      tip = `$${props.tip}`;
    }
    // use the othertipvalue to calculate the price
    if (props.tip == 'Other') {
      tip =
        props.otherTipFormat == '$'
          ? `$${props.otherTipValue}`
          : `${props.otherTipValue}%`;
    }

    return (
      <div className='d-flex mb-1 justify-content-between align-items-center'>
        <div>Tip</div>
        <div className='fw-bold'>{tip}</div>
      </div>
    );
  };
  const handleClick = () => {
    props.onSubmit();
  };

  return (
    <CustomerFooter>
      <Container fluid>
        <div className='d-flex mb-1 justify-content-between align-items-center'>
          <div>Subtotal</div>
          <div className='fw-bold'>
            ${props.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className='d-flex mb-1 justify-content-between align-items-center'>
          <div>Tax</div>
          <div className='fw-bold'>
            $
            {(props.total * 0.01)
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        {renderTipPrice()}
        <hr />
        <div className='h4 d-flex mb-3 justify-content-between align-items-center'>
          <div>Total</div>
          <div>
            $
            {(props.total + props.total * 0.01)
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className='d-grid gap-2'>
          <Button variant='primary' size='lg' onClick={handleClick}>
            Pay
          </Button>
        </div>
      </Container>
    </CustomerFooter>
  );
}
