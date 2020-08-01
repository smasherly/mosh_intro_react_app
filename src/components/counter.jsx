import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  handleIncrement = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: 0 });
    }
  };

  render() {
    return (
      <div>
        <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
