import React from "react";
import Aux from "../../Hoc/Aux";
import ReactLoading from 'react-loading';   
import "./loader.scss";

const loader = () => {
    return (
        <Aux>
            <div className="modal" id="loader" tabIndex="-1" role="dialog" aria-labelledby="loader"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <ReactLoading type="spin" color={"white"} height={'10%'} width={'10%'} />
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export {
    loader
}