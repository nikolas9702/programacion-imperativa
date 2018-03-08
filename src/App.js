// Se cargan los componentes de react
import React, { Component } from 'react';
// se cargan los estilos para app.css
// import './App.css';
// se cargan el componentes Footer por default carga el index
import Footer from '../src/components/Global/Footer';
// se cargan el componentes Header por default carga el index
import Header from '../src/components/Global/Header';
// se cargan el componentes Main por default 
import Main from '../src/components/Main';
// se cargan los cmponentes de react bootstrap
import { BrowserRouter } from 'react-router-dom'
// Se define la clase App esta estiende del component de react 
class App extends Component {
  // se cargan las rutas para el programa
  render() {
    return (
      // se instancia el component para las rutas
      <BrowserRouter>
        {/*// se llama a las constante del contenido  */}
        <AppPrimary />
      </BrowserRouter>
    );
  }
}

// se crea la constante que de como se va a mostar el esquerlo de la pagina
const AppPrimary = () => (
  <div>
    {/*se cargan el componentes Header por default carga el index y se envian los parametros pertinentes*/}
    <Header title="2018" />
    {/*// se cargan el componentes Main por default carga el index<*/}
    <Main />
    {/*// se cargan el componentes Footer por default carga el index<*/}
    <Footer />
  </div>
)

export default App;
