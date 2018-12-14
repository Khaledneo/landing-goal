import React from "react";
import Aux from "../../Hoc/Aux";

const errorModal = (props) => {
    return (
        <div className="modal fade" id="errorModal" tabIndex="-1" role="dialog" aria-labelledby="errorModal"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Error</h5>
                    </div>
                    <div className="modal-body">
                        {props.errorMessage}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    errorModal
}