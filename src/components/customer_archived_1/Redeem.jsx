import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HeaderDetailContainer from './HeaderDetailContainer';


const Redeem = () => {
    return (
        <div>
            <HeaderDetailContainer header={"Redeem"}/>
            <Row style={{border: "1px solid #000000"}} className="pt-3 pb-3 mb-3">
                <Col xs={4} >
                    <div style={{background: "#C4C4C4", height: "100px"}}></div>
                </Col>
                <Col xs={8}>
                    <div style={{textAlign:"left"}}>
                        <h5 style={{fontWeight: "bold"}}>Mini Brewed Coffee Traveler</h5>
                        <p>150 points</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default Redeem;