console.log("App js running");

const app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
  options: ['One', 'Two'],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const onRemoveAllClick = () => {
  app.options = [];
  renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div> 
      <h1> { app.title } </h1> 
      { app.subTitle && <p> {app.subTitle} </p> }
      <p> { app.options.length > 0 ? 'Here are your options' : 'No options' } </p>
      <p> { app.options.length } </p>
      <button onClick={onRemoveAllClick}>Remove All</button>
      <ol>
        <li> one </li>
        <li> two </li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();