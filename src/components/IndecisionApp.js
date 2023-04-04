import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState( () => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState( (prevState) => ({
      options: prevState.options.filter( (option) => optionToRemove !== option )
    }));
  };

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];

    this.setState( () => ({
      selectedOption: selectedOption
    }));
  };

  handleAddOption = (option) => {
    if(!option){
      return 'Enter Valid Value';
    }
    else if (this.state.options.indexOf(option) > -1){
      return 'Option Already Exists';
    }
    this.setState( (prevState) => ({ 
      options: prevState.options.concat(option) 
    }));
  };

  handleClearSelectedOption = () => {
    this.setState( () => ({
      selectedOption: undefined
    }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if(options){
        this.setState( () => ({options}));
      }
    }
    catch (e) {
      // Do nothing
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
  };

  render() {
    const title = 'Indecision App';
    const subTitle = 'this is subTitle';

    return (
      <div>
        <Header subTitle={subTitle} />

        <div className="container">
          <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
          />

          <div className="widget">
            <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />

            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>

          <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />

        </div>
      </div>
    );
  }
};

export default IndecisionApp;