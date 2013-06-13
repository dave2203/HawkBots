
<?php
	include_once("coneccion/conn.php");
	$link = conn();
	$querySelect =" SELECT
		vuelo.idVuelo,
		vuelo.nombre,
		cat_paises.long_name,
		cat_estados.long_name,
		cat_city.long_name,
		Sum(dronOnline.isOnline) AS Avalaible
	FROM
		vuelo
		INNER JOIN cat_city ON cat_city.idCity = vuelo.idCity
		INNER JOIN cat_paises ON cat_paises.idPais = vuelo.idPais
		INNER JOIN cat_estados ON cat_estados.idEstado = vuelo.idEstado
		INNER JOIN dronOnline ON vuelo.idVuelo = dronOnline.idVuelo
	GROUP BY
		vuelo.idVuelo,
		vuelo.nombre,
		cat_paises.long_name,
		cat_estados.long_name,
		cat_city.long_name";

//mysql_close($link);

//	$result = $mysqli->query("SELECT 'Hello, dear MySQL user!' AS _message FROM DUAL");
//echo htmlentities($row['_message']);

//	$result = $mysqli->query($querySelect);
//	$row = $result->fetch_assoc();

	$result= mysql_query ($querySelect, $link) or die(mysql_error());
	$row = mysql_fetch_assoc($result);
	
	//mysql_free_result($result);			//debug
	//mysql_close($link);					//debug
	//exit;								//debug
	//echo htmlentities($row['Avalaible']);
?>
<table>
	<thead>
		<tr>
			<th>Flag</th>
			<th>Place</th>
			<th>Name</th>
			<th>Picture</th>
			<th>Demo video</th>
			<th>Availability</th>
			<th>Details</th>
		</tr>
	</thead>
	<tbody>
		<?php
			do {
		?>
		<tr>
			<td><?php echo "flag image" ?></td>
			<td><?php echo "Place" ?></td>
			<td><?php echo "Name" ?></td>
			<td><?php echo "Random pictur" ?></td>
			<td><input id="videodemo-btn" type="button" value="See video demo"/></td>
			<td><?php echo htmlentities($row['Avalaible']); ?></td>
			<td><a href="indexcliente.php?menu=vue_det&v=2">Ver</a></td>
		</tr>
		<?php
			} while ($row = mysql_fetch_assoc($result));
		?>
	</tbody>
</table>
<?php
	mysql_free_result($result);
	mysql_close($link);
?>