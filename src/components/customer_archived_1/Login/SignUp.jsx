import React from 'react';
import { Form, Input, Button} from 'antd';
import { Container } from 'react-bootstrap';
import Header from '../../../components/customer/Header';
import HeaderDetailContainer from '../../../components/customer/HeaderDetailContainer';
import Footer from '../../../components/customer/Footer';
import { useState } from 'react';


const SignUp = () => {

    const [isEmail, setIsEmail] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("");

    const numberOnChange = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;

        if((!isNaN(value) && reg.test(value)) || value === '' || value === '-')
        {
            setPhoneNumber(value)
        }
    }

    const onFinish = (values) => {
        console.log("Success:", values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Failed", errorInfo)
    }


    return (
        <div>
            <Container className="main-container">
                <Header />

                <HeaderDetailContainer
                    header={"Sign up Account"}
                    details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vel maecenas ut "}
                 />

                <div>
                    <Form
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        {
                            isEmail ? 
                            <div>
                                <Form.Item
                                    className="pMediumSemi"
                                    label="Email"
                                    labelCol={{span:24}}
                                    wrapperCol={{span:24}}
                                    name="email"
                                    rules={[{type: 'email', message: "The input is not valid E-mail!"}]}
                                >
                                    <Input
                                        className="defaultInput loginInput"
                                    />
                                </Form.Item>
                                <a href="javascript:void(0)" onClick={() => {setIsEmail(false)}} className="loginLink">Use Mobile Number Instead</a>
                            </div> : 
                             <div>
                                <Form.Item
                                    className="pMediumSemi"
                                    label="Mobile Number"
                                    labelCol={{span:24}}
                                    wrapperCol={{span:24}}
                                    name="phoneNumber"
                                >
                                    <Input
                                        value={phoneNumber}
                                        onChange={numberOnChange}
                                        className="defaultInput loginInput"
                                    />
                                </Form.Item>
                                <a href="javascript:void(0)" onClick={() => {setIsEmail(true)}} className="loginLink">Use Email Address Instead</a>
                            </div>
                        }

                        <div className="details-container">
                            <Button type="primary" htmlType="submit" className="buttonDefault">
                                SEND OTP
                            </Button>
                        </div>
                    </Form>
                </div>

                <Footer />
            </Container>
        </div>
    )
}


export default SignUp;