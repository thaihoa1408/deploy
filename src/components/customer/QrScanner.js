/**
 * The main QR scanner to change table 
 * NOTE: the current package used for this scanner to work has quite a bad support for ios and android
 * Need to update to another alternative: TODO LATER */

import QrReader from "react-qr-reader";
import { Button } from "react-bootstrap";
export default function QRScanner(props){
  
  const onScan = (data) => {
    if(data){
      // should have a more cleaner solution for this 
      props.scanResult(data)
    }
  }
  const onError = (error) => {
    console.log(error)
  }
  
  const closeScanner = () => {
    props.closeScanner(false)
  }

  return ( 
    <>
      <h4 className="text-center">Scan the QR Code on your table</h4>
      <QrReader
        onScan={onScan}
        onError={onError}
        facingMode={'environment'}
        ></QrReader>
      <div
        className="d-grid gap-2 mt-2">
          <Button 
            variant="light"
            onClick={closeScanner}>
              Cancel
          </Button>
        </div>
    </>
  )

}