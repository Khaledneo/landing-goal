import React from "react";
import Aux from "../../Hoc/Aux";

import "./plan.scss";


export const plan = (props) => {
    return (
        <Aux>
            <div className="plan">
                <img src={props.image}/>
            </div>
        </Aux>
    )
};