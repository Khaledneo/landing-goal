import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import { noteBox as NoteBox } from "../../components/note/noteBox";
import { settingsInput as SettingsInput } from "../../components/settings/input";
import "./goal-result.scss";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import yearlyImage from "../../assets/images/yearly.jpg";


class goalResults extends Component {

    
    constructor(props) {
        super(props);
        // we should update the state value from the props
        this.state = {
            settingsCollapsed: false,
            age: "18",
            reason: "education",
            horizon: "5",
            amount: "5555"
        }
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
                    <Plan  planData={plan} target={this.props.target}/>
                </div>
            )
        })
    };

    onSettingsClick = () => {
        this.setState({
            settingsCollapsed: !this.state.settingsCollapsed
        });
    };



    handleSettings = (target, years) => {
        let userData = { target, years };
        return !this.state.settingsCollapsed && (
        <div className="row">
            <SettingsInput onChange={(info) => { this.props.onInputChange(info) }} data={ userData }/>
        </div>
        )
    };

    render () {
        return (
            <Aux>
                <div className="recommendation">
                    <p className="result-title">In order for you to reach your goal of ${this.props.target} in {this.props.years}
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
                        { this.handleSettings(this.props.target,this.props.years) }
                    </div>
                </div>
            </Aux>
        )
    }
};

export  {
    goalResults
};