import React from "react";
import "./noteBox.scss";
const noteBox = () => {
    return (
        <div className="note">
            <p>
                <strong>Note: </strong>The above funding plans are for illustrative purposes and are based on your inputs. We have assumed a default balanced risk tolerance of 6/10 for this analysis. To get a more accurate plan, please complete opening your account to have your risk tolerance assessed. Projections are based on historical returns for illustrative purposes. Past performance is not indicative of future performance.
            </p>
        </div>
    )
};

export  {
    noteBox
};