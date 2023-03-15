console.log("App js running");

var app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
  options: ['One', 'Two'],
};

var template = (
  <div> 
    <h1> {app.title} </h1> 
    { app.subTitle && <p> {app.subTitle} </p> }
    <p> { app.options.length > 0 ? 'Here are your options' : 'No options' } </p>
    <ol>
      <li> one </li>
      <li> two </li>
    </ol>
  </div>
);

var user = {
  name: 'James',
  age: '25',
  location: 'San Diego',
};

function getLocation(location) {
  if(location) {
    return <p> Location: {location} </p>;
  }
}

var template2 = (
  <div> 
    <h1> {user.name ? user.name : 'Anonymous'} </h1> 
    { (user.age && user.age >= 18) && <p> Age: {user.age} </p> }
    { getLocation(user.location) }
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);