import React, { Component } from "react";

//cc
class Counter extends Component {
  //object contains any data this property needs
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  render() {
  return (
    <div>
      {this.state.tags.length === 0 && "Please create a new tag."}
      {this.renderTags()}
    </div>
  )}
} 

export default Counter;
