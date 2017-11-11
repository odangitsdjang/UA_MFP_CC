import React, { Component } from 'react';
const ONE_DAY_OFFSET = (24 * 60 * 60 * 1000);

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      yesterday: null,
      tomorrow: null,
      current: new Date()
    };
  }
  componentWillMount() {
    this.getDate();
  }

  incrementDate() {
    this.setState({
      yesterday: this.state.today,
      today: this.state.tomorrow,
      tomorrow: new Date(this.state.tomorrow.getTime() + ONE_DAY_OFFSET)
    });
    console.log(this);
  }

  decrementDate() {
    this.setState({
      tomorrow: this.state.today, 
      today: this.state.yesterday,
      yesterday: new Date(this.state.yesterday.getTime() - ONE_DAY_OFFSET)
    });
    console.log(this);
  }

  getDate() {
    this.setState({ 
      tomorrow: new Date(this.state.today.getTime() + ONE_DAY_OFFSET), 
      yesterday: new Date(this.state.today.getTime() - ONE_DAY_OFFSET)
    });
  }

  displayDate(date) {
    // offset by one because month 1 - 12 instead of 0 - 11 
    const month = date.getUTCMonth() + 1;  
    const day = date.getUTCDate();
    const daysFrom = (this.state.current.getTime() - date.getTime()) / ONE_DAY_OFFSET; // this probably not right
    return (
      <div className="flex-column">
        <h2>{month}/{day}</h2>
        <h3>{this.dateFromToday(daysFrom)} </h3>
      </div>
    );
  }

  dateFromToday(dayDifference) {
    if (dayDifference === 0) {
      return "Today";
    } else if (dayDifference === 1) {
      return "Yesterday";
    } else if (dayDifference === -1) {
      return "Tomorrow";
    } else if (dayDifference > 0) {
      return `${dayDifference} days ago`;
    } else {
      
      return `${dayDifference * -1} days from today`;
    }
  }

  render() {
    return (
      <div className="dates">
        <i onClick={() => this.decrementDate() } className="material-icons">keyboard_arrow_left</i>
        <div>{ this.displayDate(this.state.yesterday) }</div>
        <div>{ this.displayDate(this.state.today) }</div>
        <div>{ this.displayDate(this.state.tomorrow) }</div>
        <i onClick={() => this.incrementDate()} className="material-icons">keyboard_arrow_right</i>
      </div>
      );
    }
  }
