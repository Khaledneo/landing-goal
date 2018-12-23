import React from "react";
import Aux from "../../Hoc/Aux";
import { dropDownStyle } from "../../constants/variables";
import { Dropdown} from "semantic-ui-react";
import { numberMask } from "../../util/masks";
import Select from 'react-select';
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

const onUpdateRiskScore = (value) => {
    console.log(value);
};

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
                    <div className="inline-text">
                    <Dropdown
                    inline
                    value={reason}
                    options={optionsReasons}
                    placeholder="Select Reason"
                    onChange={(e, { value }) => {
                        props.onReasonChange(value)
                    }}
                    />
                    </div>
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