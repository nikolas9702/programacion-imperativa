// Se cargan los vcomponentes de react
import React , { Component } from 'react';
// se cargan los cmponentes de react bootstrap
import {  Grid , Row , Col , Well ,Button , FormControl , FormGroup , ControlLabel , formControlsSelect  } from 'react-bootstrap';

import Nodo from './Nodo';

class Arbol  extends Component {
	/**
	 * [constructor Se crea el contrutor del componente]
	 * @return {[void]} [Se definen los valores por defeto del aplicativo y los llamado a las funciones ]
	 */
	constructor () {
		// Para detectar que es el contrutor
		super();
		// se define la variable state para almacenar las variables pertinentes 
		this.state = {
			valor : "10",
			resultadoinorden: "",
			resultadopostorden: "",
			resultadopreorden: ""
		};
		// se instancian los eventos del clikc del boton
		this.handleCountClick = this.handleCountClick.bind(this);
		// se instancia el evento para almacenar los valores que se van digitanto 
		this.handlechanged = this.handlechanged.bind(this);

		var arbol = null;
	}


	validacionesRecorrerAdicionar ( formula  , tipo) {

		this.adicionarNodo(formula , tipo)
	}


	recorreJerarquia (formula) {
		var jerarquia = ['/','^','*','+','-'];
		var formulatmp = formula;
		var intermedio = 0;
		var palabra = [];
		for (var j = 0; j < jerarquia.length-1 ; j++) {
			for (var i = 0; i < formulatmp.length ; i++) {
				if (jerarquia[j] == formulatmp[i]) {
					console.log(formulatmp.slice(i,i+1));
					if (formulatmp.length != 1) {
						this.validacionesRecorrerAdicionar(formulatmp.slice(i,i+1) , 0);
						this.recorreJerarquia (formulatmp.slice(i,i+1));
						formulatmp = formulatmp.slice(i,i+1);
					}
					console.log(formulatmp.length);
					console.log(formulatmp.slice(0,(i)))
					if (formulatmp.slice(0,(i)).length != 1) {
						this.validacionesRecorrerAdicionar(formulatmp.slice(0,(i)) , 0);
						this.recorreJerarquia (formulatmp.slice(0,(i)));
						formulatmp = formulatmp.slice(0,(i));
					}
					console.log(formulatmp.slice((i+1),(formulatmp.length)))
					if (formulatmp.slice((i+1),(formulatmp.length)).length != 1) {
						this.validacionesRecorrerAdicionar(formulatmp.slice((i+1),(formulatmp.length)) , 1);
						this.recorreJerarquia (formulatmp.slice((i+1),(formulatmp.length)));
						formulatmp = formulatmp.slice((i+1),(formulatmp.length));
					}

					// this.adicionarNodo(formulatmp.slice(i,i+1) , 0)
					// palabra.push(formulatmp.slice(0,(i)));

					// this.adicionarNodo(formulatmp.slice(0,(i)) , 0)
					// //palabra.push(formulatmp.slice(i,i+1));
					
					// palabra.push(formulatmp.slice((i+1),(formulatmp.length)));
					// this.adicionarNodo(formulatmp.slice((i+1),(formulatmp.length)) , 1)

					// formulatmp = formulatmp.slice(0,(i));
				}
			}
		}
		console.log(palabra)
	}

	/**
	 * [handleCountClick Se captura el evento para rocesar la data]
	 */
	handleCountClick (e) {
		// se llama a la funcion circuitovalores para que realice el procesamiento del circuito
		console.clear();
		
		this.recorreJerarquia("((x+2*y)^y)/(4+x-3)");
		

		// for (var i = 0; i < formula.length ; i++) {
		// 	for (var j = 0; j < jerarquia.length ; j++) {
		// 		if (typeof palabra[intermedio] == "undefined") {palabra[intermedio]  = '';}
		// 		if (formula[i] == jerarquia[j]) {
		// 			intermedio = 1
		// 			if (typeof palabra[intermedio] == "undefined") {palabra[intermedio]  = '';}
		// 			palabra[intermedio] += formula[i];
		// 			intermedio++;
		// 		}
		// 		else {
		// 			palabra[intermedio] += formula[i];
		// 		}
		// 	}
		// 	console.log(formula[i]);
		// }
		// console.log(palabra);
		console.log(this.arbol);

		// this.adicionarNodo(this.state.valor)
		// console.clear();
		// 
		//this.mostrar(this.arbol)
		// this.preOrden (this.arbol);
		// this.inOrden (this.arbol);
		// this.postOrden (this.arbol);
	}

