import React from "react";

function input(props) {
  return (
    <div>
      <input type="text" onChange={props.zmena} value={props.input}></input>
      <p>Length of input: {props.length}</p>
    </div>
  );
}

export default input;
