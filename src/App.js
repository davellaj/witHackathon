import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { hashHistory } from 'react-router';


class App extends Component {
  render() {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this.openPeople = this.openPeople.bind(this);
    }

    openPeople() {
      this.setState({
        showComponent: true,
      });
    }

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

                <a href="#" onClick={this.openPeople}>People</a>
                {this.state.showComponent ? <NewComponent /> : null}
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
