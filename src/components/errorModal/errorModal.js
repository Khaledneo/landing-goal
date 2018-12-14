import React from "react";
import Aux from "../../Hoc/Aux";

const errorModal = () => {
    return (
        <div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="errorModal"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Error</h5>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    errorModal
}