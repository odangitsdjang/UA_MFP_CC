import React, { Component } from 'react';

import Header from './header';
import Calories from './calories';
import Content from './content';

export default class Box extends Component {
  render() {
    return (
      <div className="mfp-box">
        <Header/>
        <Calories/>
        <Content/>
      </div> 
    );
  }
}
