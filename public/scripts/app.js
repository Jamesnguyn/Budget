'use strict';

console.log("App js running");

var app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
  options: []
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

var numbers = [55, 101, 1000];

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
    numbers.map(function (number) {
      return React.createElement(
        'p',
        { key: number },
        'Number: ',
        number * 2,
        ' '
      );
    }),
    React.createElement(
      'ol',
      null,
      app.options.map(function (string) {
        return React.createElement(
          'li',
          { key: string },
          ' ',
          string,
          ' '
        );
      })
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
