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
        <ol>
         Options Component Here
        </ol>
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

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));