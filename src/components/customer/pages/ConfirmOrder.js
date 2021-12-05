import React, { useEffect, useState } from "react";
import { Accordion, Container, Button } from "react-bootstrap";
import { useCustContext } from "../../../CustomerContext";
import CustomerLayout from "../layout/CustomerLayout";
import RestaurantLogo from "../RestaurantLogo";
import styles from "../layout/PayCheck.module.css";
import { getOrderInfo } from "../../../api";
import { useHistory, useParams } from "react-router-dom";
function ConfirmOrder(props) {
  const history = useHistory();
  const { selectedBrand, order } = useCustContext();
  const { table_id } = useParams();
  const [total, setTotal] = useState();
  const [amount, setAmount] = useState();
  const getOrder = async () => {
    try {
      if (order.id) {
        const res = await getOrderInfo(order.id);
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
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <RestaurantLogo logo={selectedBrand.logo?.public_url} />
            <div className="d-block text-center mt-2 text-success">
              <i
                className="bi bi-check-circle-fill"
                style={{ fontSize: 70, color: "#58C2F1" }}
              ></i>
            </div>
            <h5 className="mt-2 fw-bold text-secondary">Thank you!</h5>
            <p className="w-75 text-center" style={{ color: "#001B36" }}>
              Your order is submitted and will be served to you soon
            </p>
          </div>
        </div>
        <div className="mt-3">
          <Button
            variant="secondary"
            size="lg"
            className={"form-control py-3 " + styles.paycheck_border_radius}
            onClick={() => history.goBack()}
          >
            Order More
          </Button>
        </div>
        <Accordion className="mt-3">
          <Accordion.Item eventKey="0" className={styles.accordion_order}>
            <Accordion.Button
              className={styles.accordion_order__btn}
              onClick={() => history.push(`/customer/open-check/${table_id}`)}
            >
              View open check -{" "}
              {total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Accordion.Button>
          </Accordion.Item>
        </Accordion>
        <div className="d-flex flex-column align-items-center mt-3">
          <h5 className="mt-3 fw-bold text-primary">Do not forget</h5>
          <p className="w-100 text-center" style={{ color: "#001B36" }}>
            To closeout your check at the end of your meal
          </p>
        </div>
        <div className="mt-3">
          <Button
            variant="primary"
            size="lg"
            className={"form-control py-3 " + styles.paycheck_border_radius}
            onClick={() => history.push(`/customer/pay-check/${table_id}`)}
          >
            Pay check total ({amount}) -{" "}
            {total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Button>
        </div>
      </Container>
    </CustomerLayout>
  );
}

export default ConfirmOrder;
