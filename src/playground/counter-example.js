class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState( (prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState( () => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}> + 1</button>
        <button onClick={this.handleMinusOne}> - 1 </button>
        <button onClick={this.handleReset}> RESET </button>
      </div>
    );
  }
}

ReactDOM.render( <Counter />, document.getElementById('app') );

// let currentCount = 0;

// const increment = () => {
//   currentCount++;
//   renderCounterApp();
// };

// const decrement = () => {
//   currentCount--;
//   renderCounterApp();
// };

// const reset = () => {
//   currentCount = 0;
//   renderCounterApp();
// };

// //console.log(templateTwo);

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {currentCount} </h1>
//       <button onClick = { increment } > + 1 </button>
//       <button onClick = { reset } > RESET </button>
//       <button onClick = { decrement } > - 1 </button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();