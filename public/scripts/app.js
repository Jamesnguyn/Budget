'use strict';

console.log("App js running");

var app = {
  title: 'Indecision App',
  subTitle: 'paragraph'
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
  React.createElement(
    'p',
    null,
    ' ',
    app.subTitle,
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

var user = {
  name: 'James',
  age: '25',
  location: 'San Diego'
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    user.name,
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' Age: ',
    user.age,
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' Location: ',
    user.location,
    ' '
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
