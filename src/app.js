class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: props.options
    };
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  componentDidUpdate(prevPropsm, prevState){
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleDeleteOptions() {
    this.setState( () => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState( (prevState) => ({
      options: prevState.options.filter( (option) => optionToRemove !== option )
    }))
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
    this.setState( (prevState) => ({ 
      options: prevState.options.concat(option) 
    }));
  }

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
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
  <div>
    <h1>{ props.title }</h1>
    { props.subTitle && <h2> { props.subTitle } </h2> }
  </div>
  );
}

Header.defaultProps = {
  title: 'Indecision App'
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions} 
        onClick={props.handlePickOption}
      > 
        What should I do? 
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
    
      <button onClick={props.handleDeleteOptions}>REMOVE ALL</button>

      <ol>
        {
          props.options.map( (option) => (
            <Option
              key={option} 
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </ol>

    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={ (e) => { 
          props.handleDeleteOption(props.optionText);
        }}
      >
        REMOVE
      </button>
    </div>
  );
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

    this.setState( () => ({ error }));
  }

  render(){
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> Add Option </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );