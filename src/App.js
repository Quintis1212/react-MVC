import "./App.css";
import View from "./components/View";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.setState = this.setState.bind(this); // <- try by adding this line
  }
  state = { val: "class" };
  render() {
    return (
      <div className="App">
        <View value={this.state.val} func={this.setState} />
        <button onClick={() => this.setState({ val: "bUTTON" })}>
          bUTTON 23
        </button>
      </div>
    );
  }
}

export default App;
