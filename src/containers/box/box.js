import React, { Component } from 'react';
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import Recommendation from '../recommendation/recommendation';
import Aux from "../../Hoc/Aux";
import axios from "axios";
import Goal from "../goal/goal";
import './box.scss';

const $ = window.$;




class Box extends Component {

    constructor(props) {
      super(props);
        const dummyData = 
            [
              {
                "name": "Quarterly",
                "frequency": 4,
                "initial_investment": 5000,
                "recurring_investment": -68,
                "horizon": 5,
                "is_valid": false,
                "future_values": [
                  [
                    "0",
                    5000
                  ],
                  [
                    "1",
                    5003
                  ],
                  [
                    "2",
                    5006
                  ],
                  [
                    "3",
                    5010
                  ],
                  [
                    "4",
                    5013
                  ],
                  [
                    "5",
                    5017
                  ]
                ]
              },
              {
                "name": "Semi-annual",
                "frequency": 2,
                "initial_investment": 5000,
                "recurring_investment": -135,
                "horizon": 5,
                "is_valid": false,
                "future_values": [
                  [
                    "0",
                    5000
                  ],
                  [
                    "1",
                    5005
                  ],
                  [
                    "2",
                    5010
                  ],
                  [
                    "3",
                    5016
                  ],
                  [
                    "4",
                    5022
                  ],
                  [
                    "5",
                    5028
                  ]
                ]
              },
              {
                "name": "Yearly",
                "frequency": 1,
                "initial_investment": 5000,
                "recurring_investment": -270,
                "horizon": 5,
                "is_valid": false,
                "future_values": [
                  [
                    "0",
                    5000
                  ],
                  [
                    "1",
                    5005
                  ],
                  [
                    "2",
                    5010
                  ],
                  [
                    "3",
                    5016
                  ],
                  [
                    "4",
                    5022
                  ],
                  [
                    "5",
                    5028
                  ]
                ]
              }
            ]
         
        this.state =  {
            errorMessage: "",
            result: dummyData,
            goalTarget: 6000,
            years: 30
        };
    };

    async handleContinue  (inputState) {
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


        try {
          // axios.get("/profile/default_recommendations/0/5000/5/7").then(response => {
            let response = await axios.get("/profile/recommendations/0/5000/5/7") 
            this.setState({
                  result: response.data,
                  errorMessage: "",
                  goalTarget: amount,
                  years: horizon
              });
          } catch(exception) {
              console.log(JSON.stringify(exception,null,2));
          }

    };

    openModalError = (errorMessage) => {
        this.setState({
            ...this.state,
            errorMessage: errorMessage
        });
        $("#errorModal").modal("show");
    };

    handleView = () => {
        let length = this.state.result.length;
        return length ? <Recommendation data={this.state.result} onInputChange={ (info) => { this.handleContinue(info) }} target={this.state.goalTarget} years={this.state.years}/> : <Goal onContinue={ (info)=>{ this.handleContinue(info) } }/>;
    };

    render() {
        return (
            <Aux>
                <div className="container">
                    <div id="box">
                        <ErrorModal errorMessage={this.state.errorMessage}/>
                        { this.handleView() }
                    </div>
                </div>
            </Aux>
        )
    }

};

export default Box;