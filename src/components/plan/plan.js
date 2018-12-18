import React from "react";
import Aux from "../../Hoc/Aux";

import "./plan.scss";


export const plan = (props) => {
    const bakgroundImage = {
        backgroundImage: `url(${props.planData.image})`
    };
    return (
        <Aux>
            <div className="plan">
                <div className="plan-image" style={bakgroundImage}></div>
                <div className="data">
                    <h3>{props.planData.name} Deposit</h3>
                    <div className="custom-row">
                        <span>Initial Investment</span>
                        <span>{props.planData.initial_investment}</span>
                    </div>
                    <div className="custom-row">
                        <span>{props.planData.name} Deposit</span>
                        <span>${props.planData.recurring_investment}</span>
                    </div>
                    <div className="custom-row">
                        <span>Investment Horizon</span>
                        <span>{props.planData.horizon} Years</span>
                    </div>
                    <div className="custom-row">
                        <span>Risk Tolerance</span>
                        <span>Balanced (7/10)</span>
                    </div>
                    <div className="chart">
                        <div className="chart-title">
                            <h3>Future You</h3>
                            <span><span>Goal</span> $5,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
};