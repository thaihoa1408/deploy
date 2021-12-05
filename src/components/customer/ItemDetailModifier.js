/**
 * The item detail modifier component */

import React, { useEffect, useRef, useState } from 'react';
import { Container, ListGroup, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function ItemDetailModifier(props) {
  const { order_item_id } = useParams();
  // the save state here
  const [selectedModifier, setSelectedModifier] = useState([]);
  const type = props.type ? props.type : 'radio';
  // list group onClick event
  // NOTE: do the option have id?
  const clickSelectModifier = (modifier_id, option, index) => {
    /*if (!modifier_id || !option_id) {
      return false;
    }
    // update selected modifier
    setSelectedModifier({
      ...selectedModifier,
      [modifier_id]: option_id,
    });*/
    let copy = [...selectedModifier[index]];
    let check = copy.find((item) => {
      return item.name === option.name;
    });
    if (check === undefined) {
      copy.push({
        id: modifier_id,
        name: option.name,
        price: option.price,
      });
      let mod = [...selectedModifier];
      mod[index] = copy;
      setSelectedModifier(mod);
      props.handleSelectModifiers(mod);
    } else {
      let arr = copy.filter((item) => {
        return item.name !== option.name;
      });
      let mod = [...selectedModifier];
      mod[index] = arr;
      setSelectedModifier(mod);
      props.handleSelectModifiers(mod);
    }
  };
  useEffect(() => {
    let arr = [];
    if (props.modifiers) {
      if (order_item_id === undefined) {
        props.modifiers.forEach((item) => {
          arr.push([]);
        });
        setSelectedModifier(arr);
      } else {
        if (props.orderModifiers) {
          props.modifiers.forEach((item) => {
            let arr1 = [];
            props.orderModifiers.forEach((item1) => {
              if (item1.id === item.id) {
                arr1.push(item1);
              }
            });
            arr.push(arr1);
          });
          setSelectedModifier(arr);
        }
      }
    }
  }, [props.modifiers, props.orderModifiers]);
  // list the options

  const renderOptionList = (modifier, modifier_index) => {
    if (!modifier.options.length) {
      return false;
    }
    // create the modifier list
    return (
      <ListGroup variant='flush'>
        {modifier.options.map((item, index) => {
          return (
            <ListGroup.Item
              key={index}
              onClick={(e) => {
                clickSelectModifier(modifier.id, item, modifier_index);
              }}
              className={`d-flex justify-content-between align-items-center pointer ${
                selectedModifier[modifier.id] === index + 1
                  ? 'fw-bold'
                  : 'fw-light'
              }`}
            >
              <div>
                <Form>
                  <Form.Check
                    readOnly
                    checked={
                      selectedModifier[modifier_index] !== undefined &&
                      selectedModifier[modifier_index].find((sel) => {
                        return sel.name === item.name;
                      }) !== undefined
                        ? true
                        : false
                    }
                    type={type}
                    label={item.name}
                  />
                </Form>
              </div>
              {item.price && <div>${item.price}</div>}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  };
  return Array.isArray(props.modifiers) && props.modifiers.length
    ? props.modifiers.map((modifier, modifier_index) => {
        return (
          <>
            <div className='bg-gray-100 py-1' key={modifier.id}>
              <Container fluid>
                <p className='mb-0'>{modifier.name}</p>
              </Container>
            </div>
            {renderOptionList(modifier, modifier_index)}
          </>
        );
      })
    : null;
}
