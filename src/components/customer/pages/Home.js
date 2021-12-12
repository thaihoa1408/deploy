/**
 * MAIN INDEX FOR DINE IN PAGE
 * url: /customer/table-ordering/:table_id
 * This is the welcome page when the customer wants to dine in
 **/
import React, { useEffect, useState, useRef } from 'react';
// react-router-dom
import {
  BrowserRouter as Router,
  Link,
  useParams,
  useHistory,
} from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Form,
  FloatingLabel,
  Alert,
} from 'react-bootstrap';
// layout
import CustomerLayout from '../layout/CustomerLayout';
// qr scanner
import QrReader from 'react-qr-reader';
// sample data section
import Logo from '../../../assets/images/logo.png';
import RestaurantLogo from '../RestaurantLogo';
import CoverPhoto from '../../../assets/images/cover-photo.png';
import QRScanner from '../QrScanner';
import { useCustContext } from '../../../CustomerContext';
import { getMenu } from '../../../api';
/**
 * The Home view for customer dining in.  */
export default function Home(props) {
  const { table_id } = useParams();
  const { tableInfo, getTableInfo, error, createOrder, getBrands } =
    useCustContext();
  const history = useHistory();
  const [name, setName] = useState('');
  // activate the scanner
  const [scan, setScan] = useState(false);
  const qrReaderRef = useRef();

  const clickScan = () => {
    // click on the scanner
    setScan(true);
  };

  // when scan redirect them to the correct path.
  const onScan = (data) => {
    if (data) {
      window.location.href = data;
    }
  };
  // scan error
  const onError = (error) => {
    console.log(error);
  };

  // handle the onsubmit event
  const handleSubmit = async (e) => {
    console.log(name);
    e.preventDefault();
    // return false if the name is not available
    if (!name) {
      return false;
    }
    // try to create new order
    if (createOrder(table_id, { guess_name: name })) {
      getBrands(table_id, true);

      //history.push(`/customer/${tableInfo.type}/${table_id}`);
      history.push(`/customer/table-ordering/${table_id}/menu`);
    }
    // try {
    //   const res = await createOrder(table, {
    //     name: name,
    //   });
    //   console.log(res.data);
    //   history.push(`/customer/menu/${restaurant}/${table}`);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // on mount
  useEffect(() => {
    getTableInfo(table_id);
  }, []);

  // check error
  useEffect(() => {
    if (error) {
      // need a better error state. TBD
      // history.push('/customer/not-found')
    }
  }, [error]);

  return (
    <CustomerLayout
      // rgb or var values
      bgGradient={'var(--bs-white-rgb)'}
      // coverPhoto={data.location.background_photo}
      //coverPhoto={tableInfo.location.background_photo}
    >
      {/* Should be responsive if user is trying to use other devices instead  */}
      <Container fluid className='h-100'>
        <Row className='justify-content-center align-items-center h-100'>
          <Col md='8' xs='12' sm='10' lg='6'>
            {scan ? (
              <QRScanner scanResult={onScan} closeScanner={setScan}></QRScanner>
            ) : (
              <>
                {error && <Alert variant='danger'>{error}</Alert>}
                <div className='mt-2'>
                  <RestaurantLogo
                    orientation='vertical'
                    // name={data.location.name}
                    // logo={data.location.logo}
                    logo={tableInfo.location.logo?.public_url}
                    name={tableInfo.location.name}
                  />
                </div>
                <h1 className='text-center mt-5 mb-2 text-primary'>Welcome!</h1>
                <div className='mb-2'>
                  <div className='fs-5 fw-semibold text-center mb-0 text-secondary'>
                    {tableInfo.name}
                  </div>
                  {/* we are temporary removing this feature */}
                  {/* <div 
                          className="text-center">
                            <a 
                              href="#" 
                              onClick={clickScan} 
                              className="text-decoration-none fw-semibold"
                              style={{
                                color: 'var(--tp-gray-300)'
                              }}
                            >This is not my table</a>
                        </div> */}
                </div>
                <Form onSubmit={handleSubmit}>
                  <FloatingLabel className='mb-4' label='Your Name'>
                    <Form.Control
                      size='lg'
                      required
                      placeholder='Your Name'
                      onChange={(e) => setName(e.target.value)}
                      className='tp-rounded'
                    ></Form.Control>
                  </FloatingLabel>
                  <div className='d-grid gap-2'>
                    <Button
                      type='submit'
                      variant='primary'
                      size='lg'
                      className='fw-bold tp-rounded'
                    >
                      Start Ordering
                    </Button>
                  </div>
                </Form>
              </>
            )}
            <div
              className='text-center mt-4 fw-semibold'
              style={{
                color: 'var(--tp-gray-300)',
              }}
            >
              <p>
                Loyalty rewards awaits!{' '}
                <Link to='/customer/signin' className='text-decoration-none'>
                  Log in now
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </CustomerLayout>
  );
}
