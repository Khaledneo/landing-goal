import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import { noteBox as NoteBox } from "../../components/note/noteBox";
import "./recommendation.scss";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import yearlyImage from "../../assets/images/yearly.jpg";


class Recommendation extends Component {

    
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

    componentDidMount () {

    };

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
                    <Plan  planData={plan}/>
                </div>
            )
        })
    };

    render () {
        return (
            <Aux>
                <div className="recommendation">
                    <p className="result-title">In order for you to reach your goal of XXXX in YY years, we recommend you follow one of the below plans:</p>
                    <div className="row">
                        { this.getPlans() }
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <NoteBox />
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Recommendation;