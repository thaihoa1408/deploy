import React from 'react';
import {Typography} from 'antd';

const { Text } = Typography;

const Footer = () => {
    return (
        <div>
            <div className="footerClass">
                <Text type="secondary">Powered by Tigerpuff</Text>
            </div>
        </div>
    )
}

export default Footer;