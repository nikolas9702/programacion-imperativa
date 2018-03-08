// Se cargan los componentes de react
import React, { Component } from 'react';
// Se cargan los prototyppes que se usan para pasar informacion entre atributos del componentees
import PropTypes from 'prop-types'; 
// se cargan estilos para el footer
import './css/Footer.css';
// se crean la clase Footer para la estrutura que va ha tener el footer bisalemnte
class Footer extends Component {
	// se incialzan los proptypes para cargar los atributos 
	static propTypes = {
		// se define que valor se va a optener de lo atributos
        copyright: PropTypes.string
    };

    // se cargan las rutas para el programa
	render() {
		// se define una constante para las propiedades
		const {copyright = 'Niko 1997' } = this.props;
		// se retornan la vista del footre
		return (
			// div footer 
			<div className="Footer">
				{/*elelmentos de la vista del footer*/}
				<p>Copyright.. No a la pirateria </p>
				<p>{copyright}</p>
			</div>
		);
  }
}
// se exporta el componente de Footer
export default Footer;
