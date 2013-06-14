<?php
/* Este archivo se encarga de cargar codigo que sea necesario ir en el header en lugar de poder ir en la
 * parte de abajo del mismo cuerpo del código
 * Los elementos del swith se deben sincronizar con indexcliente_contentloader.php
 * */
 
if( isset($_GET["menu"]) )
{
	switch($_GET["menu"])
	{
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