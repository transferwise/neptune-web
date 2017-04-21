import React from 'react';
import ReactDOM from 'react-dom';
// TODO: separate bundle for the demo part.
import 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line import/no-extraneous-dependencies
import Docs from './Docs';

ReactDOM.render(<Docs />, document.getElementById('root'));
