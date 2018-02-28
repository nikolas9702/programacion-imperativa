import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../components/About/";
import Home from "../components/Home/";
import Circuito from "../components/Circuito/";
import '../components/Main.css';

import { Navbar , Nav , NavItem , MenuItem , NavDropdown  } from 'react-bootstrap';


const Main = () => (
  <Router>
    <div>
    	<Navbar inverse collapseOnSelect >
			<Navbar.Header>
			    <Navbar.Brand>
			    	<Link to="/">Inicio</Link>
			    </Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
  		<Navbar.Collapse>
				<Nav>
{/*				<NavItem eventKey={1} href="#" >
				  Homr
				</NavItem>
				<NavItem eventKey={1} >
				  <Link to="/" className="Nav__link">Home</Link>
				</NavItem>*/}
				<NavItem eventKey={1} >
				  <Link to="/circuito" className="Nav__link">Circuito</Link>
				</NavItem>
				<NavItem eventKey={1} >
				  <Link to="/circuito" className="Nav__link">Conversor</Link>
				</NavItem>
{/*				<NavItem eventKey={2} href="#">
				  <Link to="/about" className="Nav__link">About</Link>
				</NavItem>*/}
				{/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				  <MenuItem eventKey={3.1}>Action</MenuItem>
				  <MenuItem eventKey={3.2}>Another action</MenuItem>
				  <MenuItem eventKey={3.3}>Something else here</MenuItem>
				  <MenuItem divider />
				  <MenuItem eventKey={3.4}>Separated link</MenuItem>
				</NavDropdown>*/}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/circuito" component={Circuito} />
    </div>
  </Router>
);



export default Main;