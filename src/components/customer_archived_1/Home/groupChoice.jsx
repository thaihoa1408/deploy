import { Button } from 'bootstrap';
import React from 'react'
import { Row } from 'react-bootstrap';



const GroupChoice = (props) => {
    return (
        <div>
            <Row className="pb-4">
                <Col>
                    <h4>Welcome!</h4>
                    <h4>Are you dining with ?</h4>
                    
                    <h4 className="pb-3">John Doe</h4>
                </Col>

                <Button variant="primary">Yes, this is my group</Button>
                <Button variant="light">No this isnt my group</Button>
            </Row>
        </div>
    )
}


export default GroupChoice;