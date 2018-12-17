import React, { Component } from 'react';
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import Recommendation from '../recommendation/recommendation';
import Aux from "../../Hoc/Aux";
import Goal from "../goal/goal";
import './box.scss';

const $ = window.$;




class Box extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            errorMessage: ""
        };
    };

    handleContinue =  (inputState) => {
        const { age, reason, horizon, amount } = inputState;
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
        },() => {
            console.log("axios request should be here");
        });
    };

    openModalError = (errorMessage) => {
        this.setState({
            ...this.state,
            errorMessage: errorMessage
        });
        $("#errorModal").modal("show");
    };

    render() {
        return (
            <Aux>
                <div className="container">
                    <div id="box">
                        <ErrorModal errorMessage={this.state.errorMessage}/>
                        <Goal onContinue={ (info)=>{ this.handleContinue(info) } }/>
                        {/* <Recommendation /> */}
                    </div>
                </div>
            </Aux>
        )
    }

};

export default Box;