console.log("App js running");

const app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
  options: ['One', 'Two'],
};

const template = (
  <div> 
    <h1> { app.title } </h1> 
    { app.subTitle && <p> {app.subTitle} </p> }
    <p> { app.options.length > 0 ? 'Here are your options' : 'No options' } </p>
    <ol>
      <li> one </li>
      <li> two </li>
    </ol>
  </div>
);

let currentCount = 0;

const increment = () => {
  return currentCount++;
};

const decrement = () => {
  return currentCount--;
};

const reset = () => {
  return currentCount = 0;
};

const templateTwo = (
  <div>
    <h1>Count: {currentCount} </h1>
    <button onClick = { increment } > + 1 </button>
    <button onClick = { reset } > RESET </button>
    <button onClick = { decrement } > - 1 </button>
  </div>
);

console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);