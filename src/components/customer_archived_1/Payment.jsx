import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../../components/customer/Header';
import HeaderDetailContainer from '../../../components/customer/HeaderDetailContainer';
import PaymentMethod from '../../../components/customer/PaymentMethod';
import Tip from '../../../components/customer/Tip';
import ViewOpenCheck from '../../../components/customer/ViewOpenCheck';
import SubTotalContainer from '../../../components/customer/SubTotalContainer';
import Footer from '../../../components/customer/Footer';
import { useHistory } from 'react-router';


const Payment = () => {

    const history = useHistory();

    const pay = () => {
        history.push("/customer/receipt");
    }

    return (
        <div>
            <Container style={{paddingTop: "60px", paddingBottom: "60px"}}>
                <Header />

                <HeaderDetailContainer
                    header={"Pay check"}
                    details={"Bo’s Coffee and Tea House"}
                 />

                 <ViewOpenCheck />

                 <PaymentMethod />

                 <Tip />

                 <SubTotalContainer
                    pay={pay}
                  />


                 <Footer />

            </Container>
        </div>
    )
}

export default Payment;