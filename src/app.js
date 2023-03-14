console.log("App js running");

var app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
};

var template = (
  <div> 
    <h1> {app.title} </h1> 
    <p> {app.subTitle} </p> 
    <ol>
      <li> one </li>
      <li> two </li>
    </ol>
  </div>
);

var user = {
  name: 'James',
  age: '25',
  location: 'San Diego'
};

var template2 = (
  <div> 
    <h1> {user.name} </h1> 
    <p> Age: {user.age} </p>
    <p> Location: {user.location} </p> 
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);