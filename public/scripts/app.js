'use strict';

var visibility = false;

var app = {
  title: 'Visibility Toggle',
  subText: 'Sup'
};

var appRoot = document.getElementById('app');

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  renderApp();
};

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
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      ' ',
      visibility ? 'Hide details' : 'Show Details',
      ' '
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        ' ',
        app.subText,
        ' '
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
