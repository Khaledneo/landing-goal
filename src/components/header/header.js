import React from "react";
import Aux from "../../Hoc/Aux";
import "./header.scss";
import logo from "../../assets/logo-black.svg";

const englishText = /^[A-Za-z]+$/;

const leftMenu = [
    {
        id: "wsw",
        title: "Why SmartWealth",
        url:"https://nbkcapitalsmartwealth.com/why-smart-wealth"
    },
    {
        id: "pricing",
        title: "Pricing",
        url:"https://nbkcapitalsmartwealth.com/pricing"
    },
    {
        id: "learn",
        title: "Learn",
        url:"https://nbkcapitalsmartwealth.com/learn"
    },
    {
        id: "help",
        title: "Help",
        url:"http://help.nbkcapitalsmartwealth.com/"
    }
];

const rightMenu = [
    {
        id: "localization",
        title: "عربي",
        url:"/"
    },
    {
        id: "login",
        title: "Login",
        url:"https://my.nbkcapitalsmartwealth.com/"
    },
    {
        id: "get_started",
        title: "Get started",
        url:"https://my.nbkcapitalsmartwealth.com/questionnaire-1"
    },
];

const getLeftMenu = () => {
    return (
    <ul className="navbar-nav mr-auto">
        {leftMenu.map((page)=> {
                return  <li className="nav-item" key={page.id}><a className="nav-link" href={page.url}>{page.title}</a></li>
        })}
    </ul>
    )
};

const getRightMenu = () => {
    return (
        <form className="from-inline" action="">
            {rightMenu.map((page)=>{
                return <a className={ englishText.test(page.title) ?  "btn  btn-outline-light rounded-0" : "btn cairo  btn-outline-light rounded-0" } key={page.id} href={page.url}>{page.title}</a>
            })}
        </form>
    )
};

const header = () => {
    return (
        <Aux>
           <nav className="navbar-light navbar navbar-expand-md ">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className="logo" src={logo} alt="logo"/>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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