import React from 'react'
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';


const ViewOrder = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div>
            <div className="details-container open-check-container">
                <div className="accordion ">
                    <div className="accordion-item remove-border">
                        <div className="accordion-title open-check-container-color">
                            <Row>
                                <Col xs={9}>
                                    <div className="left">
                                        <p className="headerParagraph">Your Order (1)</p>
                                        <p>$52.72</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className="right">
                                        <p className="detailParagraph" onClick={() => setIsActive(!isActive)}>{isActive ? 'v' : '>'}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {isActive && 
                            <div className="accordion-content open-check-container-color">
                                <div>
                                    <Row>
                                        <Col>
                                            <div className="left">
                                                <p className="pMediumBold">2X Salted Caramel Brew</p>
                                            </div>
                                        </Col>
                                        <Col xs="4">
                                            <div className="right">
                                                <p className="pMediumBold">$100.00</p>
                                            </div>
                                        </Col>
                                        <ul className="left list mediumLineHeight">
                                            <li> + Grace</li>
                                            <li> + Vannila Syruo</li>
                                        </ul>
                                    </Row>
                                </div>
                            </div>
                        }
                        
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ViewOrder;