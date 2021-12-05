/**
 * CUSTOMER NAVBAR WHEN VIEWING AUTH 
 * This is a component for the customer view*/

import React, {useState} from "react";
import { Container, Col, Row, Form, Navbar, Image } from "react-bootstrap";
import {useHistory } from "react-router";
import {ReactComponent as TableSvg} from '../../assets/icons/table.svg';
import styles from './layout/Navbar.module.css'
import {Button} from 'react-bootstrap';
import {useCustContext} from '../../CustomerContext'
export default function NavbarCust(props){
  const history = useHistory()
  const {getTableNumber} = useCustContext()
  return (
    <Navbar
      expand="lg"
      className="bg-primary-3"
      >
      <Container
        fluid
        className="d-flex justiy-content-between align-items-center">
          {/* What is the purpose of this avatar */}
          {
          props.page == 'home' && 
            <>
              {/* we are showing the current table no and current group */}
              <div 
                className="d-flex align-items-center tp-rounded px-3 py-1"
                style={{
                  background: 'var(--tp-primary-4)'
                }}
              >
                <div>
                  <TableSvg/>
                </div>
                <div
                  className="ms-1 fw-bold"
                >
                  #{getTableNumber()}
                </div>
              </div>
              <div className="text-truncate d-flex align-items-center">
                <div className={styles.avatar}></div>
                <div 
                  className="ms-2 text-secondary lh-sm"
                >
                  <div className="small">Guest User</div>
                  <div
                    className="fw-bold"
                  >
                    Tiger Puff
                  </div>
                </div>
              </div>
            </>
          }
          {/* Go back will need to be accompanied with a title  */}
          {
            props.goBack && 
            <> 
              <div className="d-flex align-items-center text-secondary">
                <Button
                  className="rounded-pill border-0 bg-transparent"
                  onClick={() => history.goBack()}
                  >
                  <i className="bi bi-arrow-left-short fs-4 text-secondary"></i>
                </Button>
                {props.title && <h5 className="my-0">{props.title}</h5>}
              </div>
              
            </>
          }

      </Container> 
    </Navbar>
  )
}