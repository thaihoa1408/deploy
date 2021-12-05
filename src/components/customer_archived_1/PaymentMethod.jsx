import React from 'react';
import { Row, Col, Form} from 'react-bootstrap';

const PaymentMethod = () => {
    return (
        <div>
            <div className="details-container">
                <div className="left">
                    <p className="pMediumBold">PAYMENT METHOD</p>

                    <Form>
                        <div className="choices">
                            <Row>
                                <Col xs={12}>
                                    <div className="left">
                                        <Form.Check
                                            type="radio"
                                            label="Credit Card"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            className="detailParagraph"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="card-container details-container pMediumBold">
                            <Row>
                                <Col xs="6">
                                    <p>Card Number</p>
                                </Col>
                                <Col xs="3">
                                    <p>MM/YY</p>
                                </Col>
                                <Col xs="3">
                                    <p>CVC</p>
                                </Col>
                                {/* </div> */}
                            </Row>
                        </div>
                        <div className="choices">
                            <Row>
                                <Col xs={12}>
                                    <div className="left">
                                        <Form.Check
                                            type="radio"
                                            label="Direct"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            className="detailParagraph"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;