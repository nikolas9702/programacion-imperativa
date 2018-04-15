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
			binario : binario.toString(),
		};
	}

	BinarioADecimal () {
		var binario = this.state.binario;
		var arregloTabla = [];
		for (var i = 0 ; i <= (binario.length-1) ; i++) {
			arregloTabla.push (Math.pow(2,i));
		}
		arregloTabla.reverse()
		var contador = 0
		for (var i = (binario.length-1) ; i >= 0 ; i--) {
			contador += binario.charAt(i) == 1 ? arregloTabla[i] : 0 ;
		}
		return contador;
	}

	BinarioAOctal () {
		var binario = this.state.binario;
		var arregloOctales = [];
		var arregloTmp = [];
		var aux_con = 0;
		for (var i = (binario.length-1) ; i >= 0 ; i--) {
			arregloTmp.push(binario.charAt(i));
			if (aux_con == 2){
				arregloOctales.push(arregloTmp)
				aux_con = 0;
				arregloTmp = []
			}
			else {
				aux_con++;
			}
		}

		var valorOctal = "";
		arregloOctales.map(function(elem , index) {
			var contadorOctal = 0;
			for (var i = 0; i < elem.length; i++) {
				contadorOctal += (elem[i] == 1 )  ? Math.pow(2,i) : 0 ;
			}
			valorOctal = contadorOctal + valorOctal;
		});
		return valorOctal;
	}

	BinarioAHexadecimal () {
		var binario = this.state.binario;
		var arregloHexademcimales = [];
		var arregloTmp = [];
		var aux_con = 0;
		for (var i = (binario.length-1) ; i >= 0 ; i--) {
			arregloTmp.push(binario.charAt(i));
			if (aux_con == 3){
				arregloHexademcimales.push(arregloTmp)
				aux_con = 0;
				arregloTmp = []
			}
			else {
				aux_con++;
			}
		}
		if (arregloTmp.length > 0)
			arregloHexademcimales.push(arregloTmp)

		var valorHexadecimal = "";
		arregloHexademcimales.map(function(elem , index)  {
			var contadorOctal = 0;
			for (var i = 0; i < elem.length; i++) {
				contadorOctal += (elem[i] == 1 )  ? Math.pow(2,i) : 0 ;
			}
			valorHexadecimal = new PasoABases().valueHexadecimal(contadorOctal) + valorHexadecimal;
		});

		return valorHexadecimal;
	}

	valueHexadecimal (valor) {
		switch (valor) {
			case 10:
				return "A";
			break;
			case 11:
				return "B";
			break;
			case 12:
				return "C";
			break;
			case 13:
				return "D";
			break;
			case 14:
				return "E";
			break;
			case 15:
				return "F";
			break;
			default :
				return valor;
			break;
		}
	}

}
// exporto el componente para que se pueda importar en otros componentes
export default PasoABases 