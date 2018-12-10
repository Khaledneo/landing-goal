import React from "react";
import Aux from "../../Hoc/Aux";
import "./header.scss";
import logo from "../../assets/logo-black.svg";

var leftMenu = [
    {
        id: "wsw",
        title: "Why SmartWealth",
        url:"nbkcapitalsmartwealth.com/why-smart-wealth"
    },
    {
        id: "portfolio",
        title: "Portolio",
        url:"nbkcapitalsmartwealth.com/why-smart-wealth"
    },
    {
        id: "pricing",
        title: "Pricing",
        url:"nbkcapitalsmartwealth.com/why-smart-wealth"
    }
];

var rightMenu = [
    {
        id: "localization",
        title: "English",
        url:"nbkcapitalsmartwealth.com/why-smart-wealth"
    },
    {
        id: "login",
        title: "Login",
        url:"nbkcapitalsmartwealth.com/why-smart-wealth"
    },
    {
        id: "get_started",
        title: "Get started",
        url:"nbkcapitalsmartwealth.com/why-smart-wealth"
    },
];

const getLeftMenu = () => {
    return (
    <ul className="navbar-nav">
        {leftMenu.map((page)=> {
                return  <li className="nav-item" key={page.id}><a className="nav-link" href={[page.url]}>{page.title}</a></li>
        })}
    </ul>
    )
};

const getRightMenu = () => {
    return (
        <form className="from-inline" action="">
            {rightMenu.map((page)=>{
                return <a className="btn  btn-outline-light rounded-0" key={page.id} href={page.url}>{page.title}</a>
            })}
        </form>
    )
};

const header = () => {
    return (
        <Aux>
           <nav className="navbar-light navbar navbar-expand-md ">
            <div className="container">
                <a className="navbar-brand" href="nbkcapitalsmartwealth.com">
                    <img className="logo" src={logo} alt="logo"/>
                </a>
                <div className="navbar-collapse" id="navbarNav">
                    {getLeftMenu()}
                    {getRightMenu()}
                </div>
            </div>
    {/* <div className="container">
        <a className="navbar-brand" href="<%= contents%>./"><img className="logo" src="/assets/icons/logo.svg" alt="logo"></a>
        <button className="hmbrgr demo navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-labelledby="navBar" aria-expanded="false" aria-label="Toggle navigation"></button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item  transition-all">
                    <a claclassNamess="nav-link" href="${{^isUrl}}$<%= contents%>${{/isUrl}}$${{fileName}}$"><span className="sr-only">(current)</span></a>
                </li>
            </ul>
            <form className="form-inline" action="">
                <button type="button"  role="button" aria-labelledby="language" aria-label="${{index.keys.login}}$" className="btn mr-3 btn-link transparent switchLang font-arabic rounded-0">${{index.keys.lng}}$</button>
                <a className="btn mr-3 btn-outline-light rounded-0" href="https://my.nbkcapitalsmartwealth.com/">
                </a>
                <a className="btn btn-primary rounded-0" href="https://my.nbkcapitalsmartwealth.com/questionnaire-1"></a>
            </form>
        </div>
    </div> */}
</nav>
        </Aux>
    )
};

export { header };