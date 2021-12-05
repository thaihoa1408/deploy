/**
 * Search UI on the menu section
 * The search UI needs to accomodate for multi brands. so we need a dropdown here if
 * type == foodcourt
 **/
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
export default function MenuSearch(props) {
  // pass the search key to the parent to handle the searches
  const [searchKey, setSearchKey] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // if searchKey is empty, prevent execution
    if (!searchKey) {
      return false;
    }
    props.setSearch(searchKey);
  };

  return props.type && props.type == 'food_center' ? (
    <Row className='mt-3 position-relative g-2'>
      <Col xs='10'>
        <Form>
          <Form.Select className='tp-rounded'>
            <option value=''>Kiosk #1</option>
            <option value=''>Kiosk #2</option>
            <option value=''>Kiosk #3</option>
          </Form.Select>
        </Form>
      </Col>
      <Col xs='2'>
        <Button className='rounded-circle' variant='white'>
          <i className='bi bi-search'></i>
        </Button>
      </Col>
    </Row>
  ) : (
    <div>
      <Form className='mt-3 position-relative' onSubmit={handleSubmit}>
        <Form.Control
          className='rounded-pill'
          id='myInput'
          onKeyUp={() => props.searchFunction('myInput')}
          placeholder='Search For Food'
        />
        <i
          className='bi bi-search position-absolute'
          style={{
            right: '0.75rem',
            top: '0.375rem',
          }}
        />
      </Form>
    </div>
  );
}
