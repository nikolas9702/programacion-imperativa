import './components/Global/css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';




import React from 'react';
import { render  } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';


import App from './components/App';
// import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(< Hello />, document.getElementById('root'));
render(
	<Router>
		<AppRoutes/>
	</Router>
	,
	document.getElementById('root'));
registerServiceWorker();
