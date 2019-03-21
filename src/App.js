import React, { Component, Fragment } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { BottomBar, Header } from './Components/Layouts';
import Page from './Components/Pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Page />
        <BottomBar />
      </Fragment>
    );
  }
}

export default App;
