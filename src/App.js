import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { hashHistory } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="addIcon">
          <img
            src='addIcon.png'
            alt="add"
            style={{ maxWidth: '10%', borderRadius: '50%', float: 'right' }}
          />
        </div>
          <div className="mainIconContainer">
            <div className="mainIcon">
              <h3>Events</h3>
            </div>
            <div className="mainTwoIcon">
              <div className="mainIcon">
                <h3>People</h3>
              </div>
              <div className="mainIcon">
                <h3>Projects</h3>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
