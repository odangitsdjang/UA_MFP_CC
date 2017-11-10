import React, { Component } from 'react';

export default class Calories extends Component {
  render() {
    return (
      <div className="calories">
        <div>Total Calories: {13}</div>
        <div>{20} calories {"above"} your goal</div>
      </div>
    );
  }
}
