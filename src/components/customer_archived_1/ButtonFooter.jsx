import React from 'react';
import { Col, Row } from 'react-bootstrap';


const FooterBottom = (props) => {

    return (
        <div>
            <div className="footerBottomButton" onClick={props.action}>
                <Row>
                    <Col xs={2}>
                        <div className="icon">
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <p className="pMediumBoldWhite">{props.text}</p>
                    </Col>
                    <Col xs={2}>
                        <p className="pMediumWhite">{props.value}</p>
                    </Col>
                </Row>
                
            </div>
        </div>
    )
}

export default FooterBottom;