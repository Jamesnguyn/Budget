let visibility = false;

const app = {
  title: 'Visibility Toggle',
  subText: 'Sup',
}

const appRoot = document.getElementById('app');

const toggleVisibility = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1> { app.title } </h1>
      <button onClick={toggleVisibility}> { visibility ? 'Hide details' : 'Show Details' } </button>
      {visibility && (
        <div>
          <p> { app.subText } </p>
        </div>
      )}
    </div>
  ); 
  ReactDOM.render(template, appRoot);
}

renderApp();