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
        id: "pricing",
        title: "Pricing",
        url:"nbkcapitalsmartwealth.com/why-smart-wealth"
    },
    {
        id: "learn",
        title: "Learn",
        url:"nbkcapitalsmartwealth.com/why-smart-wealth"
    },
    {
        id: "help",
        title: "Help",
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
    <ul className="navbar-nav mr-auto">
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
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarNav">
                        {getLeftMenu()}
                        {getRightMenu()}
                    </div>
                </div>
            </nav>
        </Aux>
    )
};

export { header };