import React from "react";

import Top from "./Top";
import Bottom from "./Bottom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedValue: "top",
      // imgUrl: "https://image.flaticon.com/icons/svg/860/860802.svg",

      styleTop: {
        visibility: "hidden",
      },

      styleBottom: {
        visibility: "hidden",
      },

      styleImg: {
        visibility: "visible",
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
        styleImg: { visibility: "visible" },
      });
    }
    // show bottom
    else {
      this.setState({
        styleTop: { visibility: "hidden" },
        styleBottom: { visibility: "visible" },
      });
    }
  };

  // on mouse over
  hideToolTip = () => {
    this.setState({
      styleTop: { visibility: "hidden" },
      styleBottom: { visibility: "hidden" },
      styleImg: { visibility: "hidden" },
    });
  };

  render() {
    const { showImage, imgUrl, styleImg } = this.state;
    return (
      <div className="App">
        <div className="tool-tip">
          {/* top Component */}
          <br />
          <br />

          <Top style={this.state} />

          <br />
          <br />
          <button
            className="main"
            onMouseOver={this.showToolTip}
            onMouseOut={this.hideToolTip}
          >
            Download
          </button>

          <img src={imgUrl} className="img" style={styleImg} />
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
