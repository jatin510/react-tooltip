import React from "react";

export default function Top(props) {
  console.log(props.style);

  return (
    <button className="tool-tip-top" style={props.style.styleTop}>
      File Size : 20 MB
    </button>
  );
}
