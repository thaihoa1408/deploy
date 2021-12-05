import React from 'react'
import { Container } from 'react-bootstrap'
import { Form, Input, Button} from 'antd';
import Header from '../../../components/customer/Header'
import HeaderDetailContainer from '../../../components/customer/HeaderDetailContainer'
import Footer from '../../../components/customer/Footer';


const Verify = () => {
    return (
        <div>
            <Container className="main-container">
                <Header />

                <HeaderDetailContainer
                    header={"Enter Code"}
                    details={"Enter OTP code for john@email.com"}
                 />

                 <div className="details-container">
                    <div className="height-100 d-flex justify-content-center align-items-center">
                        <div className="position-relative">
                            <div className="p-2 text-center">
                                <Form>
                                    <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2"> 
                                        <Form.Item
                                            className="pLargeBold"
                                            name="otp-1"
                                        >
                                            <Input
                                                className="defaultInput text-center pLargeBold otp-container"
                                                maxLength={1}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            className="pLargeBold"
                                            name="otp-2"
                                        >
                                            <Input
                                                className="defaultInput text-center pLargeBold otp-container"
                                                maxLength={1}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            className="pLargeBold"
                                            name="otp-3"
                                        >
                                            <Input
                                                className="defaultInput text-center pLargeBold otp-container"
                                                maxLength={1}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            className="pLargeBold"
                                            name="otp-4"
                                        >
                                            <Input
                                                className="defaultInput text-center pLargeBold otp-container"
                                                maxLength={1}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            className="pLargeBold"
                                            name="otp-5"
                                        >
                                            <Input
                                                className="defaultInput text-center pLargeBold otp-container"
                                                maxLength={1}
                                            />
                                        </Form.Item>
                                    </div>
                                    <Button type="primary" htmlType="submit" className="buttonDefault">
                                        Verify & Proceed
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                 </div>
                 <Footer />
            </Container>
        </div>
    )
}


export default Verify;