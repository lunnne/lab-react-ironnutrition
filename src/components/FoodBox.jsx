import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import FoodList from './FoodList';
import AddFoodForm from './AddFoodForm';

class FoodBox extends Component {
  
  constructor() {
    super();
    this.state = {
      listofFoods: foods,
      showAddForm: false,
      searchValue: '',
    };
  }

  addFoodToList = (food) => {
    const updatedList = [food, ...this.state.listofFoods];
    this.setState({
      ...this.state,
      listofFoods: updatedList,
      showAddForm : false
    });
  };

  handleShowAddForm = () => {
    this.setState({
      ...this.state,
      showAddForm: true,
    });
  };

  handleSearchFood = (event) => {
    const {value} = event.target
    console.log(value);
    this.setState({
      ...this.state,
      searchValue : value
    })
  }

  render() {

    const foodList = this.state.listofFoods
    .filter((item) => {
      return item.name.toLowerCase().startsWith(this.state.searchValue.toLowerCase())
    })
    .map((food) => {
      return <FoodList food={food} />;
    });

    return (
      <>
       <input type="text" value={this.state.searchValue} onChange={this.handleSearchFood} />
        <div>
          { this.state.showAddForm ? ( 
          <AddFoodForm addFoodToList={this.addFoodToList}/>
          ) : ( <button className='btn' onClick={this.handleShowAddForm}>Add Food</button>  
          )}
        </div>
        {foodList}
      </>
    );
  }
}

export default FoodBox;
