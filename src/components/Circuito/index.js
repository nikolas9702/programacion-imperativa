import React , { Component } from 'react';
import { Label , Grid , Row , Col , code , Well ,Button , FormControl , Jumbotron } from 'react-bootstrap';



class Circuito  extends Component {
	constructor () {
		super();
		this.state = {
			dataA : 0 ,
			dataB : 0 ,
			resultado : ''
		};
		this.handleCountClick = this.handleCountClick.bind(this);
		this.handleinputChanged = this.handleinputChanged.bind(this);
	}

	handleCountClick (e) {
		console.log( e.target.id )
		console.log( this.state );
		this.circuitoValores()
	}
	handleinputChanged (e) {
		if ( e.target.id === 'dataA' ) {
			this.setState({
				dataA : Number(e.target.value)
			});
		}
		else if ( e.target.id === 'dataB' ) {
			this.setState({
				dataB : Number(e.target.value)
			});
		}
	}
	
	circuitoValores () {
		var variableA , variableB  , variableBuffer , variableNot ,  variableNAND , variableOR , variableXNOR , Negacion; 
		variableA = this.state.dataA;
		// console.log("variableA"+variableA);
		variableB = this.state.dataB;
		// console.log("variableB"+variableB);
		variableBuffer = !(!variableB)
		// console.log("variableBuffer"+variableBuffer);
		variableNot = !variableB;
		// console.log("variableNot"+variableNot);

		variableNAND = (variableA != variableBuffer) ? 1 : (variableA == variableBuffer && variableA == 1 ) ? 0 : 1;
		// console.log("variableNAND"+variableNAND);
		variableOR = variableNot || variableBuffer;
		// console.log("variableOR"+variableOR);

		variableXNOR = variableNAND == variableOR;
		// console.log("variableXNOR"+variableXNOR);
		Negacion = !variableXNOR;
		// console.log("Negacion"+Negacion);

		
		this.setState({
				resultado : Number(Negacion)
			});
	}
	
	render () {
		return <div className="container">
			<Well>
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={6}>
							<h1 >Valor A</h1>
							<FormControl value={this.state.dataA} id="dataA" placeholder="Valor de A" onChange={this.handleinputChanged} />
						</Col>
						<Col xs={23} md={5}>
							<h1 >Valor B</h1>
							<FormControl value={this.state.dataB} id="dataB" placeholder="Valor de B" onChange={this.handleinputChanged} />
						</Col>
					</Row>

					<Row className="show-grid">
						<Col xs={12} md={11}>
							<center> <h1 > Resultado Circuito : {this.state.resultado}</h1> </center>
						</Col>
					</Row>
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

export default Circuito 