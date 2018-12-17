import React from "react";
import Aux from "../../Hoc/Aux";

import "./plan.scss";


export const plan = (props) => {
    const bakgroundImage = {
        backgroundImage: `url(${props.image})`
    };
    return (
        <Aux>
            <div className="plan">
                <div className="plan-image" style={bakgroundImage}></div>
            </div>
        </Aux>
    )
};