import React from 'react';

const Alert = (props) => {
    return (
        <div>
            <div className="alert-container mediumLineHeight backgroundAlert">
                <p className="pLargeBold"> {props.title}</p>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default Alert;