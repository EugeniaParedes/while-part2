function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var valor=0;

	do{
		contador++;
		valor = prompt("ingrese un numero");
		if(valor>=0)
		{
			positivo = positivo + parseInt(valor);
		}else
		{
			negativo = negativo * parseInt(valor);
		} 
		respuesta =prompt("desea ingresar otro numero? si/no");
	}while(respuesta=="si");



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN