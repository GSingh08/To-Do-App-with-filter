import React, { Component } from 'react';
import List from './List';

const toDos = ["Buy ice cream", "Eat ice cream", "Go have beer"];

class App extends Component {
  render() {
    return (
      <List list={toDos} />
    )
  }
}

export default App;
