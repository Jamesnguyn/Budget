import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'TESTING');

ReactDOM.render(template, document.getElementById('app'));