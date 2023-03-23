class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState( () => {
      return {
        options: []
      };
    });
  }

  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    alert(selectedOption);
  }

  handleAddOption(option) {
    if(!option){
      return 'Enter Valid Value';
    }
    else if (this.state.options.indexOf(option) > -1){
      return 'Option Already Exists';
    }
    this.setState( (prevState) => {
      return {
        options: prevState.options.concat(option) 
      };
    });
  }

  render() {
    const title = 'Indecision App';
    const subTitle = 'this is subTitle';

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePickOption={this.handlePickOption}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subTitle }</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          disabled={!this.props.hasOptions} 
          onClick={this.props.handlePickOption}
        > 
          What should I do? 
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
      <button onClick={this.props.handleDeleteOptions}> REMOVE ALL </button>
        <ol>
          {
            this.props.options.map( (option) => <Option key={option} optionText={option}/> )
          }
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render (){
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState( () => {
      return { error };
    });
  }

  render(){
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> +Add </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );