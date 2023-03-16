'use strict';

console.log("App js running");

var app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
  options: ['One', 'Two']
};

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
  )
);

var currentCount = 0;

var increment = function increment() {
  return currentCount++;
};

var decrement = function decrement() {
  return currentCount--;
};

var reset = function reset() {
  return currentCount = 0;
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    currentCount,
    ' '
  ),
  React.createElement(
    'button',
    { onClick: increment },
    ' + 1 '
  ),
  React.createElement(
    'button',
    { onClick: reset },
    ' RESET '
  ),
  React.createElement(
    'button',
    { onClick: decrement },
    ' - 1 '
  )
);

console.log(templateTwo);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
