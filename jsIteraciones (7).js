function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var valor=0;

	do
	{
		contador++;
		valor = prompt("ingrese un numero");
		acumulador = acumulador + parseInt(valor);
		respuesta= prompt("desea ingresar otro numero? si/no");
	}while(respuesta=="si");


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN