import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import {boxHeader as BoxHeader} from "../../components/box-header/box-header";
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import {information as Information} from "../../components/information/information";

import './box.scss';

const $ = window.$;

class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "Testing error"
        };
    }

    changeErrorMessage = () => {
        this.setState({
            error: "New Error Message"
        });
        $("#errorModal").modal("show");
    };

    render() {
        return (
            <Aux>
                <div className="container">
                    <div id="box">
                        <ErrorModal errorMessage={this.state.error}/>
                        <BoxHeader/>
                        <Information/>
                        <div className="button-group">
                            <button className="btn rounded-0 light">Back</button>
                            <button className="btn rounded-0 primary" onClick={this.changeErrorMessage}>Continue</button>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }


};

export default Box;