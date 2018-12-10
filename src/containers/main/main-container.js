import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import './main-container.scss';

class Main extends Component {
    render() {
        return (
            <Aux>
                <div id="main">
                    {this.props.children}
                </div>
            </Aux>
        )
    }
};

export default Main;