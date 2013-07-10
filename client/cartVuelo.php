<?php
include_once("coneccion/conn.php");
$link = conn();
$querySelect = 'SELECT';
$result = mysql_query($querySelect,$link) or die(mysql_error());

if( !mysql_num_rows( $result ) ){				// False si no hay resultado, int si hay registros.
?>
<div class="row-fluid">
	<div class="span12 hero-unit">
	    <h1>No vuelos registrados</h1>
	    <p>No hay disponible ningun vuelo regitrado actualmente. Por favor intente mas tarde.</p>
		<p>Desea ser avizado por correo?</p>
	</div>
</div>
<div class="row-fluid">
	<div class="span12">
<?php	
}
else{
	$row = mysql_fetch_assoc($result);			//Tomar el primero.
	do{
?>
		///////////// PENDIENTE AGREGAR LA TABLA.
<?php
	}while();
?>
	</div>
</div>
<?php
}
mysql_free_result($result);
mysql_close($link);
?>