import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { API_URL } from "./constants/constants";
import axios from "axios";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Authorization"] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6TTVOVE5ETVRWR1FqQkNOa1k0T0VOQlJVUXhOemhCUTBVMk5rRkdSVE5ETlVVd1FUZ3hOUSJ9.eyJpc3MiOiJodHRwczovL25ia2NhcGl0YWxzbWFydHdlYWx0aC5ldS5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDE5Njc1MTc4ODc3MDE3NzQwODMiLCJhdWQiOlsiaHR0cHM6Ly9uYmtjYXBpdGFsc21hcnR3ZWFsdGguZXUuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL25ia2NhcGl0YWxzbWFydHdlYWx0aC5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTQ1MDU4MTA4LCJleHAiOjE1NDUwNjUzMDgsImF6cCI6IjlLUWR4UUU3YTh5TDI0SjNtS1JkeDlQNE5UenhCdmc1Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.EBGkNGww9tN6e6kUVpvsC39UvqLGs_HqsSInZmZgdAR9sx6k4Jlfd3Ny_6aTwjyimyfTOq6jvfgiXxM1KgaEPQJu8owgtuPn6qnrj1p7KUWYz20CuS4Drmt6Cel4-P8aByLr9niAc7eHsvBOhSeYAjv_-Iv7v17Bd3WdibTOCZVB_n5wpKHr4ZsU0ao4Jqtu-9rNOFVE1QGgzp5P9NP8xvFZ8OSKXI2c9I7z4rv0DfUJJanekSGxFxz-OTDCN8jQvRQKac2fxNkKxTQ_wqZi6JPWCrLJ6TM-_bvCLEfD_bTIgPKS1o5jARnTdf0xgjvb4dEIvY__ORzNTH6eBC-U9Q";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";


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
