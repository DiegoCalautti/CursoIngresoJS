/*
E/S 07
Calautti Diego
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	alert("La suma entre " +numeroUno+" y "+numeroDos+" es "+suma);
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resta;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resta=numeroUno-numeroDos;
	alert("La resta entre " +numeroUno+" y "+numeroDos+ " es "+resta);	
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let multiplicacion;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	multiplicacion=numeroUno*numeroDos;

	alert("La multiplicacion de " +numeroUno + " y " +numeroDos + " es " + multiplicacion);	
}

function dividir()
{
	let numeroUno;
	let	numeroDos;
	let	division;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	division=numeroUno/numeroDos;

	alert("La division de "+numeroUno+"y "+numeroDos+"es "+division);
}

/*
Campos 1 y 2:
txtIdNumeroUno
txtIdNumeroDos
*/ 