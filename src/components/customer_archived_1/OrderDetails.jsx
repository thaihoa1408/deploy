import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {Form as FormAnt, Input} from 'antd';
import FooterBottom from './ButtonFooter';

const OrderDetails = (props) => {

    const [quantity, setQuantity] = useState(0);

    const add = () =>       setQuantity(quantity + 1);
    const deduct = () =>    (quantity !== 0) && setQuantity(quantity - 1);

    return (
        <div>
            <div className="details-container">
                <Row>
                    <Col xs={9}>
                        <div className="left">
                            <p className="headerParagraph">Salted Caramel Cold Brew</p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="right">
                            <p className="detailParagraph">$5.00</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="left pb-3">
                            <p className="smallDetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate rhoncus, ut scelerisque aliquam elementum euismod ornare.</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="variables-container">
                <div className="left">
                    <p className="headerParagraph">Choose your size</p>
                </div>
                <Form>
                    <div className="choices">
                        <Row>
                            <Col xs={9}>
                                <div className="left">
                                    <Form.Check
                                        type="radio"
                                        label="Small"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        className="detailParagraph"
                                    />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="right">
                                    <p className="detailParagraph">$0.00</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="choices">
                        <Row>
                            <Col xs={9}>
                                <div className="left">
                                    <Form.Check
                                        type="radio"
                                        label="Medium"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        className="detailParagraph"
                                    />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="right">
                                    <p className="detailParagraph">$1.00</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
            <div className="addOns-container">
                <div className="left">
                    <p className="headerParagraph">Addons</p>
                </div>
                <Form>
                    <div className="choices">
                        <Row>
                            <Col xs={9}>
                                <div className="left">
                                    <Form.Check
                                        type="checkbox"
                                        label="Wrapper"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        className="detailParagraph"
                                    />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="right">
                                    <p className="detailParagraph">$0.00</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="choices">
                        <Row>
                            <Col xs={9}>
                                <div className="left">
                                    <Form.Check
                                        type="checkbox"
                                        label="Candy"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        className="detailParagraph"
                                    />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="right">
                                    <p className="detailParagraph">$1.00</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
            <div className="details-container d-flex justify-content-center">
                <Button onClick={deduct} className="buttonSingle" variant="light"><h1 style={{fontWeight: 'bold'}}>--</h1></Button> 
                <h1 className="font-weight-bold">{quantity}</h1> 
                <Button onClick={add} className="buttonSingle" variant="light"><h1 style={{fontWeight: 'bold'}}>+</h1></Button>
            </div>
            <div className="details-container pb-5">
                <div className="left">
                    <p className="headerParagraph">Special Instructions</p>
                   
                </div>
                <FormAnt.Item
                    className="defaultInput"
                    name="special"
                >
                    <Input placeholder="E.g. Less Price" />
                </FormAnt.Item>
            </div>
            <FooterBottom
                action={props.setOrderCallback}
                text={"Add to Order"}
                value={"$5.00"}
             />
        </div>
    )
}



export default OrderDetails;