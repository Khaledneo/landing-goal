import React from "react";
import { Line } from 'rc-progress';
import "./assetsAllocation.scss";
import IconInfo from "../../assets/icons/icon-info.png"
import Aux from "../../Hoc/Aux";




const getGroups = (groups,onAssetsClick) => {
    return groups.map((group,index) => {
        let color;
        switch (index) {
            case 0:
            color = "#5856d6";
              break;
            case 1:
            color = "#007ace";
              break;
            case 2:
            color = "#5ac8fa";
              break;
            case 3:
            color = "#4cd964";
              break;
            case 4:
            color = "#ffcc00";
              break;
            default:
            color = "#ff9500";
        };
        let percentage = (group.percentage * 100).toFixed(1);
        return (
            <div key={group.name} className="group-progress" onClick={()=>onAssetsClick(group)}> 
                    <div className="allocationName">
                        <div className="label">{group.description} <img src={IconInfo} alt={"info"}/> </div>
                        <div className="percentage">{percentage}%</div>
                    </div>
                    <Line percent={percentage} strokeWidth="1" strokeColor={color} />
            </div>
        )
    });
};

export const assetsAllocation = (props) => {
    const groups = getGroups(props.groups,props.onAssetsClick);
    return (    
        <Aux>

            <div className="allocationName titles">
                    <div className="label assets">Assets Class</div>
                    <div className="percentage">Allocation</div>
            </div>
            { groups }
        </Aux>
    )
};