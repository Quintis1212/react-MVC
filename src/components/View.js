import React, { Component } from "react";

export default class View extends Component {
  state = {
    value: "string",
  };

  changeState() {
    this.setState({
      val: "string324234",
    });
  }

  render() {
    return (
      <div>
        <p>this is {this.props.value}</p>
        <button onClick={()=>this.props.func({val:"icustomj"})}  >button 2</button>

      </div>
    );
  }
}
