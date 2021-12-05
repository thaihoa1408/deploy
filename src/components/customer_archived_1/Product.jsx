import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Product = (props) => {
    return (
        <div>
            <div className="products">
                <div onClick={props.handleProductClick}>
                    <Row style={{border: "1px solid #000000"}} className="pt-3 pb-3 mb-3">
                        <Col xs={4} >
                            <div style={{background: "#C4C4C4", height: "100px"}}></div>
                        </Col>
                        <Col xs={8}>
                            <div style={{textAlign:"left"}}>
                                <h5 style={{fontWeight: "bold"}}>{props.productName}</h5>
                                <p>{props.description}</p>
                                <p>$ {props.price}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Product;