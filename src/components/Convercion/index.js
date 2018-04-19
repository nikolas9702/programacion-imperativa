// Se cargan los vcomponentes de react
import React , { Component } from 'react';
// se cargan los cmponentes de react bootstrap
import {  Grid , Row , Col , Well ,Button , FormControl , FormGroup , ControlLabel , formControlsSelect  } from 'react-bootstrap';
// Se define la clase Convercion esta estiende del component de react
import PasoA from './PasoABinario';
class Convercion  extends Component {
	/**
	 * [constructor Se crea el contrutor del componente]
	 * @return {[void]} [Se definen los valores por defeto del aplicativo y los llamado a las funciones ]
	 */
	constructor () {
		// Para detectar que es el contrutor
		super();
		// se define la variable state para almacenar las variables pertinentes 
		this.state = {
			valorIngresado : 2 , //se degine el valor de valorIngresado en cero por defecto
			valorFinal : 10 , //se degine el valor de valorFinal en cero por defecto
			valor : "111" ,
		};
		// se instancian los eventos del clikc del boton
		this.handleCountClick = this.handleCountClick.bind(this);
		// se instancia el evento para almacenar los valores que se van digitanto 
		this.handlechanged = this.handlechanged.bind(this);
	}
	/**
	 * [handleCountClick Se captura el evento para rocesar la data]
	 */
	handleCountClick (e) {
		// se llama a la funcion circuitovalores para que realice el procesamiento del circuito
		this.procesarConverciones()
	}

	// evento para almacenar los datos selecionados
	handlechanged (e) {
		// se valida que sea entrada 
		if (e.target.id === 'entrada') {
			// se almacena el tipo de dato que ingresa
			this.setState ({valorIngresado:Number(e.target.value)});
			// se setea el valor para que no queden valor de otros tipos de datos
			this.setState ({valor : ''});
		}
		//se valida el valor en el cual va ha salir
		else if (e.target.id === 'salida') {
			// se almacena el tipo de dato que va ha salir
			this.setState ({valorFinal:Number(e.target.value)});
		}
		// se almacena el valor segun el tipo de ingreso
		else if (e.target.id === 'valorCambiar') {
			// se validan las opciones segum el tipo de dato que se debe almacenar 
			this.setState ({valor:
				// se realiza un valiadcion in line anidad para validarlos en secuencia
				// se valida los datos binario
				 (this.state.valorIngresado == 2 ) ? this.validarRangos(e.target.value, 2) :
				 // se validan los datos octales
				 	(this.state.valorIngresado == 8 ) ? this.validarRangos(e.target.value, 8) :
				 	// se validan los datos decimales
				 		(this.state.valorIngresado == 10) ? this.validarRangos(e.target.value, 10) : this.validarHexadecimal(e.target.value) // se validan los hexadecimales
			});
		}
	}

	procesarConverciones () {
		//  Se define la variables que van a almacenar los cambios en la variable segun el circuito
		// this.setState ({resultado: parseInt(this.state.valor, this.state.valorIngresado).toString(this.state.valorFinal)});

		this.setState ({resultado:new PasoA(this.state.valor,this.state.valorIngresado).pasar(this.state.valorFinal)});
	}

	/**
	 * @param  {valor es el digitado por el usuario}
	 * @return {se retorna el contenido del texto}
	 */
	validarHexadecimal (valor) {
		//variable de acumulacion del texto
		var textoFiltrado = "";
		// ciclo para leer el string por partes
		for(var i in valor) {
			// se valida que se un numero
			if (valor[i] >= 0  && valor[i] <= 9)
				textoFiltrado += valor[i];
			// se valida que tenga solo las letras A a F
			else if ( valor[i] === 'A' || valor[i] === 'B' || valor[i] === 'C' || valor[i] === 'D' || valor[i] === 'E' || valor[i] === 'F' ) {
				textoFiltrado += valor[i];
			}
		}
		// se retorna el contenido del texto
		return textoFiltrado;
	}

	/**
	 * @param  {[string] valor => el input suministrado por el usuario}
	 * @param  {[integer] base => la base en la cual se va ha validar}
	 * @return {[string] el contenido validado}
	 */
	validarRangos (valor , base) {
		// ciclo para leer el string por partes
		var textoFiltrado = "";
		// ciclo para leer el string por partes
		for(var i in valor) {
			// se valida que se un numero de 0 a 1
			if (base == 2 && ( valor[i]>= 0 && valor[i] <= 1))
				textoFiltrado += valor[i];
			// se valida que se un numero de 0 a 7
			else if (base == 8 && ( valor[i]>= 0 && valor[i] <= 7)) 
				textoFiltrado += valor[i];
			// se valida que se un numero de 0 a 9
			else if (base == 10 && ( valor[i]>= 0 && valor[i] <= 9)) 
				textoFiltrado += valor[i];
		}
		// se retorna el contenido del texto
		return textoFiltrado;
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
						{/*se crea la columa para la lista de entrada*/}
						<Col xs={12} md={4}>
							<FormGroup >
								{/*se crea el titulo*/}
								<h1>Tipo de entrada</h1>
								{/*se define la lista con las opciones  */}
								<FormControl componentClass="select" placeholder="Seleccione" id="entrada" onChange={this.handlechanged}>
									<option value="2">Binario</option>
									<option value="8">Octal</option>
									<option value="10" >Decimal</option>
									<option value="16">Hexadecimal</option>
								</FormControl>
							</FormGroup>
						</Col>
						
						<Col xs={12} md={2}> </Col>
						{/*se crea la columa para la lista de entrada*/}
						<Col xs={12} md={4}>
							<FormGroup >
								{/*se crea el titulo*/}
								<h1>Tipo de salida</h1>
								{/*se define la lista con las opciones  */}
								<FormControl componentClass="select" placeholder="Seleccione" id="salida" onChange={this.handlechanged}>
									<option value="2" >Binario</option>
									<option value="8">Octal</option>
									<option value="10">Decimal</option>
									<option value="16">Hexadecimal</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col xs={12} md={11}>
							{/*Se crea un campo input para almacenar el dato de a */}
							<FormGroup controlId="valorCambiar">
								{/*Se muestra el titulo para adicionar el valor de a*/}
								<ControlLabel>Valor</ControlLabel>{' '}
								<FormControl type="text" placeholder="Jane Doe" value={this.state.valor} onChange={this.handlechanged}  />
							</FormGroup>
						</Col>
					</Row>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							{/*Se adiciona un elemento en el cual se va a mostrar el resultado del procedimiento*/}
							<center> <h1 > Resultado Conversion : {this.state.resultado}</h1> </center>
						</Col>
					</Row>
					{/*Se aplican los estilos y se dan tamaños para la adaptabilidad a dispositivos mobiles */}
					<Row className="show-grid">
						<Col xs={12} md={11}>
							<Button bsStyle="success" bsSize="large" block id="procesar" onClick={this.handleCountClick}>Procesar</Button>
						</Col>
					</Row>
				</Grid>
			</Well>
		</div>
	}
}
// exporto el componente para que se pueda importar en otros componentes
export default Convercion 