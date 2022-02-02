/*
E/S 08
Diego Calautti
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	let dividendo;
	let divisor;
	let resto;

	dividendo=document.getElementById('txtIdNumeroDividendo').value;
	divisor=document.getElementById('txtIdNumeroDivisor').value;

	resto=dividendo%divisor;


	alert("El resutado es: "+resto);

}


/*
txtIdNumeroDividendo
txtIdNumeroDivisor

Si es 2/10 no es divisible, no da

*/

//resto=2%10;
	//resto=10%2;