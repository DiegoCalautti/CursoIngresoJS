/*
E/S 10 bis 
Diego Calautti
lo mismo que lo anterior mas 
pedir el % por prompt
Parsear siempre todos los datos es bueno
*/
function mostrarAumento()
{
	//variables
	let importe;
	let resultado;
	let	porCiento;
	let descuento;
	let ingresaPorcentaje;

	//Tomar el valor introducido
	importe=document.getElementById('txtIdImporte').value;
	resultado=document.getElementById('txtIdResultado').value;

	//Prompt para solicitar el porcentaje
	ingresaPorcentaje = prompt("Ingresa el %");

	//Parseo
	importe=parseInt(importe);
	descuento=parseInt(descuento);
	ingresaPorcentaje=parseInt(ingresaPorcentaje);

	//Regla de tres simple
	porCiento=importe*(ingresaPorcentaje);
	descuento=porCiento/100;
	resultado= importe-descuento;

	//Mostrar en alert
	alert("el importe "+importe+" con un descuento del "+ingresaPorcentaje+ " es "+resultado);

	//Mostrar tambien en Resultado. Funcion que muestra en el propio campo de FORMULARIO
	document.getElementById('txtIdResultado').value="Su sueldo con el descuento es: " +resultado;

}

/*
TP 2: los primeros 2 son perimetros y el tercero es 


/*
E/S 10
Diego Calautti
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
function mostrarAumento()
{
	//variables
	let importe;
	let resultado;
	let	diezPorciento
	let aumento
	importe=document.getElementById('txtIdImporte').value;
	resultado=document.getElementById('txtIdResultado').value;

	//parseo
	importe=parseInt(importe);
	resultado=parseInt(resultado);
	aumento=parseInt(aumento);

	//regla de tres simple
	diezPorciento=importe*(25);
	aumento=diezPorciento/100;
	resultado= importe-aumento;

	
	alert("el importe "+importe+" con un descuento del 25% es "+resultado);
}

/*
txtIdImporte
txtIdResultado
*/