	// evento para almacenar los datos selecionados
	handlechanged (e) {
		// se valida que sea entrada 
		if (e.target.id === 'valor') {
			// se almacena el tipo de dato que ingresa
			this.setState ({valor : e.target.value});
		}
	}

	adicionarNodo (valor , rama ) {
		//  Se define la variables que van a almacenar los cambios en la variable segun el circuito

		if (this.arbol == null) {
				this.arbol = new Nodo( valor );
			}
			else {
				var aux = this.arbol ;
				while (aux != null && aux.valor != valor) {
					if (/*aux.valor > valor*/ rama === 0 ) {
						if (aux.sigIzquierda == null)  
							aux.sigIzquierda = new Nodo( valor );
						else 
							aux = aux.sigIzquierda;
					}
					else if (/*aux.valor < valor*/  rama === 1 )  {
						if (aux.sigDerecha == null)
							aux.sigDerecha = new Nodo( valor );
						else 
							aux = aux.sigDerecha;
					}
				}
			}
	}

	mostrar (arbol) {
		if (arbol != null) {
			console.log(arbol.valor);
			this.mostrar(arbol.sigIzquierda);
			this.mostrar(arbol.sigDerecha);
		}
		else {
			return true;
		}
	}

	// preOrden (raizes) {
	// 	if (raizes == null) {
	// 		return ;
	// 	}
	// 	else {
	// 		this.setState ({resultadopreorden : raizes.valor + " - " +  this.state.resultadopreorden });
	// 		this.preOrden(raizes.sigIzquierda);
	// 		this.preOrden(raizes.sigDerecha);
	// 	}
	// }

	// inOrden (raizes) {
	// 	if (raizes == null) {
	// 		return ;
	// 	}
	// 	else {

	// 		this.inOrden(raizes.sigIzquierda);
	// 		this.setState ({resultadoinorden : raizes.valor + " - " + this.state.resultadoinorden });
	// 		this.inOrden(raizes.sigDerecha);
	// 	}
	// }

	// postOrden (raizes) {
	// 	if (raizes == null) {
	// 		return ;
	// 	}
	// 	else {
	// 		this.postOrden(raizes.sigIzquierda);
	// 		this.postOrden(raizes.sigDerecha);
	// 		this.setState ({resultadopostorden :  raizes.valor + " - " + this.state.resultadopostorden });
	// 	}
	// }

	/**
	 * [render Se carga toda la vista que va ha tener la pagina y se crea los campos para digitar los valores ]
	 * @return {[type]} [La vista con los datos solicitados ]
	 */
	render () {
		// se crea el div contenedor de los elemtos
		return <div className="container">
			{/*se crea el div con la clase well para adicionarles estilos al elemtos */}
			<Well>
				{/*se crea una frilla para adicinar la informacion*/}
				<Grid>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							{/*Se crea un campo input para almacenar el dato de a */}
							<FormGroup>
								{/*Se muestra el titulo para adicionar el valor de a*/}
								<ControlLabel><h1>Valor</h1></ControlLabel>{' '}
								<FormControl type="text" id="valor" placeholder="Numero" value={this.state.valor} onChange={this.handlechanged}  />
							</FormGroup>
						</Col>
					</Row>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							{/*Se adiciona un elemento en el cual se va a mostrar el resultado del procedimiento*/}
							<center> <h1 > Resultado InOrden : {this.state.resultadoinorden}</h1> </center>
						</Col>
					</Row>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							{/*Se adiciona un elemento en el cual se va a mostrar el resultado del procedimiento*/}
							<center> <h1 > Resultado PostOrden : {this.state.resultadopostorden}</h1> </center>
						</Col>
					</Row>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							{/*Se adiciona un elemento en el cual se va a mostrar el resultado del procedimiento*/}
							<center> <h1 > Resultado PreOrden : {this.state.resultadopreorden}</h1> </center>
						</Col>
					</Row>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							<Button bsStyle="success" bsSize="large" block id="procesar" onClick={this.handleCountClick}>Adicionar</Button>
						</Col>
					</Row>

					<Row className="show-grid">
						<Col xs={12} md={11}>
							<Button bsStyle="success" bsSize="large" block id="procesar" onClick={this.handleCountClick}>Mostrar</Button>
						</Col>
					</Row>
				</Grid>
			</Well>
		</div>
	}
}
// exporto el componente para que se pueda importar en otros componentes
export default Arbol 