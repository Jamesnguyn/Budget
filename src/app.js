class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subTitle = 'this is subTitle';
    const options = ['1', '2', '4'];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}> What should I do? </button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
    alert('Removed All');
  }

  render(){
    return (
      <div>
      <button onClick={this.handleRemoveAll}> REMOVE ALL </button>
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
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if(option){
      alert('added');
    } 
  }

  render(){
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button> +Add </button>
      </form>

      </div>
    );
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );