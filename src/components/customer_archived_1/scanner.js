import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import QrReader from 'react-qr-reader';


const Scanner = (props) => {

    const [result, setResult] = useState("");

    const handleScan = (data) => data && setResult(data);


    const handleError = (error) => {
        console.log("error",error);
    }

    const previewStyle = {
        height: 240,
        width: "100%",
    }

    useEffect(() => {
        if(result !== "")
        {
            props.setTableNumber(result)
        }
    }, [result])

    return (
        <div>
            <Container>
                <QrReader
                    delay={300}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                />
            </Container>
        </div>
    )
}

export default Scanner;