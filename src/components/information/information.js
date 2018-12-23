import React from "react";
import Aux from "../../Hoc/Aux";
import { dropDownStyle } from "../../constants/variables";
import { numberMask } from "../../util/masks";
import Select from 'react-select';
import MaskedInput from "react-text-mask";

import "./information.scss";


const optionsReasons = [{
        key: 3,
        label: "major purchases",
        value: 'major_purchase'
    },
    {
        key: 1,
        label: "education",
        value: 'education'
    },
    {
        key: 2,
        label: "retirement",
        value: 'retirement'
    },
    {
        key: 4,
        label: "safety net",
        value: 'safety_net'
    }
];

const information = (props) => {
    const { reason } = props.userInformation;
    return (
        <Aux>
            <div className="information">
                <div className="line">
                I am    
                <MaskedInput
                    mask={[/\d/,/\d/]}
                    type="text"
                    name="age"
                    onChange={props.onValueChange}
                    value={props.userInformation.age}
                    placeholder="25"/> 
                    years old and i want to invest for
                    <Select
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="reason"
                    styles={dropDownStyle}
                    isSearchable={false}
                    defaultValue={reason}
                    value={reason}
                    onChange={props.onReasonChange}
                    options={optionsReasons}
                    />
                </div>
                <div className="line"> 
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
            </div>
        </Aux>
    )
};

export { information };