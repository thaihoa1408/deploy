import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../../components/customer/Header';
import HeaderDetailContainer from '../../../components/customer/HeaderDetailContainer';
import { Form, Input, Button} from 'antd';
import Footer from '../../../components/customer/Footer';

const Register = () => {
    return (
        <div>
            <Container className="main-container">
                <Header />

                <HeaderDetailContainer
                    header="Finalized Account"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vel maecenas ut"
                 />

                <div className="detail-container">
                    <Form>
                        <Form.Item
                            className="pMediumSemi"
                            label="Name"
                            labelCol={{span:24}}
                            wrapperCol={{span:24}}
                            name="name"
                        >
                            <Input
                                className="defaultInput loginInput"
                            />
                        </Form.Item>

                        <Form.Item
                            labelCol={{span:24}}
                            wrapperCol={{span:24}}
                            label="Password"
                            name="password"
                        >
                            <Input.Password className="defaultInput loginInput" />
                        </Form.Item>

                        <Form.Item
                            labelCol={{span:24}}
                            wrapperCol={{span:24}}
                            label="Confirm Password"
                            name="confirmPassword"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    message: "Please confirm your password!"
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if(!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password className="defaultInput loginInput" />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" className="buttonDefault">
                            Create Account
                        </Button>
                    </Form>
                </div>
                <Footer />
            </Container>
        </div>
    )
}


export default Register;