class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Sub Title</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button> What should I do? </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
      Options
        <ol>
         <Option />
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render (){
    return (
      <div>
        Option
      </div>
    );
  }
}

class AddOption extends React.Component {
  render(){
    return (
      <div>
        <input></input>
        <button> +Add </button>
      </div>
    );
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );