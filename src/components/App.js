import React from "react";

import Top from "./Top";
import Bottom from "./Bottom";
import Left from "./Left";
import Right from "./Right";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedValue: "top",

      styleTop: {
        visibility: "hidden",
      },

      styleLeft: {
        visibility: "hidden",
      },

      styleRight: {
        visibility: "hidden",
      },

      styleBottom: {
        visibility: "hidden",
      },
    };
  }

  // check if to select top or bottom
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ selectedValue: event.target.value });
  };

  // function handling state to show
  showToolTip = (e) => {
    // show top
    if (this.state.selectedValue === "top") {
      this.setState({
        styleTop: { visibility: "visible" },
        styleBottom: { visibility: "hidden" },
        styleLeft: { visibility: "hidden" },
        styleRight: { visibility: "hidden" },
      });
    }
    // show bottom
    else if (this.state.selectedValue === "bottom") {
      this.setState({
        styleTop: { visibility: "hidden" },
        styleBottom: { visibility: "visible" },
        styleLeft: { visibility: "hidden" },
        styleRight: { visibility: "hidden" },
      });
    }
    // show left
    else if (this.state.selectedValue === "left") {
      this.setState({
        styleTop: { visibility: "hidden" },
        styleBottom: { visibility: "hidden" },
        styleLeft: { visibility: "visible" },
        styleRight: { visibility: "hidden" },
      });
    }
    // show right
    else {
      this.setState({
        styleTop: { visibility: "hidden" },
        styleBottom: { visibility: "hidden" },
        styleLeft: { visibility: "hidden" },
        styleRight: { visibility: "visible" },
      });
    }
  };

  // on mouse over
  hideToolTip = () => {
    this.setState({
      styleTop: { visibility: "hidden" },
      styleBottom: { visibility: "hidden" },
      styleLeft: { visibility: "hidden" },
      styleRight: { visibility: "hidden" },
    });
  };

  render() {
    return (
      <div className="App">
        <div className="tool-tip">
          {/* top Component */}
          <br />
          <br />
          <Top style={this.state} />
          <br />
          <br />
          <Left style={this.state} />
          &nbsp; &nbsp;
          <button
            className="main"
            onMouseOver={this.showToolTip}
            onMouseOut={this.hideToolTip}
          >
            Download
          </button>
          &nbsp; &nbsp;
          <Right style={this.state} />
          <br />
          <br />
          {/* bottom component */}
          <Bottom style={this.state}></Bottom>
          <br />
          <br />
        </div>

        <select id="dropdown" onChange={this.handleChange}>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>

        <br />
        <br />
        <br />

        <div className="selected">
          Tooltip direction is :{" "}
          <span className="selected-state">{this.state.selectedValue}</span>
        </div>
      </div>
    );
  }
}

export default App;
