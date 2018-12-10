import React from "react";
import Aux from "../../Hoc/Aux";
import logo from "../../assets/logo-black.svg";

const changeLanguage = () => {
    console.log("We are here");
};

const pages = [{
    title: "About",
    pages: [{
        title: "Get started",
        url: "https://my.nbkcapitalsmartwealth.com/questionnaire-1"
    },{
        title: "Why SmartWealth",
        url: "https://nbkcapitalsmartwealth.com/why-smart-wealth"
    },{
        title: "Pricing",
        url: "https://nbkcapitalsmartwealth.com/pricing"
    },{
        title: "Learn",
        url: "https://nbkcapitalsmartwealth.com/investment-101"
    }]
},{
    title: "Questions?",
    pages: [{
        title: "FAQ",
        url: "http://help.nbkcapitalsmartwealth.com/"
    }]
},{
    title: "Legal",
    pages: [{
        title: "Privacy policy",
        url: "https://nbkcapitalsmartwealth.com/privacy-policy"
    },{
        title: "Full disclosure",
        url: "https://nbkcapitalsmartwealth.com/terms-policy"
    }]
},{
    title: "Download the app",
    icons: [{
        name: "apple",
        path: ""
    },{
       name: "android",
        path: ""
    }]
}];



const footer = () => {
    return (
        <Aux>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <a href="nbkcapitalsmartwealth.com">
                            <img className="logo" src={logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="col-md-6 align-items-center d-flex flex-column flex-wrap">

                    </div>
                </div>
            </div>
        </Aux>
    )
};

export { footer };