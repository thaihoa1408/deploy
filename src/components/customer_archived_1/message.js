import React from 'react';
import { Container } from 'react-bootstrap';


const Message = (props) => {
    return (
        <div>
            <Container>
                <div style={{lineHeight: "20px"}}>
                    <h4>Sorry</h4>
                    <h5>This table is taken by:</h5>
                    <h3>{props.user}</h3>
                </div>
            </Container>
        </div>
    )
}

export default Message;