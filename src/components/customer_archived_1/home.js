import React, {useEffect, useState} from 'react';
import Logo                         from '../../assets/images/logo.png';
import { Container, Row, Col }      from 'react-bootstrap';
import {Form, Input, Typography}    from 'antd';
import ButtonComponent              from '../../components/customer/Button';
import LogoHeader                   from '../../components/customer/LogoHeader';
import Footer                       from '../../components/customer/Footer';
import { useHistory }               from 'react-router';
import Scanner                      from './scanner';
import Message                      from './message';
import Swal                         from 'sweetalert2';
import './customer.css';

import { useContext } from 'react';
import PowerContext from '../../context';

const { Text, Link} = Typography;

export default function Home() {

    const { setDisplay } = useContext(PowerContext);

    const [firstname, setFirstName]     = useState('');
    const [loading, setLoading]         = useState(false);
    const [scan, setScan]               = useState(false);
    const [tableValue, setTable]        = useState("12");
    const [isGroup, setIsGroup]         = useState(true);
    const [error, setError]             = useState();
    const history                       = useHistory();

    const tableStatic = "2";
    
    const handleClick = () => {
        setLoading(true);
        if (firstname === "") {
            setLoading(false);
            Swal.fire({
                title: "Info",
                icon: "info",
                text: "Name is blank, cannot proceed",
                showConfirmButton: true,
                confirmButtonColor: '#000000',
                confirmButtonText: "OK"
            })
        } else {
            localStorage.setItem("customerName", firstname)
            localStorage.setItem("table", tableValue);
            setLoading(false);

            // Change component to menu
            setDisplay('customer/menu');
        }
    }

    const userPartnerChecker = () => {
        Swal.fire({
            title: "Are you with",
            text: "Maria Hill",
            showConfirmButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#000000",
            showCancelButton: true,
            cancelButtonText: "No",
            cancelButtonColor: "#000000"
        }).then((result) => {
            if(result.isConfirmed) {
                history.push("/menu")
            }
        })
    }

    useEffect(() => {
    }, [firstname])

    useEffect(() => {
        setScan(false)
    }, [tableValue])

    return (
        <>
            <Container className="pt-5"  style={{textAlign: "center"}}>
                <Row className=  "pb-4">
                    <Col>
                        <LogoHeader
                            logo={Logo}
                            restaurantTitle={"Bo’s Coffee House"}
                        />
                    </Col>
                </Row>
                {
                    error ? <Message user={"John Doe"} /> :
                    <div>
                        <Row className="pb-4">
                            <Col>
                                <h4>Welcome!</h4>
                                <h4>Whats your name?</h4>
                                <Text type="secondary">This helps us deliver your order to you </Text>
                            </Col>
                        </Row>
                        <Row className="pb-4">
                            <Col>
                                <p className="inputLabel">First Name</p>
                                <Form.Item
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="defaultInput"
                                    name="firstname"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className="pb-4">
                            <Col>
                                {
                                    scan ? <Scanner
                                        tableNumber={tableValue}
                                        setTableNumber={setTable}
                                    /> :
                                    <div>
                                        <h4>Dining at Table #{tableValue}</h4>
                                        <Link className="defaultlink" onClick={() => {setScan(true)}} href="javascript:void(0)">
                                            This is not my table
                                        </Link>
                                    </div>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {
                                    scan ? <></> : 
                                    <div className="pb-4">
                                        <ButtonComponent 
                                            Status={loading}
                                            Action={handleClick} 
                                            Text={"Start Ordering"} 
                                        />
                                    </div>
                                }
                            </Col>
                        </Row>
                        <div className="details-container">
                            <a href="/login" className="loginLink">Have account? Login</a>
                        </div>
                    </div>
                }
                <Footer />
            </Container>
        </>
    )
};