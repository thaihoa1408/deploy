import React from 'react';
import { Row, Col } from 'react-bootstrap';


const OrderSubTotal = (props) => {
    return (
        <div>
            <div className="details-container">
                <Row className="p-3">
                    <Col xs={9}>
                        <div className="left">
                            <p className="headerParagraph">Subtotal</p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="right">
                            <p className="detailParagraph">$5.00</p>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div className="left">
                            <p className="headerParagraph">Tax</p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="right">
                            <p className="detailParagraph">$5.75</p>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div className="left">
                            <p className="headerParagraph">Tip</p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="right">
                            <p className="detailParagraph">$50.75</p>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div className="left">
                            <p className="pMediumBold">Total</p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="right">
                            <p className="pMediumBold">$111.75</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OrderSubTotal;