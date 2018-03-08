// Se cargan los componentes de react
import React, {Component } from 'react';
// Se cargan los prototyppes que se usan para pasar informacion entre atributos del componentees
import PropTypes from 'prop-types'; 
// se cargan el svg del logo 
import logo from './images/logo.svg';
// se cargan estilos para el header
import './css/Header.css';
// Se cargan los componentes de react-bootstrap
import { PageHeader } from 'react-bootstrap';

// se crean la clase Header para componente de react
class Header extends Component {
    // se incialzan los proptypes para cargar los atributos 
     static propTypes = {
        // se define que valor se va a optener de lo atributos
        title: PropTypes.string.isRequired
    };

    // se cargan las rutas para el programa
    render () {
        // se retornan la vista del header
        return (
            // componenet page header
            <PageHeader>
                {/*imagenes del logo*/}
                <img src = { logo } className = "logo"alt = "logo" />
                {/*titulos del programa*/}
                Programacion Imperactiva  <small>by Dilan Gonzalez </small>
            </PageHeader>
        );
    }
}
// se exporta el componente de Header
export default Header;