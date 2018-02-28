import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from '../src/components/Global/Footer';
import Header from '../src/components/Global/Header';

import items from '../src/components/Data/menu';
import Main from '../src/components/Main';

import { BrowserRouter } from 'react-router-dom'

// import AppRoutes from './components/routes';


import { Button } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <AppPrimary />
      </BrowserRouter>
    );
  }
}


const AppPrimary = () => (
  <div>
    <Header title="2018" />
    <Main />
    <Footer />
  </div>
)

export default App;
