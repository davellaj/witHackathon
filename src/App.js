import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryContainer from './GalleryContainer'
import Add from './add'
import Button from 'react-button'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        showOptions: true,
        showComponent: false,
        showAddComponent: false,
      };
      this.openPeople = this.openPeople.bind(this);
      this.handleAddClick = this.handleAddClick.bind(this);
    }

    openPeople() {
      this.setState({
        showComponent: true,
      });
    }

    handleAddClick() {
      this.setState({
        showAddComponent: true,
      })
    }
  render() {


    return (
      <div className="App">
          <div className="mainIconContainer">
            <div className="mainIcon">
              <Button>Events</Button>
            </div>
            <div className="mainTwoIcon">
              <div className="mainIcon">

                <Button onClick={this.openPeople}>People</Button>

                {this.state.showComponent ? <GalleryContainer /> : null}
              </div>

              <div className="mainIcon">
                <Button>Projects</Button>
              </div>
            </div>
        </div>
        <Button className="addButton" onClick={this.handleAddClick}>Add</Button>
        {this.state.showAddComponent ? <Add /> : null}
      </div>
    );
  }
}

export default App;
