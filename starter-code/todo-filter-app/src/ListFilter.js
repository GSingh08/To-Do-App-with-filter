import React from "react";

const ListFilter = props => (
  <div>
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      name="task-filter"
      placeholder="filter"
    />
  </div>
);

export default ListFilter;
