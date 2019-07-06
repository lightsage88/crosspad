import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './components/Context';
import './scss/crosspad.scss';

import '../node_modules/nes.css/css/nes.min.css';
import '../node_modules/nes.css/css/nes-core.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
