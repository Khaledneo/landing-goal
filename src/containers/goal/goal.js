import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import {boxHeader as BoxHeader} from "../../components/box-header/box-header";
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import {information as Information} from "../../components/information/information";

const $ = window.$;

class Goal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {
                age: "",
                reason: "",
                horizon: "",
                amount: ""
            },
            errorMessage: "",
            
        };
    };

    openModalError = (errorMessage) => {
        this.setState({
            ...this.state,
            errorMessage: errorMessage
        });
        $("#errorModal").modal("show");
    };

    handleContinue = () => {
        const { age, reason,horizon,amount } = this.state.info;
        if (!age || age > 99 || age < 18 ) {
            this.openModalError("Age must be between 18 and 99 years");
            return;
        }
        if( !horizon || horizon > 30 || horizon < 5 ) {
            this.openModalError("Horizon must be between 5 and 30 years");
            return;
        }
        if(amount < 5000){
            this.openModalError("Amount should be more than $5000");
            return;
        } else if (amount > 999999999) {
            this.openModalError("Amount should be less than $1,000,000,000");
            return;
        }
        this.setState({
            ...this.state,
            errorMessage: ""
        });
    };

    changeValue = (e) => {
        const inputName = e.target.name;
        const inputValue = inputName !== "reason" ? inputName !== "amount" ? parseInt(e.target.value) : parseInt(e.target.value.replace(/\$/g, "").replace(/,/g, "")) : e.target.value;
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                [inputName]: inputName !== "reason" ? !isNaN(inputValue) ? inputValue : "" : inputValue
            }
        })
    };

    render() {
        return (
            <Aux>
                <ErrorModal errorMessage={this.state.errorMessage}/>
                <BoxHeader/>
                <Information
                    userInformation={this.state.info}
                    onValueChange={this.changeValue}
                    /> 
                <div className="button-group">
                    <button className="btn rounded-0 light">Back</button>
                    <button className="btn rounded-0 primary" onClick={this.handleContinue}>Continue</button>
                </div>
            </Aux>
        )
    };

};

export default Goal;