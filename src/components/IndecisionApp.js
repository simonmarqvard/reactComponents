import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./modal.js";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  //methods
  clearSelectedOptions = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    var randomNum = Math.floor(Math.random() * this.state.options.length);
    var option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState(prevState => ({
      options: this.state.options.concat(option)
    }));
  };
  //component lifecycle - doesnt work for stateless functional components
  componentDidMount() {
    try {
      console.log("fetching data");
      const options = JSON.parse(localStorage.getItem("options"));

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("saving data");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
    // console.log(prevProps);
    // console.log(prevState);
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const title = "Simon Jensen";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            clearSelectedOptions={this.clearSelectedOptions}
          />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;
