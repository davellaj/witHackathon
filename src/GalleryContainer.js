import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import GalleryZoomed from './GalleryZoomed';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ['portfolio-pic', 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZjAAAAJDM4Y2ZmYjU0LTI4MjMtNDQ4Ny1iMDBiLTFhMWEzODBmYzY3Yg.jpg'],
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
    if (this.state.zoomedIndex === 0) {
      return;
    }
    const newIndex = this.props.zoomedIndex - 1;
    this.setState({
      arrayIndex: newIndex,
    });
  }

  goRight() {
    if (this.state.zoomedIndex === this.state.data.length - 1) {
      return;
    }
    const newIndex = this.state.zoomedIndex + 1;
    this.setState({
      arrayIndex: newIndex,
    });
  }

  render() {
    return (
      <div className="galleryZoomed">
        <div className="flexZoomedContainer">
          <div className="zoomedPhotoContainer">
            <div className="zoomedNavigation">
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
            <i
              className="zoomedNavigationExit fa fa-times"
              aria-hidden="true"
              alt="close"
              onClick={this.zoom}
            />
            <div>
              <img className="zoomedPhoto" src='portfolio-pic.jpg' alt="large" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(GalleryContainer);
