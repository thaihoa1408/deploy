/**
 * SIGN UP PAGE FOR CUSTOMER 
 * url: /customer/sign-up 
 * If the customer wants to sign up to collect rewards, this is the signup page.
 * TBD: Do we need to display the restaurant's name for this */ 


import React, {useEffect, useState, useRef} from "react";
// react-router-dom
import {
  BrowserRouter as Router, 
  Link,
  useParams,
  useHistory
} from 'react-router-dom'

// layout 
import CustomerLayout from "../layout/CustomerLayout";

// bootstrap modules 
import {Container, Row, Col, Card, Button, Image, Form, FloatingLabel} from "react-bootstrap"
// resturant logo 
import Logo from '../../../assets/images/logo.png';
import CoverPhoto from '../../../assets/images/cover-photo.png';

// The main sign up view 
export default function SignUp() {

  // input fields 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // fake data
  const data = {
    name: 'Bo\'s Coffee House',
    logo: Logo,
    cover_photo: CoverPhoto
  }
  // handle form submit 
  const handleSubmit = (e) => {

  }


  return (
    <CustomerLayout
      bgGradient={'var(--bs-white-rgb)'}
      coverPhoto={data.cover_photo}
    >
      <Container
        className="h-100"
      >
        <Row
          className="d-flex justify-content-center h-100 align-items-center"
          >
            <Col md="6" xs="12" sm="10">
              {/* displaying the same information of the restaurant here  */}
              <div className="d-flex align-items-center">
                {/* <Image
                  src={data.logo}
                  fluid
                  style={{height:'65px'}}/>
                  <h5 className="ms-3">{data.name}</h5> */}
              </div>
              <h2 className="text-center text-secondary">SIGN UP</h2>
              <p className="text-center fw-semibold">
                We just need a few more details about you to get started.
              </p>
              <Form onSubmit={handleSubmit}>
                {/* Email */}
                <FloatingLabel 
                  className="mb-2"
                  label="Email"
                  >
                  <Form.Control
                    type="email"
                    required
                    placeholder="Email"
                    size="lg"
                    className="tp-rounded"
                    onChange={e =>setEmail(e.target.value)}
                    ></Form.Control>
                </FloatingLabel>
                {/* Password */}
                <FloatingLabel 
                  className="mb-2"
                  label="Password">
                  <Form.Control
                    type="password"
                    required
                    placeholder="Password"
                    size="lg"
                    className="tp-rounded"
                    onChange={e => setEmail(e.target.value)}></Form.Control>
                </FloatingLabel>
                {/* Re-enter Password */}
                <FloatingLabel 
                  className="mb-4"
                  label="Confirm Password">
                  <Form.Control
                      type="password"
                      required
                      placeholder="Confirm Password"
                      size="lg"
                      className="tp-rounded"
                      onChange={e => setConfirmPassword(e.target.value)}>
                  </Form.Control>
                </FloatingLabel>
                {/* Submit button */}
                <Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      size="lg"
                      className="tp-rounded fw-bold"
                      type="submit">
                        SIGN UP
                      </Button>
                  </div>
                </Form.Group>
              </Form>
            </Col>
        </Row>
      </Container>
    </CustomerLayout>
  )

}