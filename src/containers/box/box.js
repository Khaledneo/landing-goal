import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import {boxHeader as BoxHeader} from "../../components/box-header/box-header";
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import {information as Information} from "../../components/information/information";

import './box.scss';

const $ = window.$;

class Box extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            age: "",
            info: {
                age: "",
                reason: "",
                horizon: "",
                amount: ""
            },
            errorMessage: "Testing error",
            
        };
    }

    openModalError = (errorMessage) => {
        this.setState({
            errorMessage: errorMessage
        });
        $("#errorModal").modal("show");
        // TODO: Clear the errorMessage when the modal is closed
    };

    handleContinue = () => {
        let age = parseInt(this.state.userInformation.age);
        if ( age > 99 && age < 18 ) {
            this.openModalError("Age must be between 18 and 99 years");
        }
    };

    changeAge = (e) => {
        const age = parseInt(e.target.value);
        this.setState({ age: isNaN(age) ? age : "" });
    };

    changeAmount = (e) => {
        console.log(e.target.value);
    };

    changeHorizon = (e) => {
        console.log(e.target.value);
    };

    changeReason = (e) => {
        console.log(e.target.value);
    }; 

    render() {
        return (
            <Aux>
                <div className="container">
                    <div id="box">
                        <ErrorModal errorMessage={this.state.errorMessage}/>
                        <BoxHeader/>
                        <Information
                         userInformation={this.state.info}
                         onChangeReason={this.changeReason}
                         onChangeAmount={this.changeAmount}
                         onChangeHorizon={this.changeHorizon}
                         onChangeAge={this.changeAge} /> 
                        <div className="button-group">
                            <button className="btn rounded-0 light">Back</button>
                            <button className="btn rounded-0 primary" onClick={this.handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }

};

export default Box;