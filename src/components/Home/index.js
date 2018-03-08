// Se cargan los vcomponentes de react
import React , { Component } from 'react';
// Se define la clase Home esta estiende del component de react
class Home  extends Component {
	// responde el div con el valor que va a tomar la vista 
	render () {
		return (
			<div>
				{/*Se coloca el titulo que va ha mostrar la pagina */}
				<h1>Pagina de Inicio</h1>
			</div>
		);
	}
}

// exporto el componente para que se pueda importar en otros componentes
export default Home 