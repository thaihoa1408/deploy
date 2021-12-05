import React from 'react';
import { Col, Row } from 'react-bootstrap';


const UserHeader = (props) => {
    return (
        <div>
            <div>
                <Row>
                    <Col>
                        <div className="left">
                            <p className="fw-bold">Dining at Table {props.tableNumber}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="right">
                            <p className="fw-bold">{props.customer} <i className="fas fa-users"></i></p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default UserHeader;