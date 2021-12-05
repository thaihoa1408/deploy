import React from 'react';
import { Container, Row, Col }  from 'react-bootstrap';
import ButtonComponent          from '../../components/customer/Button';
import Footer                   from '../../components/customer/Footer';
import Header                   from '../../components/customer/Header';
import Swal                     from 'sweetalert2';
import Popular                  from '../../components/customer/Popular';
import { useContext } from 'react';
import PowerContext from '../../context';



export default function Invoice() {
    const { setDisplay } = useContext(PowerContext);
    const placeOrder = () => setDisplay("customer/confirmation");
    
    return (
        <div>
            <Container>
                <div style={{marginTop: "80px"}}>

                    <Header />

                    <div className="details-container">
                        <Row style={{background: "#eeeeee", paddingTop: "15px"}}>
                            <Col>
                                <div className="left">
                                    <p>Do you want to order more?</p>
                                </div>
                            </Col>
                            <Col xs="4">
                                <div className="right">
                                    <a href="javascript:void(0)" onClick={() => setDisplay('customer/menu')}>Back to Menu</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="details-container left">
                        <p className="headerParagraph">Your Order</p>
                        <p>Bo’s Coffee and Tea House</p>
                    </div>
                    <div className="details-container">
                        <div>
                            <Row>
                                <Col>
                                    <div className="left">
                                        <p className="fw-bold">1. Salted Caramel Brew</p>
                                    </div>
                                </Col>
                                <Col xs="4">
                                    <div className="right">
                                        <p className="pMediumSem">$100.00</p>
                                    </div>
                                </Col>
                                <ul className="left list">
                                    <li> + Grace</li>
                                    <li> + Vannila Syruo</li>
                                </ul>
                                <div className="d-flex">
                                    <p className="pMediumBold" style={{marginRight:"10px", marginLeft: "10px"}}>Edit</p>
                                    <p className="pMediumBold">Delete</p>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <Row className="borderTop">
                        <div className="details-container left">
                            <p className="pMediumBold">Popular with your order</p>
                        </div>

                        <div className="popular-container left flex">
                            <Popular />
                            <Popular />
                        </div>
                    </Row>
                </div>
                <div className="container-details">
                    <Row className="borderAll">
                        <div>
                            <p className="pMediumBold">Open Check & Pay Later</p>
                            <div className="left">
                                <p>By placing an order, you agree to Tigerpuff <b>Terms&Services</b> and acknowledge that you have read our <b>Privacy Statement</b></p>
                            </div>
                            <ButtonComponent
                                Text="Place Order and Open Check"
                                Action={placeOrder}
                             />
                        </div>
                    </Row>
                </div>
                <Footer />
            </Container>
        </div>
    )
};