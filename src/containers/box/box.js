import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import Goal from "../goal/goal"

import './box.scss';
import Recommendation from '../recommendation/recommendation';



class Box extends Component {

    render() {
        return (
            <Aux>
                <div className="container">
                    <div id="box">
                        {/* <Goal/> */}
                        <Recommendation />
                    </div>
                </div>
            </Aux>
        )
    }

};

export default Box;