/*
E/S 03
Calautti Diego
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
Cargar un dato en el formulario y mostrarlo en un alert
*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	//alert("ok");
	nombreIngresado=document.getElementById('txtIdNombre').value;  //Estamos escribiendo un acceso al HTML para obtener un dato, del archivo JS al HTML
												// el .value nos muestra el valor ingresado en el cuadro de texto
												// para obtener el .getElementById get tab shift I.
												// .getElementById es Obtener elemento por ID
	alert(nombreIngresado);   //recordar, variable va sin comillas y el ALERT NO LLEVA VALUE.
}



