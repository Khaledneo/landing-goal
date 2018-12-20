import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import { validateGoalsInput } from "../../util/util";
import {boxHeader as BoxHeader} from "../../components/box-header/box-header";
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import {information as Information} from "../../components/information/information";
const $ = window.$;



class goalInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: "18",
            reason: "education",
            horizon: "5",
            amount: "5000",
            initial_investment: "0"
        };
    };



    validateInput = () => {
        let validationResult = validateGoalsInput(this.state);
        if(validationResult.errorOccurred) {
            this.openModalError(validationResult.errorMessage);
        } else {
            this.props.onContinue(this.state);
        }
    };

    openModalError = (errorMessage) => {
      this.setState({
          ...this.state,
          errorMessage: errorMessage
      });
      $("#errorModal").modal("show");
    };

    changeValue = (e) => {
        const inputName = e.target.name;
        let inputValue = null;
        switch(inputName){
            case "reason":
            inputValue = e.target.value;
            break;
            case "amount":
            inputValue =  parseInt(e.target.value.replace(/\$/g, "").replace(/,/g, ""));
            if(isNaN(inputValue)) {
                inputValue = "";
            } 
            break;
            default: 
            inputValue = parseInt(e.target.value);
        }
        this.setState({
            ...this.state,
            [inputName]:  inputValue
        });
    };

    render() {
        return (
            <Aux>
                <BoxHeader/>
                <Information
                    userInformation={this.state}
                    onValueChange={this.changeValue}
                    />
                 <ErrorModal errorMessage={this.state.errorMessage}/>
                <div className="button-group">
                    <button className="btn rounded-0 primary" onClick={this.validateInput}>Continue</button>
                </div>
            </Aux>
        )
    };

};

export  {
    goalInput
};