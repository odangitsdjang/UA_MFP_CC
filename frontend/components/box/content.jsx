import { connect } from 'react-redux';
import { removeFood } from '../../actions/food_actions';
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
    let selected = [];
    if (currentDayFoods) {
      currentDayFoods.forEach(food => {
        if (food.meal === meal) {
          selected.push(food);
        }
      });
    }
    if (selected.length) {
      return selected.map((food, i) =>  { return (
        <div key={i}>
          <div className="right">
              <i onClick={this.removeFood(food)} className="material-icons">remove_circle</i>
          </div>
          <div className="middle">
            <h2> {`${food.foodName}, ${food.calories} calories`}  </h2> 
          </div>
        </div>
        );});
    } else {
      return <h2 className="middle">N/A</h2>;
    }
  }

  removeFood(food) {
    return (e) => {
      this.props.removeFood(food);
    };
  }

  renderFoodsInOrder() {
    const wtf = this.selectMeal("breakfast");
    console.log(wtf);
    return (
      <div className="foods">
        {this.selectMeal("breakfast") || "N/A" }
        {this.selectMeal("lunch") || "N/A"}
        {this.selectMeal("dinner") || "N/A"}
        {this.selectMeal("snacks") || "N/A"}
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

const mapDispatchToProps = dispatch => ({
  removeFood: (food) => dispatch(removeFood(food))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
