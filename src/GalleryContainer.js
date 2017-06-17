import React, { Component } from 'react';
import './GalleryContainer.css';
import Button from 'react-button'

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
              {name: 'Jamie Davella',
               url: 'portfolio-pic.jpg',
               languages: 'Javascript, React, React Native'
             },
               {name: 'Beth Sterling',
               url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZjAAAAJDM4Y2ZmYjU0LTI4MjMtNDQ4Ny1iMDBiLTFhMWEzODBmYzY3Yg.jpg',
               languages: 'Javascript, CSS, HTML, UI',
               interest: 'Looking to learn and a build a project with react'
             }
             ],
      arrayIndex: 0,
    };

    this.closeZoom = this.closeZoom.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  closeZoom() {
    // hashHistory.push('/')
    console.log('go back to home screen')
  }

  goLeft() {
    if (this.state.arrayIndex === 0) {
      return;
    }
    const newIndex = this.props.arrayIndex - 1;
    this.setState({
      arrayIndex: newIndex,
    });
  }

  goRight() {
    if (this.state.arrayIndex === this.state.data.length - 1) {
      return;
    }
    const newIndex = this.state.arrayIndex + 1;
    this.setState({
      arrayIndex: newIndex,
    });
  }

  render() {
    return (
      <div>
        <div>
          <img
            src={this.state.data[this.state.arrayIndex].url}
            style={{ maxWidth: '10%', borderRadius: '50%' }}
        />
          <p>{this.state.data[0].languages}</p>
          <p>intersted in working on the weekends to build a side project. Interested in public transportation</p>
        </div>
        <div>
          <i
                className="fa fa-3x white fa-arrow-left zoomedNavigationLeft"
                onClick={this.goLeft}
                aria-hidden="true"
          />
          <i
                    className="fa fa-3x white fa-arrow-right zoomedNavigationRight"
                    onClick={this.goRight}
                    aria-hidden="true"
          />
        </div>
        <Button>Return to home</Button>
      </div>
  )}
}

export default GalleryContainer;
