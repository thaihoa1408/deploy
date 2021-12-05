/**
 * The item detail modifier component */

import React, { useEffect, useRef, useState } from 'react';
import { Container, ListGroup, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function ItemDetailVariant(props) {
  const { order_item_id } = useParams();
  // the save state here
  const [selectedVariant, setSelectedVariant] = useState([]);
  const type = props.type ? props.type : 'radio';
  // list group onClick event
  // NOTE: do the option have id?
  const clickSelectVariant = (option, index) => {
    /*if (!modifier_id || !option_id) {
       return false;
     }
     // update selected modifier
     setSelectedModifier({
       ...selectedModifier,
       [modifier_id]: option_id,
     });*/
    let copy = [...selectedVariant];
    copy[index] = option;
    setSelectedVariant(copy);
    props.handleSetGroupVariant(copy);
  };
  const handleSetGroupVariant = (arr) => {
    console.log(arr.join(' - '));
  };
  useEffect(() => {
    if (props.variants) {
      if (order_item_id === undefined) {
        let arr = props.variants.map((item) => {
          return item.options[0];
        });
        setSelectedVariant(arr);
        props.handleSetGroupVariant(arr);
      } else {
        if (props.orderVariants?.name) {
          let arr = props.orderVariants.name.split(' - ');
          setSelectedVariant(arr);
        }
      }
    }
  }, [props.variants, props.orderVariants]);
  // list the options

  const renderOptionList = (variant, variant_index) => {
    if (!variant.options.length) {
      return false;
    }
    // create the modifier list
    return (
      <ListGroup variant='flush'>
        {variant.options.map((item, index) => {
          return (
            <ListGroup.Item
              key={index}
              onClick={(e) => {
                clickSelectVariant(item, variant_index);
              }}
              className={`d-flex justify-content-between align-items-center pointer`}
            >
              <div>
                <Form>
                  <Form.Check
                    readOnly
                    type={type}
                    label={item}
                    checked={
                      selectedVariant[variant_index] === item ? true : false
                    }
                  />
                </Form>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  };
  return Array.isArray(props.variants) && props.variants.length
    ? props.variants.map((variant, variant_index) => {
        return (
          <>
            <div className='bg-gray-100 py-1' key={variant.id}>
              <Container fluid>
                <p className='mb-0'>{variant.name}</p>
              </Container>
            </div>
            {renderOptionList(variant, variant_index)}
          </>
        );
      })
    : null;
}
