// Dependencies
import React, {Component } from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

import { PageHeader } from 'react-bootstrap';


class Header extends Component {

     static propTypes = {
        title: PropTypes.string.isRequired
    };

    /*render() {

        const { title , items} = this.props;

        return ( 
            <div className = "Header" > 
                <header className = "Logo" > 
                    <img src = { logo } className = "logo" alt = "logo" /> 
                    <h1 className = "title" >{title}  </h1> 
                    <ul className="Menu">
                        {items && items.map((item, key ) => <li key={key}> <Link to={item.url} >{item.title}</Link> </li> )}
                    </ul>
                </header> 
            </div>);
    }*/
    render () {
        return (
            <PageHeader>
              Programacion Imperactiva  <small>by Dilan Gonzalez </small>
            </PageHeader>
        );
    }
}
export default Header;