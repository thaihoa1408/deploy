import React, { useState } from 'react'
import HeaderDetailContainer from "./HeaderDetailContainer";



const Tip = () => {
    const [tip, setTip] = useState();
    return (
        <div className="detail-container">
            <HeaderDetailContainer
                header={"TIP"}
             />

             <div className="tip-container">
                <div className="tip-item">
                    <p>10%</p>
                    <p>50</p>
                </div>
                <div className="tip-item">
                    <p>10%</p>
                    <p>50</p>
                </div>
                <div className="tip-item">
                    <p>10%</p>
                    <p>50</p>
                </div>
                <div className="tip-item">
                    <p>10%</p>
                    <p>50</p>
                </div>
             </div>

        </div>
    )
}

export default Tip;