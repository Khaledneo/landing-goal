import React, { Component } from 'react';
import './App.css';
import Goal from "./containers/goal/goal-calculator";
import { header as Header } from "./components/header/header";
import Main from "./containers/main/main-container";

class App extends Component {
  render() {
    return (
      <Main>
        <Header/>
      </Main>
    );
  }
}

export default App;
