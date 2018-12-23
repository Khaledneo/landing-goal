import React, { Component } from 'react';
import { goalResults as GoalResults } from '../recommendation/goal-result';
import { goalInput as GoalInput } from "../goal/goal-input";
import {loader as Loader} from "../../components/loader/loader";
import { parseURLParams,validateGoalsInput } from "../../util/util";
import { cashOption } from "../../constants/variables";
import axios from "axios";
import Aux from "../../Hoc/Aux";
import './goal-box.scss';

const $ = window.$;




class goalBox extends Component {

    constructor(props) {
      super(props);
        this.state =  {
            isLoadingRiskScore: false,
            isLoadingRecommendations: false,
            recommendationsResult: [],
            risks: [],
            errorMessage: "",
            inputs: {}
        };
    };

    
    async fetchRecommenations  (amount, horizon)  {
      try {
        this.setState({
          isLoadingRecommendations: true
        });
        let response = await axios.get(`/profile/default_recommendations/0/${amount}/${horizon}/6`);
        let recommendationsResult = this.fillCollapsed(response.data);
        this.setState({
          isLoadingRecommendations: false,
          recommendationsResult
        });
      } catch(exception) {
        console.log(JSON.stringify(exception,null,2));
      }
    };
    
    fillCollapsed = (recommendations) => {
      return recommendations.map(plan => {
        return {
          ...plan,
          isCollapsed: true
        }
      });
    };

    componentDidMount  () {
      this.fetchRiskScore();
    }

    componentWillMount() {
      this.getUrlData();
    };

    getUrlData = () => {
      const params = parseURLParams(window.location.href);
      if(params) {
        let inputsParams = this.updateParametersForm(params);
        let paramsValidation  = validateGoalsInput(inputsParams);
        if(paramsValidation.errorOccurred) {
          this.updateStateErrorMessage(paramsValidation.errorMessage);
        }else {
          this.setState({
            ...this.state,
            inputs: {...inputsParams,initial_investment: 0}
          },()=>{
            this.fetchRecommenations(inputsParams.amount,inputsParams.horizon);
          });
        }
      }
    };

    updateStateErrorMessage = (errorMessage) => {
      this.setState({
          ...this.state,
          errorMessage: errorMessage
      });
    };

    updateParametersForm = (params) => {
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
            params[key] = params[key][0]
        }
    };
    return params;
    };
    
    fillCash(data) {
      for (let i = 0; i < data.length; i++) {
        data[i].groups.push(cashOption);
      }
      return data;
    }
    
    async fetchRiskScore() {
      try {
        this.setState({
          isLoadingRiskScore: true
        });
        let response = await axios.get("/scores/raa/info/all");
        this.setState({
          isLoadingRiskScore: false,
          risks: this.fillCash(response.data.list)
        });
      } catch (exception) {
        console.log(JSON.stringify(exception, null, 2));
      }
    }
    
    handleContinue = (userInput) =>  {
      const { age, amount, horizon, reason, initial_investment } = userInput;
      this.setState({
        inputs: { age, amount, horizon, reason, initial_investment }
      },()=>{
        this.fetchRecommenations(amount, horizon);
      });
    };



    renderContent(){
      if(!Object.keys(this.state.inputs).length){
      return  <GoalInput  onContinue={(inputs)=>{ this.handleContinue(inputs)}}/>
      }
      if(this.state.recommendationsResult.length){
        return  <GoalResults data={this.state.recommendationsResult} risks={this.state.risks} inputs={this.state.inputs}/>
      }
      return null;
    }

    handleLoading = () => {
      (this.state.isLoadingRiskScore || this.state.isLoadingRecommendations) ? $("#loader").modal("show") : $("#loader").modal("hide"); 
    };

    render() {
      const content = this.renderContent();
      const goalTitle = this.state.recommendationsResult.length ? <h1 className="goal-calculator-title">Goal Calculator</h1> : null
      return (
        <Aux>
          {this.handleLoading()}
          <Loader />
          <div className="container">
             {goalTitle}
            <div id="box">
              { content }
            </div>
          </div>
        </Aux>
        )
    };

};

export  {
  goalBox
};