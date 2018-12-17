import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import yearlyImage from "../../assets/images/yearly.jpg";


class Recommendation extends Component {

    constructor(props) {
        super(props);
    };

    plans = [{
        name: "",
        image: quarterlyImage
    },{
        name: "",
        image: semiAnnualImage
    },{
        name: "",
        image: yearlyImage
    }];

    getPlans = () => {
        return this.plans.map(plan => {
            return (
                <div className="col-md-4">
                    <Plan image={plan.image}/>
                </div>
            )
        })
    };

    render () {
        return (
            <Aux>
                <div className="row">
                    { this.getPlans() }
                </div>
            </Aux>
        )
    }
};

export default Recommendation;