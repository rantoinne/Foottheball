import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Navigate from './Components/Navigate';

class App extends Component {
  static defaultProps={
    clientID: 'hQpiqPs5jirgvp59Jyqs3suNH5ifdqdl',
    domain: 'rantoinne.auth0.com'
  }
  render() {
    return (
      <div className="App">
        <div>
        <Header />
        <hr />
        <Navigate /><hr />
        <div id="bless"><Github /></div>
        </div>
        </div>
    );
  }
}

export default App;
