import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const toDos = ["Buy ice cream", "Eat ice cream", "Go have beer"];
ReactDOM.render(<App list={toDos} />, document.getElementById('root'));
