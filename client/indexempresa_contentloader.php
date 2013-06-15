<?php
/* Insertar las diferentes paginas que se visualizaran en el contenedor "principal"
 * del archivo indexcliente.php.
 * * Los elementos del swith se deben sincronizar con indexcliente_headerloader.php s es necesario.
   Llamado por:	indexcliente.php
*/
exit;									//Debug
if( isset($_GET["menu"]) )
{
	$pagina = "";
	switch($_GET["menu"])
	{
		//Pagina de presentacion
		case "prcp":
			$pagina = "indexcliente_content.php";
			break;
		
		// Catalogo de vuelos. /catalogo.php
		case "catv":
			$pagina = "catalogo.php"; 
			break;
		
		// Pantalla previa a reproducir. /play.php
		case "vue_det":
			$pagina = "play.php"; 
			break;
			
		// Pantalla previa a reproducir. /play.php
		case "vue_pla":
			$pagina = "playMenu.php"; 
			break;
		
		// Servicio audio. /<nombre archivo>.php
		case "serv_au":
			$pagina = "Pendiente"; 
			break;
		// Servicio audio. /<nombre archivo>.php
		case "serv_vi":
			$pagina = "pendiente"; 
			break;
		// Servicio audio. /<nombre archivo>.php
		case "serv_re":
			$pagina = "Pendiente"; 
			break;
			
		// Tutorial interactivo. /<nombre archivo>.php
		case "tut":
			$pagina = "tutorialTrainigInterac.php"; 
			break;
	}
	require($pagina);
}//if( isset($_GET["menu"]))
else{
	$pagina = "404.html"; 
	require($pagina); 
}
?>