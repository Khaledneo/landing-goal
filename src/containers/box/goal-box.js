import React, { Component } from 'react';
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import { goalResults as GoalResults } from '../recommendation/goal-result';
import { goalInput as GoalInput } from "../goal/goal-input";
import { cashOption } from "../../constants/variables";
import Aux from "../../Hoc/Aux";
import axios from "axios";
import './goal-box.scss';



const $ = window.$;


class goalBox extends Component {

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
            risks: [],
            info: {
              age: "18",
              reason: "education",
              horizon: "5",
              amount: "5555",
              initial_investment: "0"
            }
        };
    };

    handleContinue = (userInput, validationResult ) =>  {
      validationResult.errorOccurred ? this.openModalError(validationResult.errorMessage) : this.fetchResult(userInput.amount,userInput.horizon,0)
    };

    async fetchResult  (amount,horizon,initial_investment)  {
      try {
          let response = await axios.get(`/profile/default_recommendations/${initial_investment}/${amount}/${horizon}/7`); 
          this.setState({
                result: response.data,
                errorMessage: "",
                info: {
                  ...this.state.info,
                  initial_investment: initial_investment,
                  amount: amount,
                  horizon: horizon
                }
            });
        } catch(exception) {
            console.log(JSON.stringify(exception,null,2));
        }
    };

    componentDidMount(){
      this.fetchRiskScore();
    }

    fillCash(data) {
      for (let i = 0; i < data.length; i++) {
        data[i].groups.push(cashOption);
      }
      return data;
    }

    async fetchRiskScore() {
      try {
        let response = await axios.get("/scores/raa/info/all");
        this.setState({
          risks: this.fillCash(response.data.list)
        });
      } catch (exception) {
        console.log(JSON.stringify(exception, null, 2));
      }
    }

    handleView = () => {
        let length = this.state.result.length;
        return length ?
         <GoalResults data = {this.state.result} onContinue={ (info, validationResult) => { this.handleContinue(info, validationResult) }} risks={this.state.risks} info={this.state.info}/> :
         <GoalInput  onContinue={ (info, validationResult)=>{ this.handleContinue(info,validationResult) } }/>;
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
                        { this.state.risks.length ? this.handleView() : "Loading..." }
                    </div>
                </div>
            </Aux>
        )
    };

};

export  {
  goalBox
};