import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from "./components/HelloWorld";
import Prueba from "./components/Prueba";

const app = document.getElementById('app');
ReactDOM.render(
	<div>
		<HelloWorld/>
		<Prueba/>
	</div>
	, app);