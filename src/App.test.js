// Se cargan los componentes de react
import React from 'react';
// Se cargan los componentes de react-dom  que se utilixza para gestiona el contenido
import ReactDOM from 'react-dom';
// Se cargan el componente App para su respetiva introduccion en el codigo
import App from './App';

// se genera para el testear el codigo
it('renders without crashing', () => {
	// se crea una variable constante para obytener el elemento div
  const div = document.createElement('div');
  // se renderiza el app en div
  ReactDOM.render(<App />, div);
  // no se compone el componente
  ReactDOM.unmountComponentAtNode(div);
});
