import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  // state = {
  //   // this is coming from counters state and getting passed in to each counter this way
  //   //had to add counter before value because changed to passing just counter in parent
  //   value: this.props.counter.value,
  // };

  // handleIncrement = () => {
  //   if (this.state.value < 10) {
  //     this.setState({ value: this.state.value + 1 });
  //   } else {
  //     this.setState({ value: 0 });
  //   }
  // };

  render() {
    console.log("a counter  - rendered");

    return (
      <div>
        <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          //had to add counter before id because changed to passing just counter in parent
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn -sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
