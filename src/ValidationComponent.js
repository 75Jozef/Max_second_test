import React from "react";

function validationComponent(props) {
  if (props.dlzka < 5) {
    return <h6>Text too short, enter min 5 letters!</h6>;
  }
  return <h3>Text length is OK!</h3>;
}

export default validationComponent;
