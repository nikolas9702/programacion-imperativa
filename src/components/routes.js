
import React from 'react';
import { Route , Switch  } from 'react-router-dom';

import About from './components/About';


const AppRoutes = () => 
	<App>
		<Switch>
			<Route exact path='/about' component={About} />
			
		</Switch>
	</App>


export default AppRoutes;