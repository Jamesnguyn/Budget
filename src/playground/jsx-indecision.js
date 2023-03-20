const app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
  options: [],
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

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const selectedOption = app.options[randomNum];
  alert(selectedOption);
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
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>Choose</button>
      <button onClick={onRemoveAllClick}>Remove All</button>

      <ol>
      {
        app.options.map( (string) => {
          return <li key={string}> {string} </li>;
        })
      }
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