import React from 'react';
export default function LogoHeader(props) {
    return(
        <div>
            <img className="logo" src={props.logo} alt="" />
            <h4>{props.restaurantTitle}</h4>
        </div>
    )
};