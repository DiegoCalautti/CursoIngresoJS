/*
Calautti Diego
E/S 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
// Como usar prompt: https://www.w3schools.com/jsref/met_win_prompt.asp
function mostrar()
{
	let nombreIngresado;
	//nombreIngresado= "alguien";  Linea obsoleta, "alguien" es reemplazado por la linea que sigue (posterior) al ingresar tu nombre.
	nombreIngresado = prompt("Ingresa tu nombre", "Natalia Natalia");
	//alert("su nombre es"); Comentario. OJO: Toma los espacios (atras y adelante) y mayusculas, case sensitive.
	//alert(nombreIngresado); Contenido de la variable
	//alert("nombreIngresado"); Contenido de la variable mal puesto. No va con comillas "". 
	//Recordar si el contenido de una variable es de 2 palabras, poner las Mayusculas
	// Si lo hago en 2 lineas como a continuacion, entonces salen 2 carteles de alerta, no esta unificado:
	//alert("su nombre es");
	//alert(nombreIngresado);
	alert("su nombre es " + nombreIngresado); //Concatenacion: comentario + contenido de la variable
}


