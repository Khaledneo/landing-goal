import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import {boxHeader as BoxHeader} from "../../components/box-header/box-header";
import {information as Information} from "../../components/information/information";


class Goal extends Component {

    constructor(props) {
        super(props);
        this.state = {
                age: "18",
                reason: "education",
                horizon: "5",
                amount: "5555"
        };
    };

    changeValue = (e) => {
        const inputName = e.target.name;
        const inputValue = inputName !== "reason" ? inputName !== "amount" ? parseInt(e.target.value) : parseInt(e.target.value.replace(/\$/g, "").replace(/,/g, "")) : e.target.value;
        this.setState({
            ...this.state,
            [inputName]: inputName !== "reason" ? !isNaN(inputValue) ? inputValue : "" : inputValue
        })
    };

    render() {
        return (
            <Aux>
                <BoxHeader/>
                <Information
                    userInformation={this.state}
                    onValueChange={this.changeValue}
                    /> 
                <div className="button-group">
                    <button className="btn rounded-0 light">Back</button>
                    <button className="btn rounded-0 primary" onClick={()=>{ this.props.onContinue(this.state) }}>Continue</button>
                </div>
            </Aux>
        )
    };

};

export default Goal;