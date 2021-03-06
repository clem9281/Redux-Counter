import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  incrementIfOdd = count => {
    // Stretch Problem: Implement an increment function that
    // only increments if the counter value is odd
    if (count % 2 !== 0) {
      this.props.increment(count);
    }
  };

  incrementAsync = count => {
    // Stretch Problem: Implement an increment function that
    // increments after waiting for one second

    //idk it seemed like they would want us to do this with a promise since we practiced that last week

    new Promise(resolve => {
      setTimeout(() => {
        resolve(count);
      }, 1000);
    }).then(res => {
      return this.props.increment(res);
    });
  };

  render() {
    // Fill in the two button onClick methods
    // Upon clicking these buttons, the count
    // should decrement or increment accordingly
    return (
      <p>
        Clicked: {this.props.count} times
        <button
          onClick={() => {
            /* Fill me in */
            this.props.increment(this.props.count);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            /* Fill me in */
            this.props.decrement(this.props.count);
          }}
        >
          -
        </button>
        {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
        <button onClick={() => this.incrementIfOdd(this.props.count)}>
          Increment if odd
        </button>
        <button onClick={() => this.incrementAsync(this.props.count)}>
          Increment async
        </button>
      </p>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
