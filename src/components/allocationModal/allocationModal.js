import React from "react";
import Aux from "../../Hoc/Aux";
import "./allocationModal.scss";

const  projection = (projection) => {
    
   if(projection.length) {
       return projection.map((projection) => {
           return (
            <tr key={projection.etf_name}>
                <td>{projection.etf_securtiy}</td>
                <td>{projection.etf_provider}</td>
                <td>{(projection.percentage * 100).toFixed(1)}%</td>
            </tr>
           )
       })
   }
};

const allocationModal = (props) => {
    const projections = props.activeProjection && projection(props.activeProjection); 

    return (
        <Aux>
            <div className="modal fade" id="alloccatioModal" tabIndex="-1" role="dialog" aria-labelledby="allocationModal"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{props.activeGroup.description}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="description">
                                {props.activeGroup.summary}
                            </div>
                            <div className="target-allocation">
                                Target Allocation: <span className="green">{(props.activeGroup.percentage * 100).toFixed(1)}%</span>
                            </div>
                                { projections ?  <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Security</th>
                                            <th scope="col">Provider</th>
                                            <th scope="col">Allocation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projections}
                                    </tbody>
                                </table> : null}
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export {
    allocationModal
}