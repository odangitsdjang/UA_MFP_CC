import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="left-column">
          <h2>Breakfast</h2>
          <h2>Lunch</h2>
          <h2>Dinner</h2>
          <h2>Snacks/Other</h2>
        </div>
        <div className="foods">
          stuff
        </div>
      </div>
    );
  }
}
