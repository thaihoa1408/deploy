import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../../components/customer/Header';
import HeaderDetailContainer from '../../../components/customer/HeaderDetailContainer';
import { Form, Input, Button} from 'antd';
import Footer from '../../../components/customer/Footer';


const Login = () => {
    return (
        <div>
            <Container className="main-container">
                <Header />

                <HeaderDetailContainer 
                    header={"Sign In"}
                    details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vel maecenas ut "}
                />
                <div>
                    <Form>
                        <Form.Item
                            className="pMediumSemi"
                            label="Email"
                            labelCol={{span:24}}
                            wrapperCol={{span:24}}
                            name="email"
                            rules={[{type: 'email'}]}
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

                        <Button type="primary" htmlType="submit" className="buttonDefault">
                            SIGN IN
                        </Button>
                    </Form>
                </div>

                <Footer />
            </Container>
        </div>
    )

}

export default Login;