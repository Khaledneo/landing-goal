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

// TODO: Moved to config file
const customStyles = {
    container: (provider, state) => ({
        ...provider,
        cursor: "pointer",
        display: "inline-block",
        width: "200px",
        marginLeft: "10px"
    }),
    valueContainer: (provider) => ({
        ...provider,
        padding: 0,
        cursor: "pointer"
    }),
    control: (provider, state) => ({
        ...provider,
        borderColor: state.isSelected ? "#333333" : "#333333",
        border: "none",
        boxShadow: "0",
        borderBottom: "2px solid #333333",
        borderRadius: "0px"
    }),
    indicatorSeparator: () => ({
        display: "none"
    }),
    option: (provided,state) => ({
      ...provided,
      fontSize: "20px",
      cursor: "pointer",
      borderBottom: '1px solid black',
      backgroundColor: state.isSelected ? '#2179ee' : 'white',
      color:  state.isSelected ?  "white" : "#333333",
      padding: 10,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity,color: "#333333", transition };
    }
}

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
                    styles={customStyles}
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