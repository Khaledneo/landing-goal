import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import { noteBox as NoteBox } from "../../components/note/noteBox";
import { settingsInput as SettingsInput } from "../../components/settings/input";
import "./goal-result.scss";
import { validateGoalsInput } from "../../util/util";
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import {assetsAllocation as AssetsAllocation} from "../../components/assetsAllocation/assetsAllocation";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import axios from "axios";
import yearlyImage from "../../assets/images/yearly.jpg";
import { allocationModal as AllocationModal} from "../../components/allocationModal/allocationModal";

const $ = window.$;


class goalResults extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            isSettingsCollapsed: false,
            isLoading: false,
            activeGroup: {},
            activeProjection: {}
        };
        this.state= {
            ...this.state,
            inputs: {
                ...props.inputs
            },
            recommendations: [
                ...props.data
            ] 
        };
    }

    plansImages = [{
        name: "Quarterly",
        image: quarterlyImage
    },{
        name: "Semi-annual",
        image: semiAnnualImage
    },{
        name: "Yearly",
        image: yearlyImage
    }];

    get plans() {
        let plans = this.state.recommendations.map(plan => {
            let image = this.plansImages.find(p => p.name === plan.name).image;
            return {
                ...plan,
                image: image
            }
        });
        return plans.map(plan => {
            return (
                <div key={plan.name} className="col-lg-4">
                    <Plan onChangeView={ (planKey) => { this.handlePlanDisplay(planKey) } }  planData={plan} amount={this.state.inputs.amount} />
                </div>
            )
        })
    };

    handlePlanDisplay = (planKey) => {
       let {recommendations} = this.state;  
       let changedPlanIndex = recommendations.findIndex(plan => plan.name === planKey);
       recommendations[changedPlanIndex].isCollapsed = !recommendations[changedPlanIndex].isCollapsed;
       this.setState({
           ...this.state,
           recommendations
       });
    };

    changeValue = (e) => {
        if(e.key !== "Enter") {
            const inputName =  e.target.name;
            const inputValue = inputName !== "reason" ? ((inputName !== "amount" && inputName !== "initial_investment") ? parseInt(e.target.value) : parseInt(e.target.value.replace(/\$/g, "").replace(/,/g, ""))) : e.target.value;
            this.setState({
                ...this.state,
                inputs: {
                    ...this.state.inputs,
                    [inputName]: inputName !== "reason" ? !isNaN(inputValue) ? inputValue : "" : inputValue
                }
            });
        } else {
            this.handleBlur();
        }
    };

    onSettingsClick = () => {
        this.setState({
            isSettingsCollapsed: !this.state.isSettingsCollapsed
        });
    };

    handleBlur = () => {
        let validationResult = validateGoalsInput(this.state.inputs);
        if(validationResult.errorOccurred) {
            this.openModalError(validationResult.errorMessage);
        } else {
            this.fetchResult();
        }
    };


    async fetchResult  ()  {
        const {initial_investment , amount, horizon } = this.state.inputs;  

        try {
            let response = await axios.get(`/profile/default_recommendations/${initial_investment}/${amount}/${horizon}/7`);
            let updatedData = response.data.map(plan => {
                return {
                    ...plan,
                    isCollapsed: true
                }
            });
            this.setState({
                 ...this.state,
                 recommendations: updatedData,
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

    handleSettings = () => {
        const activeRisk = this.props.risks.find(risk => risk.risk.score === 7);
        return !this.state.isSettingsCollapsed && (
        <Aux>
            <div className="row settings-input">
                <SettingsInput onBlur={this.handleBlur}  onChange={this.changeValue} data={this.state.inputs}/>
            </div>
            <AssetsAllocation groups={activeRisk.groups}  onAssetsClick={ (group)=> {this.onAssetsClick(group) } }/>
        </Aux>
        )
    };

    onAssetsClick = (group) => {
        const activeRisk = this.props.risks.find(risk => risk.risk.score === 7);
        const activeProjection = activeRisk.projections.filter(projection => {
            return projection.etf_symbol === group.description
        });
        this.setState({
            ...this.state,
            activeGroup: {...group},
            activeProjection: activeProjection
        });
        $("#alloccatioModal").modal("show");
    };

    render () {
        return (
            <Aux>
                <div className="recommendation">
                    <p className="result-title">In order for you to reach your goal of ${this.state.inputs.amount} in {this.state.inputs.horizon} {" "}
                         years, we recommend you follow one of the below plans:</p>
                    <div className="row">
                        { this.plans }
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <NoteBox />
                        </div>
                    </div>
                    <div className="advanced-settings">
                        <div className="settings-header">
                            <button onClick={ this.onSettingsClick }>Advanced Settings <div className={ this.state.isSettingsCollapsed ? "down-arrow" : "up-arrow" }></div>
                            </button>
                            <span>
                                Amend your goals and options
                            </span>
                        </div>
                        { this.handleSettings() }
                    </div>
                </div>
                <AllocationModal activeGroup={this.state.activeGroup} activeProjection={this.state.activeProjection}/>
                <ErrorModal errorMessage={this.state.errorMessage}/>
            </Aux>
        )
    }
};

export  {
    goalResults
};