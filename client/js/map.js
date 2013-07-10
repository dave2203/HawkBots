//mapTypeId: google.maps.MapTypeId.ROADMAP
//mapTypeId: google.maps.MapTypeId.SATELLITE
//mapTypeId: google.maps.MapTypeId.HYBRID
//mapTypeId: google.maps.MapTypeId.TERRAIN

//Esto es una variable gloabal.

//La tecnica utilizada será declarar un objeto (variable, clase,namespace, etc) global y meter todas mis variable alli
// dentro. El objetivo e sno contaminar el espacio global con mis variables.


var coorMap = new google.maps.LatLng(-4.397, 120.644);
var coorMarker = new google.maps.LatLng(-4.4, 120.644);

function initialize() {
    var mapOptions = {
      center: coorMap,				//Centro del mapa de Google.
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
        
	var marker = new google.maps.Marker({
    	position: coorMarker,
    	title:"Hello World!"
	});

	// To add the marker to the map, call setMap();
	marker.setMap(map);
	
	//setInterval, setInterval ->http://www.w3schools.com/js/js_timing.asp
	
	setInterval(function(){
		//alert("cambio");
		coorMarker['jb'] = coorMarker['jb'] + 0.1;
		console.log(coorMarker['jb']);
		}, 1000);
	//coorMarker['jb'] = -4.5;
	
	// Stop ejecucion
	//var myVar = setInterval(function(){myTimer()},1000);
	//function myTimer() {
	//	var d=new Date();
	//	var t=d.toLocaleTimeString();
	//	document.getElementById("demo").innerHTML=t;
	//} 
	//window.clearInterval(intervalVariable)
}

google.maps.event.addDomListener(window, 'load', initialize);
