// Se cargan los vcomponentes de react
import React , { Component } from 'react';
// se cargan los cmponentes de react bootstrap
import {  Grid , Row , Col , Well ,Button , FormControl  } from 'react-bootstrap';
// Se define la clase Circuito esta estiende del component de react
class Circuito  extends Component {
	/**
	 * [constructor Se crea el contrutor del componente]
	 * @return {[void]} [Se definen los valores por defeto del aplicativo y los llamado a las funciones ]
	 */
	constructor () {
		// Para detectar que es el contrutor
		super();
		// se define la variable state para almacenar las variables pertinentes 
		this.state = {
			dataA : 0 , //se degine el valor de DataA en cero por defecto
			dataB : 0 , //se degine el valor de DataB en cero por defecto
			resultado : '' // se da el valor del ressultado or default 
		};
		// se instancian los eventos del clikc del boton
		this.handleCountClick = this.handleCountClick.bind(this);
		// se instancia el evento para almacenar los valores que se van digitanto 
		this.handleinputChanged = this.handleinputChanged.bind(this);
	}
	/**
	 * [handleCountClick Se captura el evento para rocesar la data]
	 */
	handleCountClick (e) {
		// se llama a la funcion circuitovalores para que realice el procesamiento del circuito
		this.circuitoValores()
	}
	/**
	 * [handleinputChanged se setean la variable que se van digitando ]
	 * @param  {[type]} e [Se recibe el dom del elemeto que esta ciendo alterado]
	 * @return {[type]}   [description]
	 */
	handleinputChanged (e) {
		// se valida el id para setearlo en el valor de dataA 
		if ( e.target.id == 'dataA' && e.target.value >= 0 && e.target.value <= 1 ) { // se valida para que solo acepte 0 y 1 como valor para que no me genere inconcistencia en el circuito
			// se setat el valor a dataA
			this.setState({
				dataA : Number(e.target.value) // realizamos la convercion a numerico
			});
		}
		// se valida el id para setearlo en el valor de datB
		else if ( e.target.id == 'dataB' && e.target.value >= 0 && e.target.value <= 1  ) { // se valida para que solo acepte 0 y 1 como valor para que no me genere inconcistencia en el circuito
			// se setea el valor a dataB
			this.setState({
				dataB : Number(e.target.value) // realizamos la convercion a numerico
			});
		}
	}
	/**
	 * [circuitoValores Se realiza encapsula el procedimiento que va ha realizar el circuito]
	 */
	circuitoValores () {
		//  Se define la variables que van a almacenar los cambios en la variable segun el circuito
		var variableA , variableB  , variableBuffer , variableNot ,  variableNAND , variableOR , variableXNOR , Negacion; 
		// Se almacena la variable a 
		variableA = this.state.dataA;
		// Se almacena la variable b
		variableB = this.state.dataB;
		// Se intencifica b en negarla doble vez para que retorne al mismo valor y la alamcenamos en buffer
		variableBuffer = !(!variableB)
		// Negamos la variable b y la guardamos en not 
		variableNot = !variableB;
		// realizamos la validaion del nand con una validacion in-line doble yse guarda en nand
		variableNAND = (variableA != variableBuffer) ? 1 : (variableA == variableBuffer && variableA == 1 ) ? 0 : 1;
		// se procesa el valor or
		variableOR = variableNot || variableBuffer;
		// se realiz la operacion xnor que funciona con un igual
		variableXNOR = variableNAND == variableOR;
		// se niega el recultado de la operación xnor y ese es el rusalto final deñ circuito
		Negacion = !variableXNOR;
		// se setea el valor de resultado
		this.setState({
				resultado : Number(Negacion) // Convertimos negacion a numerico por que llega como valor boolean
			});
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
						<Col xs={12} md={6}>
							{/*Se muestra el titulo para adicionar el valor de a*/}
							<h1 >Valor A</h1>
							{/*Se crea un campo input para almacenar el dato de a */}
							<FormControl value={this.state.dataA} id="dataA" placeholder="Valor de A" onChange={this.handleinputChanged} />
						</Col>
						<Col xs={23} md={5}>
							{/*Se muestra el titulo para adicionar el valor de b*/}
							<h1 >Valor B</h1>
							{/*Se crea un campo input para almacenar el dato de b */}
							<FormControl value={this.state.dataB} id="dataB" placeholder="Valor de B" onChange={this.handleinputChanged} />
						</Col>
					</Row>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							{/*Se adiciona un elemento en el cual se va a mostrar el resultado del procedimiento*/}
							<center> <h1 > Resultado Circuito : {this.state.resultado}</h1> </center>
						</Col>
					</Row>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							{/* Se crea el boton que va inciar el procedimiento y retornar el valor del circuito*/}
							<Button bsStyle="success" bsSize="large" block id="procesar" onClick={this.handleCountClick}>Procesar</Button>
						</Col>
					</Row>
				</Grid>
			</Well>
		</div>
	}
}
// exporto el componente para que se pueda importar en otros componentes
export default Circuito 