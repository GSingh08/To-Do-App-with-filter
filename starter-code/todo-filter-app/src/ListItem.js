import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id={this.props.doThis} />
        <label htmlFor={this.props.doThis}> {this.props.doThis} </label>
      </div>
    );
  }
}

export default ListItem;
