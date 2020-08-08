import React from "react";

import Top from "./Top";
import Bottom from "./Bottom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showImage: false,

      selectedValue: "top",
      imgUrl: "https://image.flaticon.com/icons/svg/860/860802.svg",

      styleTop: {
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
    });
  };

  showDownloadImage = () => {
    this.setState({ showImage: true });
    console.log("show img :", this.state.showImage);
  };

  hideDownloadImage = () => {
    this.setState({ showImage: false });
  };

  render() {
    const { showImage, imgUrl } = this.state;
    return (
      <div className="App">
        <div>
          {/* top Component */}

          <Top style={this.state} />
          <br />
          <button
            className="main"
            onMouseOver={() => {
              this.showToolTip();
              this.showDownloadImage();
            }}
            onMouseOut={() => {
              this.hideToolTip();
              this.hideDownloadImage();
            }}
          >
            Download
          </button>
          {/* {(() => {
            if (showImage) return <img src={imgUrl} className="img" />;
            // if (showImage) return <div>hello</div>;
          })()} */}

          <img src={imgUrl} className="img" />
          <br />

          {/* bottom component */}
          <Bottom style={this.state}></Bottom>
        </div>

        <select id="dropdown" onChange={this.handleChange}>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>

        <br />
        <br />
        <br />
        <div className="selected">
          Selected value is :{" "}
          <span className="selected-state">{this.state.selectedValue}</span>
        </div>
      </div>
    );
  }
}

export default App;
