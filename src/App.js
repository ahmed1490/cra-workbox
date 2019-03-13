import React, { Component, Fragment } from 'react';
import './App.css';
import { Footer, Header } from './Components/Layouts';
import Page from './Components/Pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Page />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
