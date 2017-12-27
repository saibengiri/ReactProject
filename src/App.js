import React, { Component } from 'react';
//import logo from './image/logo.png';
import Header from './Components/Header'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>Leave Management System</h1>
        </header>
        
      </div>*/
      <div>
        <Header/>
        {/* <Content/> */}
      </div>
    );
  }
}

export default App;
