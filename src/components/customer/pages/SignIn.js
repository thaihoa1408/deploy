/**
 * SIGN IN PAGE FOR CUSTOMER 
 * url: /customer/signin
 * This is the sign in page for the customer 
 * TBD: based on the figma design, we are retaining the restuarant's logo
 * and their name as the header
 **/ 

import React, {useEffect, useState, useRef} from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory
} from 'react-router-dom'


import { Container, Row, Col, Card, Button, Image, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import CustomerLayout from "../layout/CustomerLayout";
import Logo from '../../../assets/images/logo.png';
import RestaurantLogo from "../RestaurantLogo";
import CoverPhoto from '../../../assets/images/cover-photo.png';
/* main function to sign in
*/ 
export default function SignIn(){
  // define the variables 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [viewPassword, setViewPassword] = useState(false)
  // fake data
  const data = {
    name: 'Bo\'s Coffee House',
    logo: Logo,
    cover_photo: CoverPhoto
    
  }
  // view password 
  const clickToggleViewPassword = () => {
    setViewPassword(p => !p)
  }
  // handle submit 
  const handleSubmit = (e) => {
    e.preventDefault()
    // do some magic here
  }

  return (
    <CustomerLayout
      bgGradient={'var(--bs-white-rgb)'}
      coverPhoto={data.cover_photo}
    >
      <Container fluid className="mt-5 h-100">
        <Row className="justify-content-center h-100 align-items-center">
          <Col md="8" xs="12" sm="10" lg="6">
            {/* Do we need to add the Resturant logo? */}
            {/* <RestaurantLogo
              orientation="horizontal"
              logo={data.logo}
              name={data.name}></RestaurantLogo> */}
            <h2 className="mt-5 text-secondary text-center">
              SIGN IN
            </h2>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel 
                className="mb-2"
                label="Email"
                >
                <Form.Control
                  size="lg"
                  required
                  placeholder="Email"
                  type="email"
                  className="tp-rounded"
                  onChange={e => setEmail(e.target.value)}>
                </Form.Control>
              </FloatingLabel>
              <FloatingLabel 
                className="mb-2"
                label="Password">
                <Form.Control
                  type={! viewPassword ? 'password' : 'text'}
                  size="lg"
                  required
                  placeholder="Password"
                  className="tp-rounded"
                  onChange={e => setPassword(e.target.value)}></Form.Control>
                  {/* view password icon */}
                  <button
                    className="border-0 bg-transparent position-absolute"
                    style={{
                      top: '1rem',
                      right: '0.752rem'
                    }}
                    onClick={clickToggleViewPassword}
                  >
                    <i
                      className="bi bi-eye"
                    />
                  </button>
              </FloatingLabel>
              {/* submit button */}
              <Form.Group className="mt-4">
                <div className="d-grid gap-2">
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="fw-bold tp-rounded"  
                  >
                      Start Ordering
                    </Button>
                </div>
              </Form.Group>
            </Form>
            <Row className="justify-content-between mt-3">
              <Col>
                <Link to="/customer/signup" 
                  className="fw-bold"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--tp-gray-300)'
                  }}>Sign Up</Link>
              </Col>
              <Col className="text-end">
                <Link to="" 
                  className="fw-bold"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--tp-gray-300)'
                  }}>Forgot Password</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </CustomerLayout>
  )
}
