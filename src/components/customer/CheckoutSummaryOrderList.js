/**
 * This is the order list in the checkout summary page
 **/

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
export default function CheckoutoutSummaryOrderList(props) {
  // if it is readonly, we don't display edit
  const isReadOnly = props.readOnly ? props.readOnly : false;
  // to render the modifiers and variants
  const renderOptions = (list_modifiers) => {
    if (Array.isArray(list_modifiers) && list_modifiers.length) {
      return (
        <ul className="list-unstyled mb-0">
          {list_modifiers.map((option, index) => {
            return <li key={index}>{option.name}</li>;
          })}
        </ul>
      );
    } else {
      return null;
    }
  };
  const renderPrice = (item) => {
    let mod_price = 0;
    item.modifiers.forEach((mod) => {
      mod_price = mod_price + parseFloat(mod.price) * item.quantity;
    });
    if (item.variants.name) {
      let price =
        parseFloat(item.variants.price) * item.variants.quantity + mod_price;
      return price;
    } else {
      let price = parseFloat(item.price) * item.quantity + mod_price;
      return price;
    }
  };
  return Array.isArray(props.orders) && props.orders.length ? (
    <ListGroup
      variant="flush"
      style={
        !isReadOnly
          ? {
              paddingBottom: "295px",
            }
          : {}
      }
    >
      {/* map the orders  */}
      {props.orders.map((item, index) => {
        return (
          <ListGroup.Item key={index} className="bg-transparent">
            {/* item details */}
            <div className="d-flex justify-content-between">
              <div
                className="d-flex align-items-baseline mb-2"
                style={{ width: "80%" }}
              >
                <div className="flex-shrink-0 fw-bold">{item.quantity}x</div>
                <div className="ms-2 small">
                  <h6 className="mb-0 text-secondary fw-bold">{item.name}</h6>
                  {/* modifiers and variants */}
                  {renderOptions(item.modifiers)}
                  {item.variants?.name}
                  {/* special instructions */}
                  {item.special_instructions && (
                    <div>
                      <span className="text-muted">
                        {item.special_instructions}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {/* total price */}
              <div>
                {item.price && (
                  <span className="fw-bold">
                    $
                    {renderPrice(item)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                )}
              </div>
            </div>
            <div className="text-end">
              {!isReadOnly && (
                <>
                  <a
                    className="fw-bold text-decoration-none"
                    style={{
                      color: "var(--tp-blue)",
                    }}
                    onClick={() => {
                      props.handleEditOrderItem(item.id, item.menu_item_id);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    className="text-muted fw-bold ms-3 text-decoration-none"
                    onClick={() => props.handleDeleteOrderItem(item.id)}
                  >
                    Delete
                  </a>
                </>
              )}
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  ) : null;
}
