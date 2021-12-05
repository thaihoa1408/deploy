import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonComponent from './Button';
import Footer from './Footer';
import Header from './Header';
import HeaderDetailContainer from './HeaderDetailContainer';
import ViewOpenCheck from './ViewOpenCheck';
import { useHistory } from 'react-router';


const Confirmation = () => {

    const history = useHistory();

    const orderMore = () => {
        history.push("/customer/menu");
    }

    const payCheck = () => {
        history.push("/customer/payment");
    }

    return (
        <div>
            <Container className="customer-container">
                <Header></Header>

                <div className="details-container left pt-5">
                    <p className="pLargeBold">Thank you</p>
                    <p>Your order has been submitted, your server will take out the rest</p>
                </div>

                <ButtonComponent
                    Action={orderMore}
                    Text={"Order More"}
                />

                <ViewOpenCheck />

                <HeaderDetailContainer
                    header={"Do not forget"}
                    details={"To closeout your check at the end of your meal."}
                 />

                <div className="details-container pay-check-container">
                    <div onClick={payCheck}>
                        <Row>
                            <Col xs={7}>
                                <div className="left">
                                    <p>Pay Check Total (2)</p>
                                </div>
                            </Col>
                            <Col xs={5}>
                                <div className="right">
                                    <p className="pMediumSemi">Total $57.25</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Footer />

            </Container>
        </div>
    )
    
}

export default Confirmation;