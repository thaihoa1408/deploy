import React from 'react';
import { Row } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';

const Header = (props) => {
    return (
        <div>
             <Row>
                <div className="header left d-flex">
                    <img className="logoHeaderSmall" src={Logo} alt="" />
                    <p className="pMediumBold">Bo’s Coffee House</p>
                </div>
            </Row>
        </div>
    )
}


export default Header;