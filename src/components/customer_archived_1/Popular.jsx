import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Popular = () => {
    return (
            <div className="item flex-item">
                <div>
                    <Row>
                        <Col xs="4">
                            <div className="popular-image">

                            </div>
                        </Col>
                        <Col xs="8">
                            <div style={{textAlign:"left", width: "150px", lineHeight: "1.2"}}>
                                <p style={{fontWeight: "bold", padding: "0"}}>Mini Brewed Coffee Traveler</p>
                                <p>A portable carrier that</p>
                                <p >$120</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
    )
}


export default Popular;