import React, { useEffect, useState } from "react";
import { Container, Button, Image } from "react-bootstrap";
import { deleteOrderItem, getOrderInfo } from "../../../api";
import { useCustContext } from "../../../CustomerContext";
import CheckoutoutSummaryOrderList from "../CheckoutSummaryOrderList";
import CustomerFooter from "../layout/CustomerFooter";
import NavbarCust from "../NavbarCust";
import TPLogo from "../../../assets/images/TigerPuffLogo.png";
import { useHistory, useParams } from "react-router-dom";

function OpenCheck(props) {
  const history = useHistory();
  const { table_id } = useParams();
  const { order } = useCustContext();
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
  const handleDeleteOrderItem = async (id) => {
    try {
      const res = await deleteOrderItem(id);
      console.log(res.data);
      getOrder();
    } catch (err) {
      console.log(err);
    }
  };
  const handleEditOrderItem = (order_item_id, menu_item_id) => {
    history.push(
      `/customer/table-ordering/${table_id}/menu/${menu_item_id}/${order_item_id}`
    );
  };
  useEffect(() => {
    getOrder();
  }, [order]);
  return (
    <div>
      <NavbarCust goBack={true} title={"Pay check"} />
      <CheckoutoutSummaryOrderList
        orders={orderSummary}
        handleDeleteOrderItem={handleDeleteOrderItem}
        handleEditOrderItem={handleEditOrderItem}
      />
      <CustomerFooter classPrefix="pt-3">
        <Container fluid className="px-3">
          <div className="d-flex mb-1 justify-content-between align-items-center">
            <div>Join</div>
            <div className="fw-bold">123.45</div>
          </div>
          <div className="d-flex mb-1 mt-4s justify-content-between align-items-center">
            <div>Maria</div>
            <div className="fw-bold">123.45</div>
          </div>
          <div className="d-flex mb-1 mt-4s justify-content-between align-items-center">
            <div>me</div>
            <div className="fw-bold">123.45</div>
          </div>
          <hr />
          <div className="h4 d-flex mb-3 justify-content-between align-items-center">
            <div>Total</div>
            <div>{total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          </div>
        </Container>
        <Container fluid>
          <div className="d-grid gap-2 mt-2">
            <Button
              variant="primary"
              className="tp-rounded fw-bold py-2"
              onClick={() => history.push(`/customer/pay-check/${table_id}`)}
            >
              Pay check Total ({amount}) -{" "}
              {total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Button>
          </div>
          <div className="text-center small d-flex align-items-center justify-content-center mt-2">
            Powered By
            <Image
              src={TPLogo}
              fluid
              className="pb-1"
              style={{
                height: "45px",
              }}
            />
          </div>
        </Container>
      </CustomerFooter>
    </div>
  );
}

export default OpenCheck;
