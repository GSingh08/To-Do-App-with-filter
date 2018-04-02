import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const toDos = ["Buy ice cream", "Eat ice cream", "Go have beer"];
ReactDOM.render(<List list={toDos} />, document.getElementById('root'));
