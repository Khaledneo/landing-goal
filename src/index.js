import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { API_STAGING, API_PRODUCTION } from "./constants/constants";
import axios from "axios";

axios.defaults.baseURL = API_PRODUCTION;
// axios.defaults.headers.common["Authorization"] = "Bearer &IMXU,vSV[@A=SOpeedjE&G~rz|]y$D.gv1h8|1*R{);H}d^TSMJxiy&ujgV)BAk7zg*:@Zz]nbw%DH!";
axios.defaults.headers.common["Authorization"] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6TTVOVE5ETVRWR1FqQkNOa1k0T0VOQlJVUXhOemhCUTBVMk5rRkdSVE5ETlVVd1FUZ3hOUSJ9.eyJpc3MiOiJodHRwczovL25ia2NhcGl0YWxzbWFydHdlYWx0aC5ldS5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDE5Njc1MTc4ODc3MDE3NzQwODMiLCJhdWQiOlsiaHR0cHM6Ly9uYmtjYXBpdGFsc21hcnR3ZWFsdGguZXUuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL25ia2NhcGl0YWxzbWFydHdlYWx0aC5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTQ1MTM5OTE1LCJleHAiOjE1NDUxNDcxMTUsImF6cCI6IjlLUWR4UUU3YTh5TDI0SjNtS1JkeDlQNE5UenhCdmc1Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.aEnTYE-1SgiVtdEvE8WyEaeJaYaJpvFjskFKkxuO95q5rF_a38ZJlwGM4WcMEZkYL4gdd5F40EOCc3S_9y75_ZS6-SZoO8cngoBbjO7jkYbuiTQV7KppD_BGLCpHxzNHKzWoOauWrIGQGXq-Y3LCu3OREEChheomNTz1N2T6tHh5eCig5AvJ8NCP6Q6wsKbFCBd203Udo-JWgLUAYqoQwTEKwwX3M4MWawJiZ6m5HMpSjsf4xghc5qQHkfJJ6TPa-5OYppCU7JIpM4CTCSuVKElzV8MYSXlYfUPti8R-2SltStB_71i6DEuGXUm9e9xgKlpXbhm2bdlVRJdrDsE6Ew";




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
