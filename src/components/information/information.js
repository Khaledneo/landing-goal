import React from "react";
import Aux from "../../Hoc/Aux";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

import "./information.scss";


const handleSelect = (e) =>{
    console.log(e.target.value);
};

const numberMask = createNumberMask({
    prefix: "",
    integerLimit: 9,
    thousandsSeparatorSymbol: ","
});

const information = (props) => {
    return (
        <Aux>
            <div className="information">
                I am           
               <MaskedInput
                mask={[/\d/,/\d/]}
                type="text"
                name="age"
                value="25"
                placeholder="25"/> years old and i want to invest for
                <select className="selectpicker" onChange={handleSelect}>
                    <option>Mustard</option>
                    <option>Ketchup</option>
                    <option>Relish</option>
                </select>
                <br/>
                In                
                <MaskedInput
                mask={[/\d/,/\d/]}
                type="text"
                name="years"
                value="25"
                placeholder="25"/>
                years, I would like to have saved $
                <MaskedInput
                className="long-text"
                mask={numberMask}
                type="text"
                name="amount"
                value="300,000"
                placeholder="300,000"/> towards my goal.
            </div>
        </Aux>
    )
};

export { information };