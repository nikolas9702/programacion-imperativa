// Se cargan los vcomponentes de react
import React , { Component } from 'react';

class Nodo  extends Component {
	constructor (valor) {
		// Para detectar que es el contrutor
		super();
		this.valor = valor;
		this.sigDerecha = null;
		this.sigIzquierda = null;
	}
}

export default Nodo;