import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css'
import '../node_modules/react-bootstrap'

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
