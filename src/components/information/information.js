import React from "react";
import Aux from "../../Hoc/Aux";
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

const getDropDownOptions = () => {
    return optionsReasons.map((reason)=>{
        return (
            <option key={reason.key} value={reason.value}>
                {reason.text}
            </option>
        )
    });
};

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "20px",
      borderBottom: '1px solid black',
      color:  "#333333",
      padding: 10,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
        
      return { ...provided, opacity, transition };
    }
}

const information = (props) => {
    console.log(props.userInformation.reason);
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
                <Select
                className="react-select-container"
                classNamePrefix="react-select"
                styles={customStyles}
                value={props.userInformation.reason}
                onChange={props.onValueChange}
                options={optionsReasons}
                />
                {/* <select className="selectpicker" name="reason" value={props.userInformation.reason} onChange={props.onValueChange}>
                    {dropdownOptions}
                </select> */}
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