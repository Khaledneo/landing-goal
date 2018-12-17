import React, { Component } from 'react';
import { plan as Plan } from "../../components/plan/plan";
import Aux from "../../Hoc/Aux";
import axios from "axios";
import quarterlyImage from "../../assets/images/quarterly.jpg";
import semiAnnualImage from "../../assets/images/semi-annual.jpg";
import yearlyImage from "../../assets/images/yearly.jpg";


class Recommendation extends Component {


    plans = [{
        name: "1",
        image: quarterlyImage
    },{
        name: "2",
        image: semiAnnualImage
    },{
        name: "3",
        image: yearlyImage
    }];

    componentDidMount () {
        axios.get("/profile/recommendations/0/5000/5/7").then(response => {
            console.log(JSON.stringify(response,null,2));
        });
    };

    getPlans = () => {
        return this.plans.map(plan => {
            return (
                <div key={plan.name} className="col-md-4">
                    <Plan  image={plan.image}/>
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