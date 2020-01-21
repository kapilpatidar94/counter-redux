import React, { Component } from "react";
// import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { tech: "React " };
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return (
      <div>
        <div>{this.state.tech}</div>
      </div>
    );
  }
}

export default App;
