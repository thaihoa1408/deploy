import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../../components/customer/Header';
import Alert from '../../../components/customer/Alert';
import ButtonComponent from '../../../components/customer/Button';
import HeaderDetailContainer from '../../../components/customer/HeaderDetailContainer';
import ViewOrder from '../../../components/customer/ViewOrder';
import OrderSubTotal from '../../../components/customer/OrderSubtotal';
import Redeem from '../../../components/customer/Redeem';
import { useHistory } from 'react-router';

const Recipe = () => {

    let history = useHistory();
    const signUp = () => {
        history.push("/customer/signup");
    }

    return (
        <div>
            <Container className="receipt-container">
                <Header />

                <Alert
                    title={"Payment Succesfull"}
                    details={"Sign up to redeem this points and enjoy many perks for loyalty program"}
                 />

                 <ButtonComponent Text="ORDER MORE" />

                 <div>
                     <HeaderDetailContainer
                        header={"Receipt"}
                      />
                      <ViewOrder />
                 </div>

                <div className="details-container">
                    <OrderSubTotal />
                </div>

                 <div className="details-container">
                    <Alert
                        title={"You Gained 200 points"}
                        details={"Sign up to redeem this points and enjoy many perks for loyalty program"}
                    />
                 </div>
                 <div className="details-container">
                    <ButtonComponent
                        Action={signUp}
                        Text={"SIGN UP FOR LOYALTY PROGRAM"}
                    />
                 </div>
                 <div className="details-container">
                     <Redeem />
                 </div>
            </Container>
        </div>
    )
}

export default Recipe;
