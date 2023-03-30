import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

class IndecisionApp extends React.Component {
  state = {
    options: []
  };

  handleDeleteOptions = () => {
    this.setState( () => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState( (prevState) => ({
      options: prevState.options.filter( (option) => optionToRemove !== option )
    }))
  };

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    alert(selectedOption);
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
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
};

export default IndecisionApp;