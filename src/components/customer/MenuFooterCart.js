/**
 * This is the sticky footer cart that is appended below the page of the customer*/

import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import CustomerFooter from "./layout/CustomerFooter";
export default function FooterCart(props) {
  // get the table no and restaurant
  const { table_id } = useParams();
  const history = useHistory();
  const [total, setTotal] = useState();
  const [amount, setAmount] = useState();
  const { orderItems } = props;
  useEffect(() => {
    if (orderItems.total) {
      setTotal(orderItems.total);
    }
    if (orderItems.order_items) {
      let num = 0;
      orderItems.order_items.forEach((item) => {
        num = num + item.quantity;
      });
      setAmount(num);
    }
  }, [orderItems]);
  return (
    <CustomerFooter classPrefix="py-0">
      <Row className="justify-content-center">
        <Col xs="12" md="6">
          <Card className="border-0">
            <Row className="g-0 justify-content-between">
              <Col xs="7" md="">
                <Card.Body className="py-2">
                  <span className="text-muted">{amount} Items selected</span>
                  <h4 className="fw-bold mt-0 mb-0">
                    ${total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
                </Card.Body>
              </Col>
              <Col xs="5" className="text-end">
                <Button
                  variant="primary"
                  onClick={() => {
                    history.push(`/customer/checkout/${table_id}`);
                  }}
                  className="h-100 rounded-0 rounded-end"
                >
                  CHECK OUT
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </CustomerFooter>
  );
}
