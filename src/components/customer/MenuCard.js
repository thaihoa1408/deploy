/**
 * single menu item card*/

import { Card, Row, Image, Col } from "react-bootstrap";
import styles from "./layout/MenuCardList.module.css";
import { truncateText } from "./Helper";
import cx from "classnames";
export default function MenuCard(props) {
  const onClickHandler = (e) => {
    if (props.id && props.available) {
      props.clickViewItem(props.id);
    }
  };
  return props.name ? (
    <Card
      className={cx(styles.card_menu, {
        [styles.bg_unavailable]: !props.available,
        [styles.card_menu__selected]: props.selected.id,
      })}
      onClick={onClickHandler}
    >
      <Row className="g-0">
        <Col xs="3" md="4">
          <Image src={props.image} fluid className={styles.card_menu__image} />
        </Col>
        <Col xs="9" md="8">
          <Card.Body
            className={cx("text-left", {
              [styles.text_unavailable]: !props.available,
            })}
          >
            <h2
              className={cx(styles.card_menu__title, {
                [styles.text_unavailable]: !props.available,
                [styles.card_menu__title__selected]: props.selected.id,
              })}
            >
              {props.name}
            </h2>
            <p className={styles.card_menu__description}>
              {truncateText(props.description, props.truncateCount)}
            </p>
            <div className="d-flex mt-1 align-items-center justify-content-between">
              <h3 className={styles.card_menu__price}>
                ${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h3>
              {props.selected.quantity && (
                <div>
                  x
                  <span className="fw-semibold">{props.selected.quantity}</span>
                </div>
              )}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  ) : null;
}
