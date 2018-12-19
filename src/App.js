import React, { Component } from 'react';
import './App.css';
import {goalBox as GoalBox} from "./containers/box/goal-box";
import {footer as Footer} from "./components/footer/footer";
import { header as Header } from "./components/header/header";
import Main from "./containers/main/main-container";

class App extends Component {
  render() {
    return (
      <Main>
        <Header/>
        <GoalBox/>
        <Footer/>
      </Main>
    );
  }
}

export default App;
