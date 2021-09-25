import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    // console.log("counters - rendered");

    const { counters, onReset, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          // this is each counter's props VVV
          <Counter
            key={counter.id}
            onDelete={onDelete}
            //this passes value and id props so they don't have to be listed separately
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
