import React from "react";
import Aux from "../../Hoc/Aux";
import MaskedInput from "react-text-mask";
import {  dollarNumberMask,initialDepositNumberMask } from "../../util/masks";

import "./input.scss";


const settingsInput = (props) => {
    return (
        <Aux>
            <div className=" settings-inputs col-6 col-md-3">
                <label>
                    Target saving
                </label>
                <MaskedInput
                value={props.data.amount}
                mask={dollarNumberMask}
                onKeyPress={props.onChange}
                onBlur={props.onBlur}
                onChange={props.onChange}
                type="text"
                name="amount"
                />
            </div>
            <div className=" settings-inputs col-6 col-md-3">
                <label>
                    Horizon
                </label>
                <MaskedInput
                mask={[/\d/,/\d/,' ','y','e','a','r','s']}
                type="text"
                name="horizon"
                value={props.data.horizon}
                onBlur={props.onBlur}
                onKeyPress={props.onChange}
                onChange={props.onChange}
                placeholder="35 years"/>  
            </div>
            <div className=" settings-inputs col-6 col-md-3">
                <label>
                    Initial deposit
                </label>
                <MaskedInput
                  className="long-text"
                  mask={initialDepositNumberMask}
                  type="text"
                  name="initial_investment"
                  value={props.data.initial_investment}
                  onBlur={props.onBlur}
                  onKeyPress={props.onChange}
                  onChange={props.onChange}/>
            </div>
            <div className=" settings-inputs col-6 col-md-3">
                <label>
                    Risk Score
                </label>
                <input disabled="disabled" value="7/10(Balanced)"/>
            </div>
              
        </Aux>
    );
};

export {
    settingsInput
};