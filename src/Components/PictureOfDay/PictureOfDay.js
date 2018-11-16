import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './PictureOfDay.css';


class PictureOfDay extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

  render() {
    return (
      <div className="App">
          <Particles />
      </div>
    );
  }
}

export default PictureOfDay;
