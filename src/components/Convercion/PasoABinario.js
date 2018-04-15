// Se cargan los vcomponentes de react
import { Component } from 'react';
// Se define la clase Convercion esta estiende del component de react
import PasoABases from './PasoABases';
class PasoABinario extends Component {
	/**
	 * [constructor Se crea el contrutor del componente]
	 * @return {[void]} [Se definen los valores por defeto del aplicativo y los llamado a las funciones ]
	 */
	constructor (valor=0,base=10) {
		// Para detectar que es el contrutor
		super();
		// se define la variable state para almacenar las variables pertinentes 
		this.state = {
			valor : valor.toString(),
			base : base
		};
	}

	pasar (baseApasar) {
		var binario;

		// validamos y lo pasaos a binario
		switch (this.state.base) {
			case 2 : 
				binario = this.state.valor;
			break;
			case 8 : 
				binario = this.OctalABinario(this.state.valor);
			break;
			case 10 : 
				binario = this.DecimalABinario(this.state.valor);
			break;
			case 16 : 
				binario = this.HexadecimalABinario(this.state.valor);
			break;
		}

		var pasoABases = new PasoABases(binario);


		switch (baseApasar) {
			case 2:
				return binario;
			break;
			case 8:
				return pasoABases.BinarioAOctal();
			break
			case 10:
				return pasoABases.BinarioADecimal();
			break;
			case 16:
				return pasoABases.BinarioAHexadecimal();
			break;
		}

	}


	DecimalABinario (valdecimal) {

		var decimal = valdecimal;
		var arregloBinario = [];
		var ultimoValor = 0;
		for (var i = 1; ultimoValor < Number(decimal) ; i++) {
			arregloBinario.push(Math.pow(2,i));
			ultimoValor = Math.pow(2,i);
		}

		// pasar a binario un decimal
		var decimalBinario = "";
		var cantidad_valor = decimal;
		for (var i = (arregloBinario.length-1) ; i >= 0 ; i--) {
			var valorbinario = "";
			if (cantidad_valor >= arregloBinario[i] ){
				cantidad_valor -= arregloBinario[i];
				valorbinario += 1;
			}
			else {
				valorbinario += 0;
			}
			decimalBinario += valorbinario;
			decimalBinario += (cantidad_valor == 1 || cantidad_valor == 0) ? cantidad_valor : "" ;
		}
		return decimalBinario;
	}

	OctalABinario (valoctal) {
		var octalBinario = "";
		var octal = valoctal;
		for (var i = 0 ; i <= (octal.length-1) ; i++) {
			var cantidad_valor = octal.charAt(i);
			var valorbinario = "";
			for ( var j = 2 ; j >= 0 ; j--) {
				if (cantidad_valor >= Math.pow(2,j) ){
					cantidad_valor -= Math.pow(2,j);
					valorbinario += 1;
				}
				else {
					valorbinario += 0;
				}
			}
			octalBinario += valorbinario;
		}
		return octalBinario;
	}

	HexadecimalABinario (valhexadecimal) {
		var hexadecimalBinario = "";
		var hexadecimal = valhexadecimal;
		for (var i = 0 ; i <= (hexadecimal.length-1) ; i++) {
			var cantidad_valor = new PasoABinario().valueLetraHexadecimal(hexadecimal.charAt(i));
			var valorbinario = "";
			for ( var j = 3 ; j >= 0 ; j--) {
				if (cantidad_valor >= Math.pow(2,j) ){
					cantidad_valor -= Math.pow(2,j);
					valorbinario += 1;
				}
				else {
					valorbinario += 0;
				}
			}
			hexadecimalBinario += valorbinario;
		}

		return hexadecimalBinario;
	}

	valueLetraHexadecimal(valor) {
		switch (valor) {
			case "A":
				return 10;
			break;
			case "B":
				return 11;
			break;
			case "C":
				return 12;
			break;
			case "D":
				return 13;
			break;
			case "E":
				return 14;
			break;
			case "F":
				return 15;
			break;
			default :
				return valor;
			break;
		}
	}

}
// exporto el componente para que se pueda importar en otros componentes
export default PasoABinario 