import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import {boxHeader as BoxHeader} from "../../components/box-header/box-header";
import {errorModal as ErrorModal} from "../../components/errorModal/errorModal";
import {information as Information} from "../../components/information/information";

import './box.scss';

const $ = window.$;

class Box extends Component {

    componentDidMount() {
        $("#errorModal").modal("show");
    };

    render() {
        return (
            <Aux>
                <div className="container">
                    <div id="box">
                        <ErrorModal/>
                        <BoxHeader/>
                        <Information/>
                        <div className="button-group">
                            <button className="btn rounded-0 light">Back</button>
                            <button className="btn rounded-0 primary">Continue</button>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Box;