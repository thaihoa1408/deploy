/**
 * single menu item card*/

import { Card, Row, Image, Col } from 'react-bootstrap';
import styles from './layout/MenuCardList.module.css';
import { truncateText } from './Helper';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import Dotdotdot from 'react-dotdotdot';
export default function MenuCard(props) {
  const { selected } = props;
  // we need to loop through the different variation of the item.
  const [quantity, setQuantity] = useState(0);

  const onClickHandler = (e) => {
    if (props.id && props.available) {
      props.clickViewItem(props.id);
    }
  };
  useEffect(() => {
    if (selected.length) {
      let num = 0;
      selected.forEach((item) => {
        num += item.quantity;
      });
      setQuantity(num);
    }
  }, [selected]);
  return props.name ? (
    <Card
      className={cx(styles.card_menu, {
        [styles.bg_unavailable]: !props.available,
        [styles.card_menu__selected]: props.selected.length,
      })}
      onClick={onClickHandler}
    >
      <Row className='g-0'>
        <Col xs='3' md='4'>
          <Image src={props.image} fluid className={styles.card_menu__image} />
        </Col>
        <Col xs='9' md='8'>
          <Card.Body
            className={cx('text-left', {
              [styles.text_unavailable]: !props.available,
            })}
          >
            <h2
              className={cx(styles.card_menu__title, {
                [styles.text_unavailable]: !props.available,
                [styles.card_menu__title__selected]: props.selected.length,
              })}
            >
              {props.name}
            </h2>
            <Dotdotdot clamp={4}>
              <p className={styles.card_menu__description}>
                {props.description}
                {/*truncateText(props.description, props.truncateCount)*/}
              </p>
            </Dotdotdot>

            <div className='d-flex mt-1 align-items-center justify-content-between'>
              <div className='d-flex'>
                {props.id === 14 && (
                  <p
                    style={{
                      color: '#808D9A',
                      marginBottom: 0,
                      textDecoration: 'line-through',
                      marginRight: 5,
                    }}
                  >
                    ${200.0}
                  </p>
                )}
                <h3 className={styles.card_menu__price}>
                  $
                  {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h3>
              </div>
              {quantity > 0 && (
                <div>
                  x<span className='fw-semibold'>{quantity}</span>
                </div>
              )}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  ) : null;
}
