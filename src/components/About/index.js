// Se cargan los componentes de react
import React , { Component } from 'react';

// Se define la clase About esta estiende del component de react 
class About  extends Component {
	// se cargan las rutas para el programa
	render () {
		// se retorna la  vista 
		return (
			// div about
			<div className="About">
				// se coloca el titulo 
				<h1>Acerca de.</h1>
			</div>
		);
	}
}

export default About 