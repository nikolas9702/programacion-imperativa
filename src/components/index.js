// Se cargan los componentes de react
import React from 'react';
// Se cargan los componentes de react-dom para renderizar la vista
import { render  } from 'react-dom';
// Se cargan los vcomponentes de react-routes-dom y llaman componentes especificos
import { BrowserRouter as Router } from 'react-router-dom';
// se cargan las routes del menu
import AppRoutes from './routes';
// Secarga el coponente principal APP
import App from './components/App';
// Se importa el servicio para trabajar el socket 
import registerServiceWorker from './registerServiceWorker';

// Se procesa toda la vista y componentes que esta tenga implicitos
render(
	// Se Carga la ruta 
	<Router>
		{/*Se cargan el routedor de ometo*/}
		<AppRoutes/>
	</Router>
	,
	// se selleciona el elemtno root del dom principal
	document.getElementById('root'));
// se aranca el socket del aplicativo
registerServiceWorker();
