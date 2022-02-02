
/*
E/S 09 BIS
Diego Calautti

9 bis 
lo mismo que lo anterior mas 
pedir el % por prompt

*/

function mostrarAumento()
{
	//variables
	let sueldo;
	let porCiento;
	let resultado;
	let ingresaPorcentaje

	sueldo=document.getElementById('txtIdSueldo').value;
	ingresaPorcentaje = prompt("Ingresa el %");

	//parseo
	sueldo=parseInt(sueldo);
	porCiento=parseInt(porCiento);
	resultado=parseInt(resultado);
	ingresaPorcentaje=parseInt(ingresaPorcentaje);

	//regla de tres simple
	porCiento=sueldo*(ingresaPorcentaje);
	aumento=porCiento/100;
	resultado= aumento+sueldo;

	//Mostrar Resultado en ventana con todos los detalles de la operacion
	alert("El aumento es un "+ aumento+ " de un sueldo de "+sueldo+ " da como resultado un nuevo sueldo de "+resultado);

	//Mostrar tambien en Resultado
	document.getElementById('txtIdResultado').value="Su sueldo con el aumento es: " +resultado;

	}





/*
E/S 09 ORIGINAL
Diego Calautti
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Hay que lograr tener un algoritmo que sea REUTILIZABLE

function mostrarAumento()
{
	//variables
	let sueldo;
	let diezPorciento;
	let resultado;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	diezPorciento=parseInt(diezPorciento);
	resultado=parseInt(resultado);

	//regla de tres simple
	diezPorciento=sueldo*(10);
	aumento=diezPorciento/100;
	resultado= aumento+sueldo;


	alert("El aumento es un "+ aumento+ " de un sueldo de "+sueldo+ " da como resultado un nuevo sueldo de "+resultado);
}



/*
PRIMERO SEGUN EL PROFE SE CALCULA EL PROCENTAJE
SEGUNDO SE SUMA O RESTA DEL IMPORTE INICIAL
TERCERO SE MUESTRA TODA LA INFO

alert("El sueldo inicial es"+sueldo+"con un aumento de %+ porcentaje+"el sueldo con aumento es"+resultado)

txtIdResultado
resultado=document.getElementById('txtIdResultado').value;

/*regla de tres simple  utilizada por el profesor
	//La diferencia es que esta forma comprime todo en 1 linea
	
	//unicas 2 variables

	let sueldo;
	let resultado;

	sueldo=document.getElementById('txtIdSueldo').value;

	//parseos
	sueldo=parseInt(sueldo);
	resultado=parseInt(resultado);

	resultado=sueldo+((sueldo/100)*10);

	//alert siemple
	alert(resultado);
*/


