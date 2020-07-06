import React, { Component } from "react";
import "./App.css";

import Input from "./Input";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
  state = { text: "", length: null };

  changeHandler = (event) => {
    const changed = event.target.value;
    const arrText = changed.split("");
    const dlzka = arrText.length;
    console.log(changed, dlzka);
    this.setState({ text: changed, length: dlzka });
  };

  handleDelete = (id) => {
    const manipulateArray = this.state.text.split("");
    const indexOfDeleted = id;
    manipulateArray.splice(indexOfDeleted, 1);

    const newText = manipulateArray.join("");
    const newLength = manipulateArray.length;
    this.setState({ text: newText, length: newLength });
  };

  render() {
    const liStyle = {
      color: "red",
    };

    return (
      <div className="App">
        <Input
          zmena={this.changeHandler}
          input={this.state.text}
          length={this.state.length}
        />

        <ValidationComponent dlzka={this.state.length} />
        {this.state.text.split("").map((oneLetter, index) => {
          return (
            <CharComponent
              key={index}
              text={oneLetter}
              id={index}
              deleteOne={this.handleDelete}
            />
          );
        })}
        <ol>
          <li style={liStyle}>
            75Jozef wrote: I have done it!!! Somehow, but did it!
          </li>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
