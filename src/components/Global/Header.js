// Dependencies
import React, {Component } from 'react';
import PropTypes from 'prop-types'; 

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

import { PageHeader } from 'react-bootstrap';


class Header extends Component {

     static propTypes = {
        title: PropTypes.string.isRequired
    };

    render () {
        return (
            <PageHeader>
                <img src = { logo } className = "logo"alt = "logo" /> 
                Programacion Imperactiva  <small>by Dilan Gonzalez </small>
            </PageHeader>
        );
    }
}
export default Header;