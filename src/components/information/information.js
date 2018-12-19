import React from "react";
import Aux from "../../Hoc/Aux";
import { numberMask } from "../../util/masks";
import MaskedInput from "react-text-mask";

import "./information.scss";


const optionsReasons = [{
        key: 3,
        text: "major purchases",
        value: 'major_purchase'
    },
    {
        key: 1,
        text: "education",
        value: 'education'
    },
    {
        key: 2,
        text: "retirement",
        value: 'retirement'
    },
    {
        key: 4,
        text: "safety net",
        value: 'safety_net'
    }
];

const getDropDownOptions = () => {
    return optionsReasons.map((reason)=>{
        return (
            <option key={reason.key} value={reason.value}>
                {reason.text}
            </option>
        )
    });
};

const information = (props) => {
    return (
        <Aux>
            <div className="information">
                I am           
               <MaskedInput
                mask={[/\d/,/\d/]}
                type="text"
                name="age"
                onChange={props.onValueChange}
                value={props.userInformation.age}
                placeholder="25"/> years old and i want to invest for
                <select className="selectpicker" name="reason" value={props.userInformation.reason} onChange={props.onValueChange}>
                    {getDropDownOptions()}
                </select>
                <br/>
                In                
                <MaskedInput
                mask={[/\d/,/\d/]}
                type="text"
                name="horizon"
                value={props.userInformation.horizon}
                onChange={props.onValueChange}
                placeholder="25"/>
                years, I would like to have saved $
                <MaskedInput
                className="long-text"
                mask={numberMask}
                type="text"
                name="amount"
                value={props.userInformation.amount}
                onChange={props.onValueChange}
                placeholder="300,000"/> towards my goal.
            </div>
        </Aux>
    )
};

export { information };