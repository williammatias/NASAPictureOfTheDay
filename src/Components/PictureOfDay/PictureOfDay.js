import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './PictureOfDay.css';


class PictureOfDay extends Component {

    constructor(props) {
        super(props);
        this.props.loadNASAPictureOfDay();
    }

  render() {
    return (
      <div className="App">
          <img src={this.props.pictureOfDay.hdurl} width={300} height={300}/>
          <p>
              {this.props.pictureOfDay.explanation}
          </p>
          {/*<Particles />*/}
      </div>
    );
  }
}

export default PictureOfDay;
