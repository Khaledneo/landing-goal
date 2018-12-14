import React from "react";
import Aux from "../../Hoc/Aux";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

import "./information.scss";

const numberMask = createNumberMask({
    prefix: "",
    integerLimit: 9,
    thousandsSeparatorSymbol: ","
});

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
                onChange={props.onChangeAge}
                value={props.userInformation.age}
                placeholder="25"/> years old and i want to invest for
                <select className="selectpicker" value={props.userInformation.reason} onChange={props.onChangeReason}>
                    {getDropDownOptions()}
                </select>
                <br/>
                In                
                <MaskedInput
                mask={[/\d/,/\d/]}
                type="text"
                name="years"
                value={props.userInformation.horizon}
                onChange={props.onChangeHorizon}
                placeholder="25"/>
                years, I would like to have saved $
                <MaskedInput
                className="long-text"
                mask={numberMask}
                type="text"
                name="amount"
                value={props.userInformation.amount}
                onChange={props.onChangeAmount}
                placeholder="300,000"/> towards my goal.
            </div>
        </Aux>
    )
};

export { information };