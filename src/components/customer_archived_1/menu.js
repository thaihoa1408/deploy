import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Tabs, Tab } from 'react-bootstrap';
import OrderDetails                     from './OrderDetails';
import UserHeader                       from '../../components/customer/UserHeader';
import ButtonFooter                     from '../../components/customer/ButtonFooter';
import { tupleExpression }              from '@babel/types';
import Product                          from '../../components/customer/Product';
import SampleCover                      from '../../assets/images/cover-sample.jpg';
import { useContext }                   from 'react';
import PowerContext                     from '../../context';

export default function Menu() {
    const { setDisplay }                        = useContext(PowerContext);
    const [details, setDetails]                 = useState(false);
    const [ordered, setOrdered]                 = useState(false);
    const [joiners, setJoiners]                 = useState([]);

    const setOrderedCallback    = () => { setDetails(false); setOrdered(true); }
    const handleClick           = () => ordered && setDisplay('customer/invoice');
    const productClick          = () => setDetails(true)

    return (
        <Container>
            <UserHeader tableNumber={localStorage.getItem("table")} customer={localStorage.getItem("customerName")} />
            {
                details ? <OrderDetails productName={"Salted Caramel Cold Brew"} price={"$5.00"} setOrderCallback={setOrderedCallback} />:
                    <div>
                        <div style={{padding: "25px 0"}}>
                            <img src={SampleCover} className="img-fluid w-100" />

                            <br />
                            <br />
                            <h4>{"Tiger Puff"}</h4>
                        </div>
                        <Row style={{border: "1px solid #C4C4C4"}} className="pt-3 pb-3">
                            <Col xs={12}>
                                <div className="input_container">
                                    <Form.Control id="input" style={{borderRadius: "8px", border: "1px solid #000000", color: "black", fontWeight: "600"}} type="text" placeholder="Search" />
                                </div>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                    <Tab eventKey="home" title="POPULAR">
                                        <div style={{textAlign:"left"}}>
                                            <p style={{fontWeight: "bold", color: "black !important", fontSize: "16px"}}>POPULAR</p>
                                        </div>
                                        <Product
                                            handleProductClick={productClick}
                                            productName={"Coffee"}
                                            description={"hot Coffee"}
                                            price={100.00}
                                        />
                                    </Tab>
                                    <Tab eventKey="profile" title="Specials">
                                        Test
                                    </Tab>
                                    <Tab eventKey="contact" title="Cheesy Burger">
                                        TEst3
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </div>
            }
            
            { ordered && !details ? <ButtonFooter action={handleClick} text={"Review and Place Order (5)"} value={"$5.00"} />:<></> }
        </Container>
    )
};