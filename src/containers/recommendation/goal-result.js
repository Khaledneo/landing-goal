import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import { noteBox as NoteBox } from "../../components/note/noteBox";
import { settingsInput as SettingsInput } from "../../components/settings/input";
import "./goal-result.scss";
import { isEqual,validateGoalsInput } from "../../util/util";
import {assetsAllocation as AssetsAllocation} from "../../components/assetsAllocation/assetsAllocation";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import yearlyImage from "../../assets/images/yearly.jpg";


class goalResults extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            isSettingsCollapsed: false,
            isLoading: false
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
                    <Plan  planData={plan} amount={this.state.inputs.amount}/>
                </div>
            )
        })
    };

    changeValue = (e) => {
        if(e.key !== "Enter") {
            const inputName =  e.target.name;
            const inputValue = inputName !== "reason" ? ((inputName !== "amount" && inputName !== "initial_investment") ? parseInt(e.target.value) : parseInt(e.target.value.replace(/\$/g, "").replace(/,/g, ""))) : e.target.value;
            this.setState({
                ...this.state,
                copy: {
                    ...this.state.copy,
                    [inputName]: inputName !== "reason" ? !isNaN(inputValue) ? inputValue : "" : inputValue
                }
            });
        } else {
            if(isEqual(this.state.info,this.state.copy)) {
                return;
            } else {
                let validationResult = validateGoalsInput(this.state.copy);
                this.updateStateInfo(validationResult);
                this.props.onContinue(this.state.copy, validationResult);
            }
        }
    };

    updateStateInfo = (validationResult) => {
        if(!validationResult.errorOccurred) {
            this.setState({
                ...this.state,
                info: {
                    ...this.state.copy
                }
            })
        }
    }

    onSettingsClick = () => {
        this.setState({
            isSettingsCollapsed: !this.state.isSettingsCollapsed
        });
    };

    handleBlur = () => {
        if(isEqual(this.state.info,this.state.copy)) {
            return;
        } else {
            let validationResult = validateGoalsInput(this.state.copy);
            this.updateStateInfo(validationResult)
            this.props.onContinue(this.state.copy, validationResult);
        }
    };

    handleSettings = () => {
        const activeRisk = this.props.risks.find(risk => risk.risk.score === 7);
        return !this.state.isSettingsCollapsed && (
        <Aux>
            <div className="row settings-input">
                <SettingsInput onBlur={ this.handleBlur }  onChange={this.changeValue} data = { this.state.inputs }/>
            </div>
            <AssetsAllocation groups={activeRisk.groups} projections={activeRisk && activeRisk.projections}/>
        </Aux>
        )
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
            </Aux>
        )
    }
};

export  {
    goalResults
};