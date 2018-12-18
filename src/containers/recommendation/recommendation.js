import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import "./recommendation.scss";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import yearlyImage from "../../assets/images/yearly.jpg";


class Recommendation extends Component {

    constructor(props) {
        super(props);
        console.log(JSON.stringify(props,null,2));
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
                <div key={plan.name} className="col-md-4">
                    <Plan  planData={plan}/>
                </div>
            )
        })
    };

    render () {
        return (
            <Aux>
                <div className="recommendation">
                    <div className="row">
                        { this.getPlans() }
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Recommendation;