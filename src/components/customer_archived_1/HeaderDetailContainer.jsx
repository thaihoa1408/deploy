import React from 'react';


const HeaderDetailContainer = (props) => {
    return (
        <div>
            <div className="details-container left smallLineHeight">
                <p className="pMediumBold">{props.header}</p>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default HeaderDetailContainer;