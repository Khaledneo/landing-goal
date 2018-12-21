import React from "react";
import Aux from "../../Hoc/Aux";
import "./errorModal.scss";

const errorModal = (props) => {
    console.log(props.errorMessage);
    return (
        <Aux>
            <div className="modal fade" id="errorModal" tabIndex="-1" role="dialog" aria-labelledby="errorModal"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Error!</h5>
                        </div>
                        <div className="modal-body">
                            {props.errorMessage}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger"  data-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export {
    errorModal
}