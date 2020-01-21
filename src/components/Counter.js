import React from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount, resetCount } from "../actions/index";

class MainComponent extends React.Component {
  render() {
      
    const { count, increaseCount, decreaseCount, resetCount } = this.props;
    console.log(this.props);
    return (
      <div id="main">
        <div id="wrapper">
          <button id="minus" onClick={decreaseCount}>
            -
          </button>
          <input value={count} disabled />
          <button id="plus" onClick={increaseCount}>
            +
          </button>
          <br />
          <button id="reset" onClick={resetCount}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  increaseCount,
  decreaseCount,
  resetCount
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
