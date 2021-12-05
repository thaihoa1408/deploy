import React, { useEffect } from "react"
import { Image } from "react-bootstrap"


export default function RestaurantLogo(props){

  return (
    props.orientation == 'vertical' ? 
    <>
      {/* display the restaurant image and logo vertically */}
      <Image
        src={props.logo}
        fluid 
        className="mx-auto d-block"
        rounded
        style={{height: (props.height) ? props.height : '55px'}}
        />
      <div
        className="text-center mb-0 mt-2"
        style={{color: 'var(--tp-gray-300)'}}
        >
          {props.name}
      </div>
      
    </>
    :
    <>
      <div
        className="d-flex align-items-center"
        >
          <Image
            src={props.logo}
            fluid
            style={{height: (props.height) ? props.height : '55px'}}
            rounded/>
            <div
              className="text-center ms-2"
              style={{color: 'var(--tp-gray-300)'}}
              >
                {props.name}
            </div>
      </div>
    </>
  )
}