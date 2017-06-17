import React, { Component } from 'react';
import './GalleryContainer.css';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
              {
                name: 'Margaret Hamilton',
                url: 'm.jpg',
                languages: 'C, Go, Ruby',
                bio: "Looking to meet up once a week at night to work on my side projects. I currently don’t need help but it would be nice to have company.",
              },
              {
                name: 'Ada Lovelace',
                url: 'al.jpg',
                languages: 'HTML/CSS, JavaScript, Python’',
                bio: 'Interested in education tech. Would like to meet up for a Sunday and build a project.'
             },
             {
               name: 'Grace Hopper',
               url: 'g.jpg',
               languages: 'Java, JavaScript, C',
               bio: 'Interested in learning Go. Would like to meet up on the weekend to watch YouTube videos and tutorials to build a project with Go.'
            },
            {
              name: 'Anita Borg',
              url: 'ab.jpg',
              languages: 'HTML/CSS, JavaScript, Ruby',
              bio: 'Recent bootcamp grad looking to improve my skills by building projects or work on open source projects. It would be nice to have someone to bounce ideas and questions off of or pair program.'
           },
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
        <div className="content">
          <img
            src={this.state.data[this.state.arrayIndex].url}
            style={{ maxWidth: '100%', borderRadius: '50%' }}
        />
          <p>{this.state.data[this.state.arrayIndex].languages}</p>
          <p>{this.state.data[this.state.arrayIndex].bio}</p>
        </div>
        <div className="left-arrow">
          <i
                className="fa fa-3x white fa-arrow-left zoomedNavigationLeft"
                onClick={this.goRight}
                aria-hidden="true"
          />
          </div>
          <div className="right-arrow">
          <i
                  className="fa fa-3x white fa-arrow-right zoomedNavigationRight"
                  onClick={this.goRight}
                  aria-hidden="true"
          />
        </div>
      </div>
  )}
}

export default GalleryContainer;
