import { connect } from 'react-redux';
import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: "",
      lunch: "",
      dinner: "",
      snacks: []
    };
    this.renderFoodsInOrder = this.renderFoodsInOrder.bind(this);
    this.selectMeal = this.selectMeal.bind(this);
  }
  
  selectMeal(meal) {
    const currentDayFoods = this.props.foods[this.props.currentDate];
    if (currentDayFoods) {
      currentDayFoods.forEach(food => {
        if (food.meal === meal) {
          console.log(`${food.foodName}: ${food.calories} calories`);
          return `${food.foodName}: ${food.calories} calories`;
        }
      });
    }
  }

  renderFoodsInOrder() {
    return (
      <div className="foods">
        <h2>{console.log(this.selectMeal("breakfast")) }</h2>
        <h2>{this.selectMeal("lunch") || ""}</h2>
        <h2>{this.selectMeal("dinner") || ""}</h2>
        <h2>{this.selectMeal("snacks") || ""}</h2>
      </div>
    );
  }
  render() {
    console.log(this.props.foods);    
    return (
      <div className="content">
        <div className="left-column">
          <h2>Breakfast</h2>
          <h2>Lunch</h2>
          <h2>Dinner</h2>
          <h2>Snacks/Other</h2>
        </div>
        { this.renderFoodsInOrder()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentDate: state.currentDate,
  foods: state.foods
});

export default connect(
  mapStateToProps,
  null
)(Content);
