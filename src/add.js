import React, { Component } from 'react';
import Button from 'react-button'

class Add extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <Button>Projects</Button>
       <Button>Events</Button>
       <div>Title: </div>
       <div>Skills Needed: </div>
       <div>Description: </div>
       <div>Meeting times: </div>
       <div>Preferred location: </div>
      </div>
  )}
}

export default Add;
