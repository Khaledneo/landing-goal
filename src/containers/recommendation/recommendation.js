import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import { noteBox as NoteBox } from "../../components/note/noteBox";
import "./recommendation.scss";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import yearlyImage from "../../assets/images/yearly.jpg";


class Recommendation extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            settingsCollapsed: true
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

    getPlans = () => {
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

    render () {
        return (
            <Aux>
                <div className="recommendation">
                    <p className="result-title">In order for you to reach your goal of ${this.props.target} in {this.props.years}
                        years, we recommend you follow one of the below plans:</p>
                    <div className="row">
                        { this.getPlans() }
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
                        { !this.state.settingsCollapsed && <div>Settings here</div>}
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Recommendation;