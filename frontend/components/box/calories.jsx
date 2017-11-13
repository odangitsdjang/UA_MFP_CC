import { connect } from 'react-redux';
import { addFood } from '../../actions/food_actions';
import React, { Component } from 'react';
import Modal from 'react-modal';

import Select from 'react-select';

const DAILY_CALORIE_LIMIT = 2500;

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,110,196,.95)',
    zIndex: 10
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none'
  }
};

const options = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'snacks', label: 'Snacks/Other' },
];

const cleanState = {
  meal: "",
  foodName: "",
  date: "",
  calories: "",
  username: "",
  errors: [],
  modalIsOpen: false
};

class Calories extends Component {
  constructor(props) {
    super(props);

    this.state = cleanState;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
      }); 
  }

  updateSelect() {
    return e => this.setState({
        meal: e.value
      });
  }

  renderErrors() {
    return this.state.errors.map((err, i) => <li key={i}> {err}</li>);
  }

  addingFood(e) {
    const { currentUser, foods } = this.props;
    let noError = 1;
    const errors = [];
    e.preventDefault();
    // Do checks to make sure the inputs were valid, this would look different if there's a backend.
    // Checking specifically to see if there is an input in every input category
    Object.keys(this.state).forEach(function(key) {
      if (key === "errors" || key === "modalIsOpen" || key ==="username")
        return;
      else {
        if (!this.state[key].length) {
          noError = 0;
          errors.push(`${key} cannot be empty`);
        }
      }
    }.bind(this));

    // Add it to the store; in production level this would instead make an API 
    // call to the backend to save the information to the database 
    if (noError) {
      const food = {
        meal: this.state.meal,
        foodName: this.state.foodName,
        date: this.state.date,
        calories: parseInt(this.state.calories),
        username: currentUser,
      };
      this.props.addFood(food); // this adds the food to the redux store
      this.setState(cleanState);  // reset state after properly adding the food
    } else {
      this.setState({errors});
    }
  }
  // This method assumes that we're only getting foods from the current user fed into the store
  calculateCalories() {
    const currentDayFoods = this.props.foods[this.props.currentDate];
    if (currentDayFoods) 
      return currentDayFoods.map(obj => obj.calories).reduce((accumulator, value) => accumulator + value);
  }

  render() {
    const dayCalories = this.calculateCalories() || 0;
    let difference = dayCalories - DAILY_CALORIE_LIMIT;
    let aboveOrBelow = "under";
    
    if (difference > 0) {
      aboveOrBelow = "above";
      if (document.readyState === "complete") {
        document.querySelector('.green').style.color = 'red';
      }
    } else {
      difference *= -1;
      aboveOrBelow = "under";
      if (document.readyState === "complete") {
        document.querySelector('.green').style.color = 'green';
      }
    }
    return (
      <div className="calories">

        <div className="right">
          <i onClick={this.openModal} className="material-icons add">add</i>
        </div>
        <div className="middle">
          <div><h1>Total Calories: {dayCalories} </h1></div>
          <div className="green">You ate {difference} calories {aboveOrBelow} your goal!</div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="uploadModal"
        >
          <form className="food-modal-form" onSubmit={ (e)=> this.addingFood(e) }>
            <div className="food-modal-title">
              <h2>Add Food!</h2>
            </div>
            <div className="food-inputs"> 
              <ul>{ this.renderErrors() }</ul>
              <input onChange={this.update('foodName')} value={this.state.foodName} placeholder="What you ate" />
              <Select
                name="meal"
                value={this.state.meal}
                options={options}
                onChange={this.updateSelect()}
              />
              <input type="date" onChange={this.update('date')} value={this.state.date} placeholder="What day is this for?" />
              <input type="number" onChange={this.update('calories')} value={this.state.calories} placeholder="Approximate calories" />
              <input type="submit" value="Add food!" />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentDate: state.currentDate,
  currentUser: state.currentUser.username,
  foods: state.foods
});

const mapDispatchToProps = dispatch => ({
  addFood: (food) => dispatch(addFood(food))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calories);
