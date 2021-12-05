import React from 'react'
import {Button} from 'antd';


const ButtonComponent = (props) => {
    return (
        <Button 
            loading={props.Status} 
            onClick={props.Action} 
            className="buttonDefault">
                {props.Text}
        </Button>
    )
}

export default ButtonComponent;