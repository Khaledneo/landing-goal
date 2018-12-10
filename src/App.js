import React, { Component } from 'react';
import './App.css';
import Box from "./containers/box/box"
import { header as Header } from "./components/header/header";
import Main from "./containers/main/main-container";

class App extends Component {
  render() {
    return (
      <Main>
        <Header/>
        <Box/>
      </Main>
    );
  }
}

export default App;
