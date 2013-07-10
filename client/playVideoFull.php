<?php
if(isset($_GET["v"]))
{
	include_once("coneccion/conn.php");
	$link = conn();
	/* Seleccionar un dron y ejecutar rutina de verificacion de funcionalidad. */
	$videoFeedURL = "";
	$typeVideo = "video/ogg";													// Agregar nuevo campo a la tabla acerca del formato de video.
	/* Obtener el identifcador de la empresa ala que pertenece $_GET['v'] y apartir del id
	 * de la empresa obtener lalista de drones que estan disponibles y online. */
	
	$querySelect = 'SELECT
			dronOnline.idDronOnline,
			dronOnline.IPAddr,
			dronOnline.wsURL,
			dronOnline.videoURL
		FROM
			dronOnline
		WHERE
			dronOnline.isOnline = true AND
			dronOnline.isLibre = true AND
			dronOnline.idEmpresa = (SELECT vuelo.idEmpresa FROM vuelo WHERE vuelo.idVuelo ='.$_GET['v'].')
		LIMIT 2';
		
	$result= mysql_query ($querySelect, $link) or die(mysql_error());
	mysql_close($link);
	
	if( mysql_num_rows ( $result ) ){				// False si no hay resultado, int si hay registros.
		$row = mysql_fetch_assoc($result);			//Tomar el primero.
		
		//obtener el id del cliente. ¿cookie? ¿session?
		
		/////Pediente id clente.
		$idCliente = 2;															//Debug. Borrar.
		
		
		// Modificar estado del dron a ocupado (0).
		//$query = 'UPDATE dronOnline SET isLibre=false WHERE idDronOnline ='.$row['idDronOnline'];		//Funciona 
		
		//Insertar en la tabla vueloRecorrido
		 //PENDIENTE
		 
		 
		$videoFeedURL = $row['videoURL'];
		//$typeVideo = $row['videoType'];		//Pendiente crear coampo en la tabla. !!!!!!!!!!!!
		$typeVideo = "video/ogg";		
	}
	else{
		//No se devolvio ningun resultado. Significa que ningun dron esta online y esta disponible, o todos estan ocupado.
		echo "Porfavor intente mas tarde. Todos los drones estan ocupados. Reservar, calcular tiempo de espera.";
	}
}
else {
	$videoFeedURL = "http://video-js.zencoder.com/oceans-clip.ogv";				//DEBUG. Borrar
	$typeVideo = "video/ogg";
}

?>
<!DOCTYPE html>
<html>
<head>
    <title></title> 

    <link rel="stylesheet" media="screen" type="text/css" title="Design" href="css/playVideoFull.css">
	
	<!-- Chang URLs to wherever Video.js files will be hosted -->
	<link href="players/video-js/video-js.css" rel="stylesheet" type="text/css">
	<!-- video.js must be in the <head> for older IEs to work. -->
	<script type="text/javascript" src="players/video-js/video.js"></script>

    <link href="bootstrap/bootstrap.css" rel="stylesheet" type="text/css">
</head>
<body>
    <!-- **************************************************************************************************************************** -->
    <header>
    	<div id="headerLogo">
    		<img src="images/logo/HackBotsLogoBlanco_150x37px.png">
    	</div>
    	<div id="headerNav">
			<nav>
				<ul>
					<li><a href="#">Help</a>
						<ul>
							<li><a>Controls</a>
								<ul>
									<li><a id="HelpKeyboard">Keyboard</a></li>
									<li><a>Menu level 3</a></li>
								</ul>
							</li>
							<li><a>Take picture</a></li>
							<li><a>Record video</a></li>
						</ul>
					</li>
					<li><a href="#">Time</a></li>
					<li><a href="#">Statics</a></li>
					<li><a id="Map" href="#">Map</a>
					</li>
					<li><a href="#">Finish</a></li>
				</ul> 
			</nav>
		</div>
    <!--
        <div id="lang">
            <div id="around">&nbsp;</div>
            <ul style="float:left;">
                <li><a href="http://www.paris-26-gigapixels.com/index-fr.html" title="Français"><img src="./Paris26Gigapixels_files/flag-fr.gif" alt="Français" width="17" height="17"></a></li>
                <li><a href="./Paris26Gigapixels_files/Paris26Gigapixels.htm" title="English"><img src="./Paris26Gigapixels_files/flag-uk.gif" alt="English" width="17" height="17"></a></li>
            </ul>
        </div>
    -->
    <!--
        <div id="hdview">
            <a href="http://www.paris-26-gigapixels.com/HDView/index-en.php" title="View Paris 26 Gigapixels with HD View"><img src="./Paris26Gigapixels_files/hdview.png" width="50" height="38" alt="View Paris 26 Gigapixels with HD View"></a>
        </div>
        <div id="realisation"><img src="./Paris26Gigapixels_files/project.png" width="112" height="25" alt="A project by"><br>
            <a href="http://www.kolor.com/" title="Kolor" target="_blank"><img src="./Paris26Gigapixels_files/kolor.png" width="133" height="39" alt="Kolor"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.arnaudfrichphoto.com/" title="Arnaud Frich" target="_blank"><img src="./Paris26Gigapixels_files/arnaud-frich.png" width="133" height="39" alt="Arnaud Frich"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.martinloyer.fr/en/" title="Martin Loyer" target="_blank"><img src="./Paris26Gigapixels_files/martin-loyer.png" width="133" height="39" alt="Martin Loyer"></a>
        </div>
    -->
    </header>

	
	<!-- Google Map -->
	<aside class="asideClosed">
    	MAPA
    </aside>

    <!-- ************************************************************************************************ -->
	<!--    
    <section id="videoPlayer">
        
        <video id="videoMain_1" class="video-js vjs-default-skin" controls preload="none" width="100%" height="100%"
            data-setup="{}">
        
            <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
            <source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm' />
            <source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' />
            <source src="<?php echo $sourceVideo ?>"  type="<?php echo $typeVideo; ?>"/></source>
        
            <source src="<?php echo $videoFeedURL; ?>" type="<?php echo $typeVideo; ?>" />s           
        </video>
        
    </section>
	-->
    <embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org"
    	width="100%" height="100%" target="rtsp://admin:admin@189.220.45.133:554/0" id="videoPlayer"
    	controls="false" allowfullscreen="false" windowless="true" autoplay="true"/>
    <object classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab">
    </object>

    <!-- ************************************************************************************************************** -->
    <footer class="footerClosed">
        <a class="slider"><img alt="" id="bot" src="images/player/arrow_bottom.png"></a>
        <div id="footerContent">
        	
        </div>
    </footer>

    <script type="text/javascript" src="js/jquery-1.10.1.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/playVideoFull.js" ></script>
	
</body>
</html>
<?php
if( mysql_num_rows ( $result ) ){				// False si no hay resultado, int si hay registros.
	mysql_free_result($result);					// Liberar la memoria.
}
?>