/*
E/S 06
Calautti Diego
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//carga de variables
	let numeroUno;
	let numeroDos;
	let suma;

	//carga de valores
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	//parseo de datos ingresados
	numeroUno=parseInt(numeroUno)
	numeroDos=parseInt(numeroDos)

	suma=numeroUno+numeroDos;
	//Suma en un alert
	// El aler podria ser asi alert(numeroUno	+ numeroDos	); si no se usa variable suma o sino:
	alert("La suma es: "+suma);

	//txtIdNumeroUno
	//txtIdNumeroDos
}


// el signo MAS + puede concatenar (unir 2 numeros) o sumar.

/*
parseInt(variable) por si solo no transforma nada, sigue todo igual

El parseInt sirve para datos que ingresa el usuario
Y los devuelvo en la misma variable q estoy utilizando

parseInt se fija si el valor pasado entre paréntesis puede ser convertido a un entero 
(de ahí "int", de "integer"), si se puede, lo devuelve convertido en entero.
Ademas, como son enteros, no te toma la coma (ej toma el 6 pero no el 6,4 o 6,6)

La suma no necesita parseInt
parseInt= transforma dato que ingreso usuario a NUMERO.

ESTO NO SE USA:
alert(parseInt(numeroUno)+ parseInt(numeroDos));
YA QUE ESTA MUY CARGADO.


*/