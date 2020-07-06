import React from "react";
import "./CharComponent.css";

function charComponent(props) {
  return (
    <div
      className="CharStyle"
      onClick={() => {
        props.deleteOne(props.id);
      }}
    >
      <p>{props.text}</p>
    </div>
  );
}

export default charComponent;
