import React, { Component } from 'react';
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import { goalResults as GoalResults } from '../recommendation/goal-result';
import { goalInput as GoalInput } from "../goal/goal-input";
import Aux from "../../Hoc/Aux";
import axios from "axios";
import './goal-box.scss';



const $ = window.$;


class goalBox extends Component {

    constructor(props) {
      super(props);
        // const dummyData = 
        //     [
        //       {
        //         "name": "Quarterly",
        //         "frequency": 4,
        //         "initial_investment": 5000,
        //         "recurring_investment": -68,
        //         "horizon": 5,
        //         "is_valid": false,
        //         "future_values": [
        //           [
        //             "0",
        //             5000
        //           ],
        //           [
        //             "1",
        //             5003
        //           ],
        //           [
        //             "2",
        //             5006
        //           ],
        //           [
        //             "3",
        //             5010
        //           ],
        //           [
        //             "4",
        //             5013
        //           ],
        //           [
        //             "5",
        //             5017
        //           ]
        //         ]
        //       },
        //       {
        //         "name": "Semi-annual",
        //         "frequency": 2,
        //         "initial_investment": 5000,
        //         "recurring_investment": -135,
        //         "horizon": 5,
        //         "is_valid": false,
        //         "future_values": [
        //           [
        //             "0",
        //             5000
        //           ],
        //           [
        //             "1",
        //             5005
        //           ],
        //           [
        //             "2",
        //             5010
        //           ],
        //           [
        //             "3",
        //             5016
        //           ],
        //           [
        //             "4",
        //             5022
        //           ],
        //           [
        //             "5",
        //             5028
        //           ]
        //         ]
        //       },
        //       {
        //         "name": "Yearly",
        //         "frequency": 1,
        //         "initial_investment": 5000,
        //         "recurring_investment": -270,
        //         "horizon": 5,
        //         "is_valid": false,
        //         "future_values": [
        //           [
        //             "0",
        //             5000
        //           ],
        //           [
        //             "1",
        //             5005
        //           ],
        //           [
        //             "2",
        //             5010
        //           ],
        //           [
        //             "3",
        //             5016
        //           ],
        //           [
        //             "4",
        //             5022
        //           ],
        //           [
        //             "5",
        //             5028
        //           ]
        //         ]
        //       }
        //     ]
         
        this.state =  {
            errorMessage: "",
            result: [],
            info: {
              age: "18",
              reason: "education",
              horizon: "5",
              amount: "5555"
            }
        };
    };

    handleContinue = (userInput, validationResult ) =>  {
      validationResult.errorOccurred ? this.openModalError(validationResult.errorMessage) : this.fetchResult(userInput.amount,userInput.horizon)
    };

    async fetchResult  (amount,horizon)  {
      try {
          let response = await axios.get(`/profile/default_recommendations/0/${amount}/${horizon}/7`); 
          this.setState({
                result: response.data,
                errorMessage: "",
                info: {
                  ...this.state.info,
                  amount: amount,
                  horizon: horizon
                }
            });
        } catch(exception) {
            console.log(JSON.stringify(exception,null,2));
        }
    };



    handleView = () => {
        let length = this.state.result.length;
        return length ? <GoalResults data={this.state.result} onInputChange={ (info, validationResult) => { this.handleContinue(info, validationResult) }} target={this.state.info.amount} years={this.state.info.horizon}/> : <GoalInput  onContinue={ (info, validationResult)=>{ this.handleContinue(info,validationResult) } }/>;
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
                        { this.handleView() }
                    </div>
                </div>
            </Aux>
        )
    };

};

export  {
  goalBox
};