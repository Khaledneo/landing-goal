import React from "react";
import Aux from "../../Hoc/Aux";
import MaskedInput from "react-text-mask";
import {  dollarNumberMask,initialDepositNumberMask } from "../../util/masks";

import "./input.scss";


const settingsInput = (props) => {
    return (
        <Aux>
            <div className=" settings-inputs col-6 col-md-2 offset-md-2">
                <label>
                    Target saving
                </label>
                <MaskedInput
                onChange={props.onChange}
                value={props.data.amount}
                mask={dollarNumberMask}
                onKeyPress={props.onChange}
                onBlur={props.onBlur}
                type="text"
                name="amount"
                />
            </div>
            <div className=" settings-inputs col-6 col-md-2">
                <label>
                    Horizon
                </label>
                <MaskedInput
                mask={[/\d/,/\d/,' ','y','e','a','r','s']}
                type="text"
                name="horizon"
                value={props.data.horizon}
                onBlur={props.onBlur}
                onChange={props.onChange}
                onKeyPress={props.onChange}
                placeholder="35 years"/>  
            </div>
            <div className=" settings-inputs col-6 col-md-2">
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
            <div className=" settings-inputs col-6 col-md-2">
                <label>
                    Risk Score
                </label>
                <input className="dropdown" disabled="disabled" value="6/10(Balanced)" />
            </div>
              
        </Aux>
    );
};

export {
    settingsInput
};