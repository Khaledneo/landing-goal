import React, { Component } from 'react';
import { goalResults as GoalResults } from '../recommendation/goal-result';
import { goalInput as GoalInput } from "../goal/goal-input";
import { cashOption } from "../../constants/variables";
import axios from "axios";
import Aux from "../../Hoc/Aux";
import './goal-box.scss';



const $ = window.$;


class goalBox extends Component {

    state = {
      isLoadingRiskScore: false,
      isLoadingRecommendations: false
    }

    constructor(props) {
      super(props);
        this.state =  {
            recommendationsResult: [],
            risks: [],
            inputs: {}
        };
    };

    
    async fetchRecommenations  (amount, horizon)  {
      try {
        this.setState({
          isLoadingRecommendations: true
        });
        let response = await axios.get(`/profile/default_recommendations/0/${amount}/${horizon}/7`);
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
      //TODO: Catch the info from the header
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
      if(this.state.isLoadingRiskScore || this.state.isLoadingRecommendations){
        return (<div>Loading</div>);
      }
      if(!Object.keys(this.state.inputs).length){
      return  <GoalInput  onContinue={(inputs)=>{ this.handleContinue(inputs)}}/>
      }
      if(this.state.recommendationsResult.length){
        return  <GoalResults data={this.state.recommendationsResult} risks={this.state.risks} inputs={this.state.inputs}/>
      }
      return null;
    }
    
    render() {
      const content = this.renderContent();
      return (
        <Aux>
          <div className="container">
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