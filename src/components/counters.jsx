import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // counters object is an array which holds ids and initial values of each counter
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          // this is each counter's props VVV
          <Counter key={counter.id} value={counter.value} id={counter.id}>
            <h1>Coutner #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
