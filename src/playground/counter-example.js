let currentCount = 0;

const increment = () => {
  currentCount++;
  renderCounterApp();
};

const decrement = () => {
  currentCount--;
  renderCounterApp();
};

const reset = () => {
  currentCount = 0;
  renderCounterApp();
};

//console.log(templateTwo);

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {currentCount} </h1>
      <button onClick = { increment } > + 1 </button>
      <button onClick = { reset } > RESET </button>
      <button onClick = { decrement } > - 1 </button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();