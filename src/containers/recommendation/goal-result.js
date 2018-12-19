import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import { noteBox as NoteBox } from "../../components/note/noteBox";
import { settingsInput as SettingsInput } from "../../components/settings/input";
import "./goal-result.scss";
import { isEqual,validateGoalsInput } from "../../util/util";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import yearlyImage from "../../assets/images/yearly.jpg";


class goalResults extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            settingsCollapsed: false,
            info: {
                age: this.props.info.age,
                reason: this.props.info.reason,
                horizon: this.props.info.horizon,
                amount: this.props.info.amount,
                initial_investment: this.props.info.initial_investment
            },
            copy: {
                age: this.props.info.age,
                reason: this.props.info.reason,
                horizon: this.props.info.horizon,
                amount: this.props.info.amount,
                initial_investment: this.props.info.initial_investment
            }
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
        let plans = this.props.data.map(plan => {
            let image = this.plansImages.find(p => p.name === plan.name).image;
            return {
                ...plan,
                image: image
            }
        });
        return plans.map(plan => {
            return (
                <div key={plan.name} className="col-lg-4">
                    <Plan  planData={plan} target={this.props.info.amount}/>
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
            settingsCollapsed: !this.state.settingsCollapsed
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
        return !this.state.settingsCollapsed && (
        <div className="row">
            <SettingsInput onBlur={ this.handleBlur }  onChange={this.changeValue} data = { this.state.copy }/>
        </div>
        )
    };

    render () {
        return (
            <Aux>
                <div className="recommendation">
                    <p className="result-title">In order for you to reach your goal of ${this.props.info.amount} in {this.props.info.horizon} {" "}
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
                            <button onClick={ this.onSettingsClick }>Advanced Settings <div className={ this.state.settingsCollapsed ? "down-arrow" : "up-arrow" }></div>
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