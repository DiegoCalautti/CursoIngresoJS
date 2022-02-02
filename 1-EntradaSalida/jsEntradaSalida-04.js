/* 
E/S 04
Calautti Diego
Mostrando datos ya cargados en nombreIngresado="Diego Calautti" y concatenando "Sombre es" con la variable nombreIngresado:
*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	//alert("ok");
	//nombreIngresado=document.getElementById('txtIdNombre').value;  //Estamos escribiendo un acceso al HTML para obtener un dato, del archivo JS al HTML

	nombreIngresado="Diego Calautti"; //La variable nombreIngresado se llama "Diego Calautti", asigna a la variable un valor
	document.getElementById('txtIdNombre').value="Su nombre es:" +nombreIngresado; //Entonces esto muestra la variable en el campo de text
												// "" +variable; es una concatenacion
												// el .value nos muestra el valor ingresado en el cuadro de texto
												// para obtener el .getElementById get tab shift I.
												// .getElementById es Obtener elemento por ID
	alert(nombreIngresado);   //recordar, variable va sin comillas y el ALERT NO LLEVA VALUE.

}


