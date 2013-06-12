<?php
/*Generar pagina del reproductor.*/

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

/* Caracteristicas de los videos.
	Nota: Obtener las caracteristicas desde la base de datos.
*/
$width =  640;
$heigth = 264;
$sourceVideo = "http://192.168.0.2:8080";
$typeVideo = "video/ogg";
$player = 1


$video = new videoFile();

?>
<!-- Player -->
<div id="videoContainer">
	<video id="videoMain_1" class="video-js vjs-default-skin" controls preload="none" width="640" height="264"
		data-setup="{}">
	<!--
	<source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
	<source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm' />
	<source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' />
	-->
		<source src="<?php echo $video. ?>"  type="<?php echo $typeVideo; ?>"/></source>
	</video>
</div>
<!-- controls -->
<div></div>