import React, { Component } from "react";
import ListItem from "./ListItem.js";
import NewTask from "./NewTask.js";
import ListFilter from "./ListFilter.js";

class MyList extends Component {
  constructor(props) {
    super();
    this.state = {
      toDoItemArray: props.list,
      // newItem: "",
      filterValue: "",
      newTask: ""
    };
    // this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
  }

  handleNewTask(evt) {
    // evt.preventDefault()
    let newTask = evt.target.value;
    this.setState({
      newTask
    });
    // console.log(newTask);
  }

  addNewTask() {
    // evt.preventDefault()
    this.setState((previousState, props) => {
      const newToDoArray = previousState.toDoItemArray.slice();
      newToDoArray.push(previousState.newTask);
      return {
        toDoItemArray: newToDoArray,
        newTask: ""
      };
    });
  }

  handleFiltering(evt) {
    const filterValue = evt.target.value;
    this.setState((previousState, props) => {
      const filterToDos = props.list.filter(toDo =>
        toDo.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
      );
      return {
        toDoItemArray: filterToDos,
        filterValue: filterValue
      };
    });
  }
  //This will clear the list
  //the function clearList takes an event.
  clearList(e) {
    console.log("clearing list");
    //This setState changes the state of the toDoItemArray which is the list and changes it to empty once the event goes through.
    this.setState({
      toDoItemArray: []
    });
  }

  ////How i did it.
  // newItemChange(e) {
  //   this.setState({
  //     newItem: e.target.value
  //   });
  // }
  //
  // addItem(e) {
  //   e.preventDefault();
  //   this.setState({
  //     newItem: e.target.value,
  //     toDoItemArray: this.state.toDoItemArray.concat([this.state.newItem])
  //   });
  // }
  ////This handles the change in the input field.
  // handleFilterChange(event) {
  //   event.preventDefault();
  //   const filterValue = event.target.value;
  //   this.setState((prevState, props) => {
  //     const filteredList = props.list.filter(item =>
  //       item.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  //     );
  //     return {
  //       toDoItemArray: filteredList,
  //       filterValue
  //     };
  //   });
  // }
  // //This will clear the list
  // //the function clearList takes an event.
  // clearList(e) {
  //   console.log("clearing list");
  //   //This setState changes the state of the toDoItemArray which is the list and changes it to empty once the event goes through.
  //   this.setState({
  //     toDoItemArray: []
  //   });
  // }

  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ));

    return (
      <div>
        <h1>Things I just really need to get done:</h1>
        <div />
        <ListFilter onChange={this.handleFiltering} />
        <ul>{todoItems}</ul>

        <NewTask
          value={this.state.newTask}
          onChange={this.handleNewTask}
          onClick={this.addNewTask}
        />

        {/* <form>
          <input
            type="text"
            placeholder="Type an item here"
            onChange={e => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={e => this.addItem(e)}>Add it!</button>
        </form> */}

        {/* <label>Filter: </label>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        /> */}
      </div>
    );
  }
}

export default MyList;
