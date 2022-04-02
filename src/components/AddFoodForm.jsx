import React, { Component } from 'react';

class AddFoodForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    };
  }

  // handleChanges = () => {
  //   const {value, name} = event.target
  //   this.setState({
  //     ...this.state,
  //     [name] : value 
  //   })
  // }



  handleName = (event) => {
    const { value } = event.target;
    this.setState({
      ...this.state,
      name: value,
    });
  };

  handleCalories = (event) => {
    const { value } = event.target;
    this.setState({
      ...this.state,
      calories: value,
    });
  };

  handleImage = (event) => {
    const { value } = event.target;
    this.setState({
      ...this.state,
      image: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    this.props.addFoodToList({
      ...this.state,
      id: `${Math.random() * 1000}`,
    });    
    // this.props.showAddForm()
    
    this.setState({
      name: '',
      calories: '',
      image: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={this.handleName} name="name" value={this.state.name}/>
        <label>Calories</label>
        <input type="text" onChange={this.handleCalories} name="calories" value={this.state.calories}/>
        <label>image</label>
        <input type="text" onChange={this.handleImage} name ="image" value={this.state.image} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddFoodForm;
