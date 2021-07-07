import React, { Component } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import BuilderContainer from './containers/BuilderContainer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router
        basename={"/react"}
      >

        <div className="App header-margin">
          <BuilderContainer />
        </div>

      </Router>
    );
  }
}

export default App;
