import React, {useEffect, useState} from "react";
// tigerpuff logo 
import TPLogo from '../../../assets/images/TigerPuffLogo.png'
import { Container, Row, Col, Card } from "react-bootstrap";
import './CustomerLayout.css';
export default function CustomerLayout(props){
  /**
   * pages that has gradient bg 
   * home, signup, signin 
  **/
  const renderStyleBgWhiteGradient = () => {
    if(props.bgGradient){
      return {
        // backgroundImage: `linear-gradient(to bottom, rgba(${props.bgGradient}, 0) 0%, rgba(${props.bgGradient}, 1) 55%)`
      }
    }
    return {}
  }
  return (
    <>
    {/* 
      Main Content 
      Full width minus off the footer
    */}
    {/* render the cover photo if required */}
    { 
      props.coverPhoto && 
      <div
      className="position-absolute h-100 w-100"
      style={{
        backgroundImage: `url(${props.coverPhoto})`,
        zIndex: '-1',
        // blur effect 
        filter: 'blur(1px)',
        backgroundSize: 'cover',
        backgroundPosition: '0% 0%',
        backgroundRepeat: 'no-repeat',
        // opacity: 0.45
      }}
      >
      </div>
    }
    <div 
      className="d-flex h-100 flex-column "
      style={renderStyleBgWhiteGradient()}
      >
      {props.children}
      {/* Powered By Tigerpuff */}
      <div
        className="mt-auto text-muted bottom-0 w-100 text-center"
        >
          <div className="d-flex py-2 justify-content-center align-items-center">
            Powered By 
            <img
              src={TPLogo}
              className="img-fluid pb-2"
              style={{
                height:'60px'
              }}
            />
          </div>
      </div> 
    </div>
     
    </>
  )
}