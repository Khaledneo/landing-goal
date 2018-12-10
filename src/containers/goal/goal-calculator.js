import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import  { deposits as Deposits }   from "../../components/deposits/deposits";
import './goal-calculator.scss';

class Goal extends Component {
    render() {
        return (
            <Aux>
                <Deposits />
            </Aux>
        )
    }
};

export default Goal;