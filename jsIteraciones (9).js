function mostrar()
{
	var maximo=0;
	var minimo=0;
	var respuesta='si';
	var valor=0;
	var contador=0;

		valor= parseInt(prompt("ingrese un numero"));
		minimo= valor
		maximo= valor
		respuesta= prompt("desea ingresar otro numero? si/no");
		
		while(respuesta=="si")
		{
			contador++;
			valor = prompt("ingrese un numero");
			if(valor > maximo)
			{
				maximo = valor;
			}
			if(valor < minimo)
			{
				minimo = valor;
			}
			respuesta= prompt("desea ingresar otro numero? si/no");
		}

	
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN