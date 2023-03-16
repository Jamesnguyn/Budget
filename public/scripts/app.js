'use strict';

console.log("App js running");

var app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
  options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var onRemoveAllClick = function onRemoveAllClick() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      ' ',
      app.title,
      ' '
    ),
    app.subTitle && React.createElement(
      'p',
      null,
      ' ',
      app.subTitle,
      ' '
    ),
    React.createElement(
      'p',
      null,
      ' ',
      app.options.length > 0 ? 'Here are your options' : 'No options',
      ' '
    ),
    React.createElement(
      'p',
      null,
      ' ',
      app.options.length,
      ' '
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAllClick },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        ' one '
      ),
      React.createElement(
        'li',
        null,
        ' two '
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
