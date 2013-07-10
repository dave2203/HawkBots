<?php
/*Generar pagina del reproductor.*/
/*
class videoFile{
	private $width;
	private $heigth;
	private $sourceVideo;
	private $typeVideo;

	public function __construct($width,$heigth,$sourceVideo,$typeVideo){
		$this->title = $title;
		$this->$heigth = $;
		$sourceVideo = 
	}
	public function __construct($title,$author,$date,$category=0){
		$this->title = $title;
		$this->author = $author;
		$this->date = $date;
		$this->category = $category;
	}
}
*/
/* Caracteristicas de los videos.
	Nota: Obtener las caracteristicas desde la base de datos.
*/
$width =  640;
$heigth = 264;
$sourceVideo = "http://192.168.0.2:8080";
$typeVideo = "video/ogg";
$player = 1;


//$video = new videoFile();


?>
<div class="row-fluid">
	<!-- Player -->
	<div id="videoContainer" class="span10" style="width: 100%; height:400px; margin: 0 auto;" >
	<?php
	switch ($player) {
		case 1:
			//video-js
			?>
		<video id="videoMain_1" class="video-js vjs-default-skin" controls preload="none" width="100%" height="100%"
			data-setup="{}">
			<!--
			<source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
			<source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm' />
			<source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' />
			<source src="<?php echo $sourceVideo ?>"  type="<?php echo $typeVideo; ?>"/></source>
			-->
			<source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' />
		</video>
			<?php
			break;
		case 2:
			//MediaElement.js
			?>
			
			<?php
			break;
		case 3:
			//Acorn Media Player
			?>
			
			<?php
			break;
		case 4:
			//http://openvideoplayer.sourceforge.net/
			?>
			
			<?php
			break;
		default:
			?>
			
			<?php
			break;
	}
	
	
	?>
	</div>
	<div id="videoPanel" class="span2">
		<div><a href="#">Finalizar</a></div>
		<div><img src="images/mapa/MapTranparente.png" /></div>
		<div>
			<div>Tiempo: ##:##:##</div>
			<div>Restante: ##:##:##</div>
		</div>
		<div>
			<div>FPS</div>
			<div>Video</div>
			<div>Fotos</div>
			<div>Anch. Band:</div>
		</div>
		<div><a href="#">Instrucciones</a></div>
	</div>
	<!-- controls -->
	<div></div>
	
</div>