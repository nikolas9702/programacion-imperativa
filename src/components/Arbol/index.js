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
	/**
	 * [handleCountClick Se captura el evento para rocesar la data]
	 */
	handleCountClick (e) {
		// se llama a la funcion circuitovalores para que realice el procesamiento del circuito
		console.clear();
		this.adicionarNodo(this.state.valor)
		this.mostrar()
		this.preOrden (this.arbol);
		this.inOrden (this.arbol);
		this.postOrden (this.arbol);
	}

	// evento para almacenar los datos selecionados
	handlechanged (e) {
		// se valida que sea entrada 
		if (e.target.id === 'valor') {
			// se almacena el tipo de dato que ingresa
			this.setState ({valor : e.target.value});
		}
	}

	adicionarNodo (valor) {
		//  Se define la variables que van a almacenar los cambios en la variable segun el circuito

		if (this.arbol == null) {
				this.arbol = new Nodo( valor );
			}
			else {
				var aux = this.arbol ;
				while (aux != null && aux.valor != valor) {
					if (aux.valor > valor ) {
						if (aux.sigIzquierda == null)  
							aux.sigIzquierda = new Nodo( valor );
						else 
							aux = aux.sigIzquierda;
					}
					else if (aux.valor < valor)  {
						if (aux.sigDerecha == null)
							aux.sigDerecha = new Nodo( valor );
						else 
							aux = aux.sigDerecha;
					}
				}
			}
	}

	mostrar () {
		// console.log(this.arbol );
	}

	preOrden (raizes) {
		if (raizes == null) {
			return ;
		}
		else {
			this.setState ({resultadopreorden : raizes.valor + " - " +  this.state.resultadopreorden });
			this.preOrden(raizes.sigIzquierda);
			this.preOrden(raizes.sigDerecha);
		}
	}

	inOrden (raizes) {
		if (raizes == null) {
			return ;
		}
		else {
			this.inOrden(raizes.sigIzquierda);
			this.setState ({resultadoinorden : raizes.valor + " - " + this.state.resultadoinorden });
			this.inOrden(raizes.sigDerecha);
		}
	}

	postOrden (raizes) {
		if (raizes == null) {
			return ;
		}
		else {
			this.postOrden(raizes.sigIzquierda);
			this.postOrden(raizes.sigDerecha);
			this.setState ({resultadopostorden :  raizes.valor + " - " + this.state.resultadopostorden });
		}
	}

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