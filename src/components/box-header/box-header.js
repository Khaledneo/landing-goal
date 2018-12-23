import React from "react";
import Aux from "../../Hoc/Aux";
import "./box-header.scss";

const boxHeader = (props) => {
    return (
        <Aux>
            <div className="box-header">
                <h1>Goal Calculator</h1>
                <span>Complete the below based on your goals</span>
            </div>
        </Aux>
        
    )
};

export { boxHeader };