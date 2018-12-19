import React from "react";
import Aux from "../../Hoc/Aux";
import config from "../../constants/chartConfig";
import AmCharts from "@amcharts/amcharts3-react";

import "./plan.scss";

const handleChartData = (chartData) => {
    let updatedData = chartData.map((item,index) => {
        return {
            year: item[0],
            value: parseFloat(item[1]),
            fromValue: (parseFloat(item[1]) - (0.25 * parseFloat(item[1]))),
            toValue: (parseFloat(item[1]) + (0.25 * parseFloat(item[1])))
        }
    });
    return updatedData;
};

const getChart = (chartData) => {
    let updatedData = handleChartData(chartData);
    let maxYear = parseInt(updatedData[updatedData.length - 1]["year"]);
    let chartConfig = {
        ...config,
        "dataProvider": updatedData,
        "categoryAxis": {
            ...config.categoryAxis,
            "gridCount": maxYear,
            "labelFunction": function(year) {
                if (year == 0 || year === undefined){
                    return 'Today';
                }
                if(maxYear <= 5){
                    if(year == 3 || year == 5){
                        return "Year " + year;
                    }
                    return '';
                }
                if (maxYear % year == 0 && maxYear / 2 <= year){
                    return "Year " + year;
                }
                return '';
            }
        }
    };
    return (<AmCharts.React  style={{ width: "100%", height: "200px", fontFamily: "Lato"}} options={chartConfig} />)
};

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
                        <span>Initial Inves btment</span>
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
                </div>
                    <div className="chart">
                        <div className="chart-title">
                            <h3>Future You</h3>
                            <span><span>Goal</span> ${props.target}</span>
                        </div>
                        { getChart(props.planData.future_values) }
                    </div>
            </div>
        </Aux>
    )
};