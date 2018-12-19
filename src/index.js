import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { API_PRODUCTION } from "./constants/constants";
import axios from "axios";

axios.defaults.baseURL = API_PRODUCTION;
axios.defaults.headers.common["Authorization"] = "Bearer &IMXU,vSV[@A=SOpeedjE&G~rz|]y$D.gv1h8|1*R{);H}d^TSMJxiy&ujgV)BAk7zg*:@Zz]nbw%DH!";




axios.interceptors.request.use(request => {
    return request;
},error => {
    console.log(JSON.stringify(error,null,2), "Error!");
    return Promise.reject(error);
});

axios.interceptors.response.use(request => {
    return request;
},error => {
    console.log(JSON.stringify(error,null,2),"Error!");
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
