import React from "react";

const NewTask = props => (
  <div>
    <input
      type="text"
      onChange={props.onChange}
      name="new-task"
      placeholder="enter a new task"
    />
    <button onClick={props.onClick}>Add!</button>
  </div>
);

export default NewTask;
