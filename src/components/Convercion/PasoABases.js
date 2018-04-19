// Se cargan los vcomponentes de react
import { Component } from 'react';
// Se define la clase Convercion esta estiende del component de react
class PasoABases extends Component {
	/**
	 * [constructor Se crea el contrutor del componente]
	 * @return {[void]} [Se definen los valores por defeto del aplicativo y los llamado a las funciones ]
	 */
	constructor (binario=0) {
		// Para detectar que es el contrutor
		super();
		// se define la variable state para almacenar las variables pertinentes 
		this.state = {
			// se convierte en string el valor ingresado
			binario : binario.toString(),
		};
	}

	/**
	 * para realizar l convercon de binario a decimal
	 */
	BinarioADecimal () {
		// se define el valor del binario en una variable temporal
		var binario = this.state.binario;
		// se define un arreglo donde se almacena los valores binarios
		var arregloTabla = [];
		// se realiza un ciclo para obtener los valores decimale de convecion ha binario
		for (var i = 0 ; i <= (binario.length-1) ; i++) {
			// se adiciona el valor de la operacion 2 ^ n
			arregloTabla.push (Math.pow(2,i));
		}
		// se invierte el arreglo de binarios
		arregloTabla.reverse()
		// se define un contador que es como un acumulador para sumar los valores de esta
		var contador = 0
		// ciclo para asignar el valor de binario a decimal
		for (var i = (binario.length-1) ; i >= 0 ; i--) {
			// se acumula los valores en binario respectivos de este 
			contador += binario.charAt(i) == 1 ? arregloTabla[i] : 0 ;
		}
		// se acumula el valor pertienete 
		return contador;
	}

	/**
	 * se realiza la convercion de binario a octal
	 */
	BinarioAOctal () {
		// se define el valor del binario en una variable temporal
		var binario = this.state.binario;
		// se define el arreglo para los octales de los arreglos temporales de tres campos
		var arregloOctales = [];
		// se define el arreglo temporal
		var arregloTmp = [];
		// contador temporal para delimitarlos a 3 campos por arreglo
		var aux_con = 0;
		// ciclo invertido para los campos a organizar
		for (var i = (binario.length-1) ; i >= 0 ; i--) {
			// se agrega el campo de temporal
			arregloTmp.push(binario.charAt(i));
			// que cada 3 ciclos se agrege al arreglo genral y se limpie este mismo
			if (aux_con == 2){
				// se adiciona el temporal al principal arreglo
				arregloOctales.push(arregloTmp)
				// se setean limpian los campos aux_con arregloTmp
				aux_con = 0;
				arregloTmp = []
			}
			else {
				// se incrementa de a uno cada contador
				aux_con++;
			}
		}
		// cuando no tiene los tres se agrega el final normalmente
		if (arregloTmp.length > 0)
			arregloOctales.push(arregloTmp)

		// suma de los valores en octal
		var valorOctal = "";
		// se recorre el arreglo
		arregloOctales.map(function(elem , index) {
			// se define el valor para los arreglos de los contadores
			var contadorOctal = 0;
			// ciclo para leer los sub arreglos del octal
			for (var i = 0; i < elem.length; i++) {
				// se incrementa el valor de los que aplican cuando son 1 y la potencia de 2
				contadorOctal += (elem[i] == 1 )  ? Math.pow(2,i) : 0 ;
			}
			// se concatenan los registros del string para posteriormente mostrarlos
			valorOctal = contadorOctal + valorOctal;
		});
		// se retorna la convercion a octal
		return valorOctal;
	}

	/**
	 * [BinarioAHexadecimal Se crea la funcion para convertir a hexadecimal]
	 */
	BinarioAHexadecimal () {
		// se define el valor del binario en una variable temporal
		var binario = this.state.binario;
		// se define el arreglo para los hexadecimales de los arreglos temporales de cuatro campos
		var arregloHexademcimales = [];
		// se define el arreglo temporal
		var arregloTmp = [];
		// contador temporal para delimitarlos a 3 campos por arreglo
		var aux_con = 0;
		// ciclo invertido para los campos a organizar
		for (var i = (binario.length-1) ; i >= 0 ; i--) {
			// se agrega el campo de temporal
			arregloTmp.push(binario.charAt(i));
			// que cada 4 ciclos se agrege al arreglo genral y se limpie este mismo
			if (aux_con == 3){
				// se adiciona el temporal al principal arreglo
				arregloHexademcimales.push(arregloTmp)
				// se setean limpian los campos aux_con arregloTmp
				aux_con = 0;
				arregloTmp = []
			}
			else {
				// se incrementa de a uno cada contador
				aux_con++;
			}
		}
		// cuando no tiene los tres se agrega el final normalmente
		if (arregloTmp.length > 0)
			arregloHexademcimales.push(arregloTmp)

		// suma de los valores en hexadecimal
		var valorHexadecimal = "";
		// se recorre el arreglo
		arregloHexademcimales.map(function(elem , index)  {
			// se define el valor para los arreglos de los contadores
			var contadorOctal = 0;
			// ciclo para leer los sub arreglos del hexadecimal
			for (var i = 0; i < elem.length; i++) {
				// se incrementa el valor de los que aplican cuando son 1 y la potencia de 2
				contadorOctal += (elem[i] == 1 )  ? Math.pow(2,i) : 0 ;
			}
			// se concatenan los registros del string para posteriormente mostrarlos
			valorHexadecimal = new PasoABases().valueHexadecimal(contadorOctal) + valorHexadecimal;
		});
		// se retorna la convercion a octal
		return valorHexadecimal;
	}

	/**
	 * [valueHexadecimal convierte los valores a su hexadecimal correspondiente]
	 * @param  {[type]} valor [El valor que devolvio el binario del hexadecimal]
	 * @return {[type]}       [el valor en hexadecimal]
	 */
	valueHexadecimal (valor) {
		// se valida el valor 
		switch (valor) {
			// se valida 10 a A
			case 10:
				return "A";
			break;
			// se valida 11 a B
			case 11:
				return "B";
			break;
			// se valida 12 a C
			case 12:
				return "C";
			break;
			// se valida 13 a D
			case 13:
				return "D";
			break;
			// se valida 14 a E
			case 14:
				return "E";
			break;
			// se valida 15 a F
			case 15:
				return "F";
			break;
			// pasa cuando son numero 
			default :
				return valor;
			break;
		}
	}

}
// exporto el componente para que se pueda importar en otros componentes
export default PasoABases 