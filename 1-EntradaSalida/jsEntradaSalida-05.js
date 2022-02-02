/*
E/S 05
Diego Calautti
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado //variables van declaradas todas juntas al principio
	let edadIngresada //var es viejo, usar let para todo
	nombreIngresado=document.getElementById('txtIdNombre').value; //la id se saca en el html o en la consola de chrome
	edadIngresada=document.getElementById('txtIdEdad').value;

	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años"); //con esto muestro las dos variables en un mismo alert


}
/*



*/