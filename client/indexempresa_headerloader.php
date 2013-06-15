<?php
/* Este archivo se encarga de cargar codigo que sea necesario ir en el header en lugar de poder ir en la
 * parte de abajo del mismo cuerpo del código
 * Los elementos del swith se deben sincronizar con indexcliente_contentloader.php
 * */
exit;   						//DEBUG
if( isset($_GET["menu"]) )
{
	switch($_GET["menu"])
	{
		// Catalogo de vuelos. /catalogo.php
		case "catv":
			//holder.js, utilizado para general thumbnail usando javasript del lado del cliente, para prototipado.
			?>
			<script src="holder.js"></script>
			<?php  
			break;
		
		// Pantalla previa a reproducir. /play.php
		case "vue_det":
			?>
			<!-- Chang URLs to wherever Video.js files will be hosted -->
			<link href="players/video-js/video-js.css" rel="stylesheet" type="text/css">
			<!-- video.js must be in the <head> for older IEs to work. -->
			<script type="text/javascript" src="players/video-js/video.js"></script>
			<?php 
			break;
			
		// Pantalla de reproduci. /play.php
		case "vue_pla":
			?>
			<!-- Chang URLs to wherever Video.js files will be hosted -->
			<link href="players/video-js/video-js.css" rel="stylesheet" type="text/css">
			<!-- video.js must be in the <head> for older IEs to work. -->
			<script type="text/javascript" src="players/video-js/video.js"></script>
			<?php 
			break;
	}
}//if( isset($_GET["menu"]))
?>