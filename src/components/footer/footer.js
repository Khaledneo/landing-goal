import React from "react";
import Aux from "../../Hoc/Aux";
import logo from "../../assets/logo-black.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import linkedIcon from "../../assets/icons/instagram.svg";
import instagramIcon from "../../assets/icons/linkedin.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import appleStore from "../../assets/icons/apple.svg";
import playStroe from "../../assets/icons/android.svg";

import "./footer.scss";

const changeLanguage = (langTarget) => {
    localStorage.setItem("nbk_lang",langTarget);
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
    title: "Languages",
    pages: [{
        title: "English",
        handler: () => {
            changeLanguage("en");
        }
    },{
        title: "عربي",
        handler: () => {
            changeLanguage("ar");
        }
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
}];

const donwloads = [{
    icon: appleStore,
    url: "https://itunes.apple.com/lb/app/nbk-capital-smartwealth/id1335956057?mt=8",
    key: "apple"
},{
    icon: playStroe,
    url: "https://play.google.com/store/apps/details?id=neo.nbkc.smartwealth",
    key: "android"
}];  

const socialMedia = [{
    icon: facebookIcon,
    url: "https://www.linkedin.com/company/nbk-capital-smartwealth/",
    key: "linkedin"
}, {
    icon: linkedIcon,
    url: "https://www.instagram.com/nbkc.smartwealth/",
    key: "insta"
}, {
    icon: instagramIcon,
    url: "https://twitter.com/nbkcsmartwealth",
    key: "twitter"
}, {
    icon: twitterIcon,
    url: "https://www.facebook.com/nbkc.smartwealth/",
    key: "fb"
}];


const getSocialMedia = () => {
    return (
        <Aux>
            {socialMedia.map(item => <a key={item.key} href={item.url} ><img src={item.icon} alt={item.key}/></a>)}
        </Aux>
    );
};

const getPages = () => {
    return (
        <Aux>
            {pages.map(page => {
                return (
                    <div key={page.title}>
                        <h6>{page.title}</h6>
                        <ul>
                            { getSubPages(page.pages) }
                        </ul>
                    </div>
                )
            })}
        </Aux>
    )
};


const getSubPages = (arrayOfPages) => {
    return (
        arrayOfPages.length ? arrayOfPages.map(page => {
            return (
                <li key={page.title}>
                    <a href={page.url} onClick={page.handler && page.handler}>
                        {page.title}
                    </a>
                </li>
            )
        }) : null
    )
};

const getDownloads = () => {
    return (
        donwloads.map(download => {
            return (
                <a href={download.url} key={download.key}>
                    <img src={download.icon} alt={download.key}/>
                </a>
            )
        })
    )
};

const footer = () => {
    return (
        <Aux>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <a href="nbkcapitalsmartwealth.com">
                                <img className="logo" src={logo} alt="logo"/>
                            </a>
                            <div className="social-media-bar d-flex justify-content-between">
                                { getSocialMedia() }
                            </div>
                        </div>
                        <div className="footer-pages col-md-6 align-items-center d-flex flex-column flex-wrap">
                            { getPages() }
                        </div>
                        <div class="col-md-4  d-flex flex-column ">
                            <div class="download">
                                <h6>Download the app</h6>
                                <div>
                                    { getDownloads() }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 copyright">
                            © NBK Capital SmartWealth
                        </div>
                    </div>
                </div>
            </footer>
        </Aux>
    )
};

export { footer };