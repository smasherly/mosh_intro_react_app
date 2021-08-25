import React, { Component } from "react";

class Counter extends Component {
  state = {
    // this is coming from counters state and getting passed in to each counter this way
    value: this.props.value,
  };

  handleIncrement = () => {
    if (this.state.value < 10) {
      this.setState({ value: this.state.value + 1 });
    } else {
      this.setState({ value: 0 });
    }
  };

  render() {
    console.log(this.props)

    return (
      <div>
        <h4>{this.props.value}</h4>
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;



