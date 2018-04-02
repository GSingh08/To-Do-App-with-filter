import React, { Component } from "react";
import ListItem from "./ListItem.js";

class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.list
    }
  }


  render() {

    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I just really need to get done:</h1>
        <ul>
          {todoItems}
        </ul>

        <button> Finished the list!</button>
      </div>
    )
  }
}

export default MyList
