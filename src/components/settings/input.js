import React from "react";
import Aux from "../../Hoc/Aux";
import "./input.scss";

const getInputs = (data) => {
    const inputs = [{
        key: "target",
        name: "Target saving",
        value: data.target
    },{
        key: "horizon",
        name: "Horizon",
        value: data.years
    },{
        key: "initial_deposit",
        name: "Initial deposit",
        value: "$0"
    },{
        key: "risk_score",
        name: "Risk Score",
        value: "7/10(Balanced)"
    }];
    return inputs;
};

const changeInput = (e) => {
    console.log(e.target.value);
};

const settingsInput = (props) => {
    let inputs = getInputs(props.data).map(input => {
        return (
            <div key={input.key} className=" settings-inputs col-6 col-md-3">
                <label>
                    { input.name }
                </label>
                <input disabled={ input.key === "risk_score" || input.key === "initial_deposit"  ? "disabled" : "" } value={ input.value } onChange={ changeInput }/>
            </div>
        )
    });
    return (
        <Aux>
                { inputs }                
        </Aux>
    );
};

export {
    settingsInput
};