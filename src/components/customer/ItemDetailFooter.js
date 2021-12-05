/**
 * Item Detail Footer section
 * This component contains the add and minus of quantity
 **/
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ReactComponent as MinusSvg } from "../../assets/icons/minus-square-o.svg";
import { ReactComponent as PlusSvg } from "../../assets/icons/plus-square-o.svg";
import { useParams } from "react-router-dom";
export default function ItemDetailFooter(props) {
  const { order_item_id } = useParams();
  return (
    <footer
      className="fixed-bottom shadow-lg bg-white bottom-0 left-0 w-100"
      style={{ zIndex: 1030 }}
    >
      <Form>
        <Row className="g-0">
          <Col xs="5" className="py-3 px-4">
            <Form.Group className="d-flex align-items-center justify-content-between">
              <div>
                <Button
                  variant="quantity"
                  onClick={() => props.setQuantity(props.quantity - 1)}
                >
                  <MinusSvg />
                </Button>
              </div>
              <div>
                {props.quantity && (
                  <div className="my-0 fw-bold fs-5">{props.quantity}</div>
                )}
              </div>
              <div>
                <Button
                  variant="quantity"
                  onClick={() => props.setQuantity(props.quantity + 1)}
                >
                  <PlusSvg />
                </Button>
              </div>
            </Form.Group>
          </Col>
          <Col xs="7" className="d-grid gap-2">
            {order_item_id === undefined ? (
              <Button
                onClick={() => props.handleAddToCart()}
                variant="primary"
                className="rounded-0 fw-bold"
              >
                Add to Order -{" "}
                {props.price && (
                  <span>
                    $
                    {props.price
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                )}
              </Button>
            ) : (
              <Button
                onClick={() => props.handleUpdatetoCart()}
                variant="primary"
                className="rounded-0 fw-bold"
              >
                Update to Order -{" "}
                {props.price && (
                  <span>
                    $
                    {props.price
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                )}
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </footer>
  );
}
