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
			// ya esta en binario no es necesario hacer convercion
			case 2 : 
				binario = this.state.valor;
			break;
			// Se convierte de octal a binario
			case 8 : 
				binario = this.OctalABinario(this.state.valor);
			break;
			//  Se convierte decimal a binario
			case 10 : 
				binario = this.DecimalABinario(this.state.valor);
			break;
			// Se convierte de hexadecimal a binario
			case 16 : 
				binario = this.HexadecimalABinario(this.state.valor);
			break;
		}
		// se define la clase para realizar la convercion
		var pasoABases = new PasoABases(binario);

		// validamos a que base se pasara el binario
		switch (baseApasar) {
			// se retorna el valor en binario
			case 2:
				return binario;
			break;
			// se llama el convertor de binario a octal
			case 8:
				return pasoABases.BinarioAOctal();
			break
			// se llama el convertor de binario a decimal
			case 10:
				return pasoABases.BinarioADecimal();
			break;
			// se llama el convertor de binario a hexadecimal
			case 16:
				return pasoABases.BinarioAHexadecimal();
			break;
		}

	}

	/**
	 * [DecimalABinario Convertor de decimal a binario]
	 * @param {[type]} valdecimal [description]
	 */
	DecimalABinario (valdecimal) {
		// se define el valor del binario en una variable temporal
		var decimal = valdecimal;
		// se define el arreglo para los binarios
		var arregloBinario = [];
		// auxiliar para el ultimo valor que pasa
		var ultimoValor = 0;
		// ciclo para el cual carga los binarios necesitados
		for (var i = 1; ultimoValor < Number(decimal) ; i++) {
			// se agrega al arreglo arreglo binario
			arregloBinario.push(Math.pow(2,i));
			// se guarda el ultimo valor del arreglo par la validacion del ciclo
			ultimoValor = Math.pow(2,i);
		}

		// pasar a binario un decimal
		var decimalBinario = "";
		// se agega el valor decimal para realizar la respectiva resta de los valor posibles
		var cantidad_valor = decimal;
		// ciclo para el arreglo de binarios
		for (var i = (arregloBinario.length-1) ; i >= 0 ; i--) {
			// se define el valor en que va tomar en binario
			var valorbinario = "";
			// se valida si la cantidad es menor al valor del arreglo inidicado
			if (cantidad_valor >= arregloBinario[i] ){
				// se le resta el valor al total 
				cantidad_valor -= arregloBinario[i];
				// se agrega 1 en el valor ya que este si aplica en el binario
				valorbinario += 1;
			}
			else {
				// se agrega un 0 para esta como apagado del binario indicado
				valorbinario += 0;
			}
			// se define el binario final
			decimalBinario += valorbinario;
			// en el ultimo valor de o y 1 de valida si estos deben i en el valor de meor relevacia
			decimalBinario += (cantidad_valor == 1 || cantidad_valor == 0) ? cantidad_valor : "" ;
		}
		// se retorna el binario del octal asignado
		return decimalBinario;
	}

	/**
	 * [OctalABinario description]
	 * @param {[type]} valoctal [description]
	 */
	OctalABinario (valoctal) {
		// el valor que se le va asignar el binario
		var octalBinario = "";
		// el valor actual del binario
		var octal = valoctal;
		// se realiza un ciclo del octal
		for (var i = 0 ; i <= (octal.length-1) ; i++) {
			// se obtine un valor del string determinandolo como un valor char
			var cantidad_valor = octal.charAt(i);
			// se carga el valor definido ha ser char
			var valorbinario = "";
			// se realiza el ciclo pertinente para obtener el valor en octal al binario
			// se ejecuta desde atras hacia ha delante
			for ( var j = 2 ; j >= 0 ; j--) {
				// se valida que potencia satisface el valor necesitado
				if (cantidad_valor >= Math.pow(2,j) ){
					// se resta el valor al octal que se esta convirtendo
					cantidad_valor -= Math.pow(2,j);
					// se agrega el valor al acumulador del binario
					valorbinario += 1;
				}
				else {
					// se agrega el valor al acumulador del binario
					valorbinario += 0;
				}
			}
			// se agrega el valor al binario de la conversion 
			octalBinario += valorbinario;
		}
		// se retorna el valor convertido ha binario
		return octalBinario;
	}

	/**
	 * [HexadecimalABinario convir¿erte el hexadecimal en binario]
	 * @param {[type]} valhexadecimal [el valor en binario]
	 */
	HexadecimalABinario (valhexadecimal) {
		// el valor que se le va asignar el binario
		var hexadecimalBinario = "";
		// el valor actual del binario
		var hexadecimal = valhexadecimal;
		// se realiza un ciclo del hexadecimal
		for (var i = 0 ; i <= (hexadecimal.length-1) ; i++) {
			// se obtine un valor del string determinandolo como un valor char
			// se validan si el campo hexadecimal va ha variar
			var cantidad_valor = new PasoABinario().valueLetraHexadecimal(hexadecimal.charAt(i));
			// el valor que retorna como binario
			var valorbinario = "";
			// se realiza el ciclo pertinente para obtener el valor en hexadecimal al binario
			// se ejecuta desde atras hacia ha delante
			for ( var j = 3 ; j >= 0 ; j--) {
				// se valida que potencia satisface el valor necesitado
				if (cantidad_valor >= Math.pow(2,j) ){
					// se resta el valor al hexadecimal que se esta convirtendo
					cantidad_valor -= Math.pow(2,j);
					// se agrega el valor al acumulador del binario
					valorbinario += 1;
				}
				else {
					// se agrega el valor al acumulador del binario
					valorbinario += 0;
				}
			}
			// se agrega el valor al binario de la conversion 
			hexadecimalBinario += valorbinario;
		}
		// se retorna el valor convertido ha binario
		return hexadecimalBinario;
	}

	/**
	 * [valueHexadecimal convierte los valores a su hexadecimal correspondiente]
	 * @param  {[type]} valor [El valor que devolvio el binario del hexadecimal]
	 * @return {[type]}       [el valor en hexadecimal]
	 */
	valueLetraHexadecimal(valor) {
		// se valida el valor 
		switch (valor) {
			// se valida 10 a A
			case "A":
				return 10;
			break;
			// se valida 11 a B
			case "B":
				return 11;
			break;
			// se valida 12 a C
			case "C":
				return 12;
			break;
			// se valida 13 a D
			case "D":
				return 13;
			break;
			// se valida 14 a E
			case "E":
				return 14;
			break;
			// se valida 15 a F
			case "F":
				return 15;
			break;
			// pasa cuando son numero 
			default :
				return valor;
			break;
		}
	}

}
// exporto el componente para que se pueda importar en otros componentes
export default PasoABinario 