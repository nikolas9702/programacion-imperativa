// Se cargan los componentes de react
import React from 'react';
// Se cargan los componentes de react-dom  que se utilixza para gestiona el contenido
import ReactDOM from 'react-dom';
// Se cargan el archivp de estilos para el index
import './index.css';
// Se cargan el componente App para su respetiva introduccion en el codigo
import App from './App';
// Se cargan servicesoeorke para la que la informacion se carge automaticamente
import registerServiceWorker from './registerServiceWorker';

// Se aplica toda la informacion generada por los componentes al elemento root del html
ReactDOM.render(<App />, document.getElementById('root'));
// Se carga el service worker
registerServiceWorker();
