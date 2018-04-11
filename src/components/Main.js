// Se cargan los componentes de react
import React from "react";
// Se cargan los vcomponentes de react-routes-dom y llaman componentes especificos
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// se cargan el componentes About por default carga el index
import About from "../components/About/";
// se cargan el componentes Home por default carga el index
import Home from "../components/Home/";
// se cargan el componentes Circuito por default carga el index
import Circuito from "../components/Circuito/";
// se cargan el componentes Convercion por default carga el index
import Convercion from "../components/Convercion/";
// se cargan los estilos para main.css
import '../components/Main.css';
// se cargan los cmponentes de react bootstrap
import { Navbar , Nav , NavItem   } from 'react-bootstrap';
/**
 * [Se crea una constante para el menu]
 */
const Main = () => (
	// se define el routedor del menu
  <Router>
    <div>
    	{/*navbar es el menu inverso y que se deplegable cuado es reponse */}
    	<Navbar inverse collapseOnSelect >
			<Navbar.Header>
				{/*Se define el elemento pricipal el que va a retonar al home de la pagina */}
			    <Navbar.Brand>
			    	{/*Se define la ruta que va a redirigir este en especifico*/}
			    	<Link to="/">Inicio</Link>
			    </Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
		{/*se define el resto de los elementos del menu*/}
  		<Navbar.Collapse>
			<Nav>
			<NavItem eventKey={1} >
			   {/*Se define la ruta que va a redirigir este en especifico*/}
			  <Link to="/circuito" className="Nav__link">Circuito</Link>
			</NavItem>
			<NavItem eventKey={1} >
			   {/*Se define la ruta que va a redirigir este en especifico*/}
			  <Link to="/convercion" className="Nav__link">Conversor</Link>
			</NavItem>
			</Nav>
		</Navbar.Collapse>
		</Navbar>
	{/*Se define a que componete se van ha llamar mediante las rutas*/}
		{/*se llama al componente de Home*/}
      <Route exact path="/" component={Home} />
      	{/*se llama al componente de About*/}
      <Route path="/about" component={About} />
  		{/*se llama al componente de Circuito*/}
      <Route path="/circuito" component={Circuito} />
      	{/*se llama al componente de Convercion*/}
      <Route path="/convercion" component={Convercion} />
    </div>
  </Router>
);



export default Main;