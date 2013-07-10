//mapTypeId: google.maps.MapTypeId.ROADMAP
//mapTypeId: google.maps.MapTypeId.SATELLITE
//mapTypeId: google.maps.MapTypeId.HYBRID
//mapTypeId: google.maps.MapTypeId.TERRAIN

//Esto es una variable gloabal.

//La tecnica utilizada será declarar un objeto (variable, clase,namespace, etc) global y meter todas mis variable alli
// dentro. El objetivo e sno contaminar el espacio global con mis variables.
function initialize(amountParticles) {
	
	// Returns a random integer between min and max
	// Using Math.round() will give you a non-uniform distribution!
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	var Particle = function(){
		var id = "id= "+getRandomInt(1,100);						//Identificador de la particula
		
		var coorMarker; 
		// To add the marker to the map, call setMap();
		var marker = new google.maps.Marker({
		    	position: new google.maps.LatLng(0,0),						//Posicion inicial
		    	title:"Particle: "+id,
		    	map: map
		});
		//marker.setMap(map);			//map es heredado.
		
		// Get position of this particle.
		this.step = function(){
			// Obtener su posicion, las opciones son eventos o indexado.
			// Eventos: No necesario porque la transmision de datos es casi constante, si fueran el lapsos de tiempo aleatorio entonces si convendira.
			// Indezado: Se localiza atraves de un nombre unica del elemento.
			coorMarker = new google.maps.LatLng(getRandomInt(-90,90),getRandomInt(-180,180));
		}
		
		// Draw particle
		this.draw = function(){
			//Notice that you cannot modify the coordinates of a LatLng.
			//If you want to compute another point, you have to create a new one.
			//https://developers.google.com/maps/documentation/javascript/reference#LatLng
			marker.setPosition(coorMarker);
			console.log("Cambio de "+id);
		}
	}
	
	
	var mapCanvas = document.getElementById("map-canvas");
	//Create map
	var mapOptions = {									// Al estar dentro de la funcion initialize se comporta como una variable privada.
      center: new google.maps.LatLng(0,0),				//Centro del mapa de Google.
      zoom:2,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(mapCanvas,mapOptions);
    
    Particle.prototype.map = map;			//Todos los objetos van a heredar a mapa.    
	
	// Create all particles:
	var particles = [];
	for(var i=0; i<amountParticles;i++){
		particles.push(new Particle());
	}
	
	// The setInterval method accepts a function as its first parameter and the delay in milliseconds in which to repeatedly call this function.
	//setInterval ->http://www.w3schools.com/js/js_timing.asp
	/*
	setInterval(function(){
		
		for(var i=0 ; i<amountParticles; i++){
            var a = particles[i];
		
			//Then the particle is stepped and drawn
	        a.step();
	        a.draw();
   		}
		// Stop ejecucion
		//var myVar = setInterval(function(){myTimer()},1000);
		//function myTimer() {
		//	var d=new Date();
		//	var t=d.toLocaleTimeString();
		//	document.getElementById("demo").innerHTML=t;
		//} 
		//window.clearInterval(intervalVariable)
	},200);
	*/
	
	//Self Invoking function. Preferible uzarlo en sustitucion a setInterval().
	!function runTracking(){
		for(var i=0 ; i<amountParticles; i++){
            var a = particles[i];
		
			//Then the particle is stepped and drawn
	        a.step();
	        a.draw();
   		}
   		setTimeout(runTracking,200)
	}();
}

google.maps.event.addDomListener(window, 'load', initialize(40));
