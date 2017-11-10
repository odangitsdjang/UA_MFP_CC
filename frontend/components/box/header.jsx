import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="dates">
        <div>Yesterday</div>
        <div>Today</div>
        <div>Tomorrow</div>
      </div>
    );
  }
}
