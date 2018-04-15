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

	handlechanged (e) {
		if (e.target.id === 'entrada') {
			this.setState ({valorIngresado:Number(e.target.value)});
			this.setState ({valor : ''});
		}
		else if (e.target.id === 'salida') {
			this.setState ({valorFinal:Number(e.target.value)});
		}
		else if (e.target.id === 'valorCambiar') {
			this.setState ({valor:
				 (this.state.valorIngresado == 2 ) ? this.validarRangos(e.target.value, 2) :
				 	(this.state.valorIngresado == 8 ) ? this.validarRangos(e.target.value, 8) :
				 		(this.state.valorIngresado == 10) ? this.validarRangos(e.target.value, 10) : this.validarHexadecimal(e.target.value) 
			});
		}
	}

	procesarConverciones () {
		//  Se define la variables que van a almacenar los cambios en la variable segun el circuito
		// this.setState ({resultado: parseInt(this.state.valor, this.state.valorIngresado).toString(this.state.valorFinal)});

		this.setState ({resultado:new PasoA(this.state.valor,this.state.valorIngresado).pasar(this.state.valorFinal)});
	}

	validarHexadecimal (valor) {
		var textoFiltrado = "";
		for(var i in valor) {
			if (valor[i] >= 0  && valor[i] <= 9)
				textoFiltrado += valor[i];
			else if ( valor[i] === 'A' || valor[i] === 'B' || valor[i] === 'C' || valor[i] === 'D' || valor[i] === 'E' || valor[i] === 'F' ) {
				textoFiltrado += valor[i];
			}
		}
		return textoFiltrado;
	}

	validarRangos (valor , base) {
		var textoFiltrado = "";
		for(var i in valor) {
			if (base == 2 && ( valor[i]>= 0 && valor[i] <= 1))
				textoFiltrado += valor[i];
			else if (base == 8 && ( valor[i]>= 0 && valor[i] <= 7)) 
				textoFiltrado += valor[i];
			else if (base == 10 && ( valor[i]>= 0 && valor[i] <= 9)) 
				textoFiltrado += valor[i];

		}
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

						<Col xs={12} md={4}>
							<FormGroup >
								<h1>Tipo de entrada</h1>
								<FormControl componentClass="select" placeholder="Seleccione" id="entrada" onChange={this.handlechanged}>
									<option value="2">Binario</option>
									<option value="8">Octal</option>
									<option value="10" >Decimal</option>
									<option value="16">Hexadecimal</option>
								</FormControl>
							</FormGroup>
						</Col>
						
						<Col xs={12} md={2}> </Col>
						<Col xs={12} md={4}>
							<FormGroup >
								<h1>Tipo de salida</h1>
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