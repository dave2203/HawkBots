<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>HAWK BOTS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    .auto-style1 {
		color: #FFFFFF;
	}
       .auto-style7 {
		width: auto;
		zoom: 1;
		margin: 0;
	}
	
  #popup_box { 
	display:none; /* Hide the DIV */
	position:fixed;  
	_position:absolute; 
	height:320px;  
	width:300px;  
	right: 300px;
	top: 150px;
	z-index:100; 

	background-color: transparent;    
    float:left;
	padding:15px;  
	font-size:15px;  
	right:50%;
    margin-right: -400px;
	-moz-box-shadow: 0 0 5px #ff0000;
	-webkit-box-shadow: 0 0 5px #ff0000;
	box-shadow: 0 0 5px #ff0000;
	
}



  a{  
   cursor: pointer;  
   text-decoration:none;  
   } 

   /* Cerrar el link*/
   #popupBoxClose {
	font-size:20px;  
	line-height:15px;  
	right:5px;  
	top:5px;  
	position:absolute;  
	color:#6fa5e2;  
	font-weight:500;  	
	}
    .auto-style8 {
		color: #FFFFFF;
		font-size: 120%;
	}
    </style>
    
  	<!-- Google Fonts call. Font Used Open Sans & Open Sans Condensed -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>    
    
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
    
    <script src="http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js" type="text/javascript"></script>

<script type="text/javascript">
	
	$(document).ready( function() {
	
		// funcion para ejecutar el popup
		loadPopupBox();
	
		$('#popupBoxClose').click( function() {			
			unloadPopupBox();
		});
		
		$('#container').click( function() {
			unloadPopupBox();
		});

		function unloadPopupBox() {	// 
			$('#popup_box').fadeOut("slow");
			
			
		}	
		
		function loadPopupBox() {	// funcion que carga el popup
			$('#popup_box').fadeIn("slow");
			
					
		}
		/**********************************************************/
		
	});
</script>

   <link rel="stylesheet" type="text/css" href="assets/css/escenario.css">

  </head>

  <body>
  <!--
    <div id="popup_box">
    
               <form id='register' action='register.php' method='post' accept-charset='UTF-8'>
                  
                <fieldset>
                
                <legend class="auto-style1">Register</legend>
                
                <input type='hidden' name='submitted' id='submitted' value='1'/>
                <span class="auto-style1">
                <label for='name' >Full Name: </label>
                </span>
                <input type='text' name='name' id='name' maxlength="50" />
				<span class="auto-style1">
                <label for='email' >Email:</label></span>
                <input type='text' name='email' id='email' maxlength="50" />
 
                <input type='submit' name='Register' value='Register' />
                
                </fieldset>
                </form>
                        
                 <a id="popupBoxClose">Close</a>
                 
                
         </div>
-->

    <div class="navbar navbar-inverse navbar-fixed-top" style="left: 0; right: 0; top: 0; height: 43px">
      <div class="navbar-inner " style="left: 0px; top: 0px; height: 39px">
        <div class="auto-style7">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="index.html">
			<img src="assets/img/HackBotsLetrasBlancas.png" alt="" style="width: 150px; height: 37px" />	 </a>
          <div class="nav-collapse collapse">
            <ul class="nav" style="left: 0; top: 0px; height: 41px">
            	<li class="dropdown active">
            		<a href="index.html" class="dropdown-toggle" data-toggle="dropdown">Home </a>
                    <ul class="dropdown-menu">
                    	
                    </ul>
            	</li>
            	<li class="dropdown pull-right ">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Description</a>
                    
            	</li>
            	<li class="dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Platform </a>
                    
            	</li>
                <!--/Login 
            	<li class="dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Clients <b class="caret"></b></a>
                    -->
            	</li>
                <!--/Login             	<li class="dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Useful <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                    	<li><a href="faq.html">FAQ Page</a></li>
                    	<li><a href="features.html">Features Page</a></li>
                    	<li><a href="skills.html">Skills Page</a></li>
                    	<li><a href="fullwidth.html">Full Width Page</a></li>
                    	<li><a href="mediumfooter.html">Footer Variation</a></li>
                    	<li><a href="bigfooter.html">Large Footer Version</a></li>
                    	<li><a href="sitemap.html">Sitemap Page</a></li>
                    	<li><a href="timeline.html">Timeline Page</a></li>
                    	<li><a href="login.html">Login Page</a></li>
                    	<li><a href="login2.html">Login Page Variation</a></li>
                    	<li><a href="register.html">Register Page</a></li>
                    	<li><a href="404.html">404 Error Page</a></li>
                    </ul>
            	</li> -->
                <!--/Login 
            	<li class="dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Special <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                    	<li><a href="landing.html">Landing Page</a></li>
                    	<li><a href="landing2.html">Landing Page Variation</a></li>
                    	<li><a href="comingsoon.html">Coming Soon Page</a></li>
                    	<li><a href="comingsoon2.html">Coming Soon w/Countdown</a></li>
                    	<li><a href="onepage.html">One Page Theme</a></li>
                    	<li><a href="vcard.html">Vcard Page</a></li>
                    	<li><a href="resume.html">Resume Page</a></li>
                    	<li><a href="event.html">Event Page</a></li>
                    	<li><a href="dribbble.html">Dribbble Shots Widget</a></li>
                    	<li><a href="pinterest.html">Pinterest Widget</a></li>
                    	<li><a href="instagram.html">Instagram Widget</a></li>
                    </ul>
            	</li>
            	<li class="dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Portfolios <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                    	<li><a href="portfolio.html">Basic Portfolio Page</a></li>
                    	<li><a href="portfolio2.html">2 Columns Portfolio</a></li>
                    	<li><a href="portfolio3.html">3 Columns Portfolio</a></li>
                    	<li><a href="portfolio4.html">4 Columns Portfolio</a></li>
                    	<li><a href="portfolio5.html">3 Columns Circle Items</a></li>
                    	<li><a href="portfolio6.html">4 Columns Circle Items</a></li>
                    	<li><a href="portfolio7.html">Portfolio Triangle Variation</a></li>
                    	<li><a href="portfolio8.html">Portfolio Hexagon Variation</a></li>
                    	<li><a href="portfolio10.html">Single Item</a></li>
                    	<li><a href="portfolio11.html">Single Item Right Sidebar</a></li>
                    	<li><a href="portfolio12.html">Single Item left Sidebar</a></li>
                    	<li><a href="portfolio13.html">Single Item 2 Sidebars</a></li>
                    	<li><a href="portfolio14.html">Single Video Item</a></li>
                    	<li><a href="portfolio15.html">Single Video Item Variation</a></li>
	                    <li class="divider"></li>
                    	<li><a href="case.html">Case of Study</a></li>
                    	<li><a href="case2.html">Case of Study Variation</a></li>
                    </ul>
            	</li>
            	<li class="dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                    	<li><a href="blog.html">Blog Classic</a></li>
                    	<li><a href="blog2.html">Blog Variation</a></li>
                    	<li><a href="blog3.html">Blog Variation 2</a></li>
                    	<li><a href="blog4.html">Blog Variation 3</a></li>
                    	<li><a href="blog5.html">Single Post Right Sidebar</a></li>
                    	<li><a href="blog6.html">Single Post Left Sidebar</a></li>
                    	<li><a href="blog7.html">Single Post Double Sidebar</a></li>
                    </ul>
            	</li> -->
            	<li class="dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Contact </a>
                    
            	</li>
                <!--Login -->
          
          <li  class="dropdown  " id="menu1">
             <a class="dropdown-toggle " data-toggle="dropdown" href="#menu1">
               Login
                <b class="caret"></b>
             </a>
             <div class="dropdown-menu ">
               <form style="margin: 0px" accept-charset="UTF-8" action="/sessions" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="" /></div>
                 <fieldset class='textbox' style="padding:10px">
                   <input style="margin-top: 8px" type="text" placeholder="Username" />
                   <input style="margin-top: 8px" type="password" placeholder="Passsword" />
                   <input class="btn-primary" name="commit" type="submit" value="Log In" />
                 </fieldset>
               </form>
             </div>
           </li>
                <!--/Login -->
                
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
            <!--
      <div class="text-center" style="left: 0px; top: 19px; width: 810px; height: 299px">
	  <span class="auto-style10"><!-- /carouselwrap -->
	<!--
    <br>
-->   <!-- 
 	  	<br><br></span><span lang="es-mx"><span class="auto-style1">
	  &nbsp;&nbsp; <br></span></span>
	  <span class="auto-style1"><br></span>
	  <span class="auto-style10">
		  <img alt="" src="HackBotsLetrasBlancas2.png" style="height: 250px; position: absolute; left: 248px; top: 25px; width: 950px;"></span></div>
	
-->
    <!--
     <br>

	  
     <div class="text-center" style="left: -42px; top: -54px">
     
     -->
    <!-- <span>
     <br class="auto-style14"><span class="auto-style1">
		 <span lang="es-mx" class="auto-style14">&nbsp;&nbsp;&nbsp;&nbsp;
		 </span></span><span class="auto-style13"><span lang="es-mx">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 </span>Thank you for requesting access to the <span lang="es-mx">hawkbots</span> 
		 platform<span lang="es-mx">,</span><br><br><span lang="es-mx">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 </span>We'll be in touch soon.</span></span>
-->		 

 
 
     	<!--<span lang="es-mx" class="auto-style14">&nbsp;&nbsp; </span>
-->		 

 
 
  <!--   </div>
-->     

     <div id="divContenedor">
			<div id="divFondo">
				<div id="divNubes"></div>
				<!--<div id="divLeopardo"><img src="img/leopardo.gif"></div>-->
				<div> 
					<img alt="" src="assets/img/HackBotsLetrasBlancas2.png" style="height: 250px; position: absolute; left: 248px; top: -1px; width: 950px;"></div>
				<br>
				<div style="left: 374px; top: 221px; width: 645px;" class="auto-style8"> <span> Thank you for requesting access to the platform, We'll be in touch soon. </span>  </div>
			</div>
		</div>
		
		
     <br>
     <br>
     <br>
     <br>
     
    <div id="blackwrap">
     <div class="container">
    	<div class="row">
    		<div class="middle">
    		<br>
	    		<div class="span3">
	    			<img src="assets/img/facebook.png" class="img-circle imageClip" style="width: 70px; height: 70px">
	    			<br>
	    			<br>
	    			<a href="http://www.facebook.com/pages/IRON-DRONE/458220340919096?fref=ts" class="btn btn-info icon-white center" style="color: #FFFFFF"> HawkBots of FB </a>
	    		</div><!-- /span3 -->
	    		
	    		<div class="span3">
	    			<img src="assets/img/twitter2.png" class="img-circle imageClip" style="width: 70px; height: 70px">
	    			<br>
	    			<br>
	    			<a href="https://twitter.com/IRONDRONE" class="btn btn-info icon-white center" style="color: #FFFFFF"> @HawkBots </a>
	    		</div><!-- /span3 -->
	    		
	    		<div class="span3">
	    			<img src="assets/img/g++.png" class="img-circle imageClip" style="width: 75px; height: 75px">
	    			<br>
	    			<br>
	    			<p>: <span lang="es-mx">Google Plus</span></p>
	    		</div><!-- /span3 -->
 
	    		<div class="span3">
	    			<span class="auto-style1">
	    			<img src="assets/img/gmail.png" style="height: 70px" width="79">
	    			<br>
	    			<br>
	    		    </span>
	    		 <a href= "mailto:irondrone1@gmail.com" class="btn btn-info icon-white center" style="color: #FFFFFF"> irondrone1@gmail.com </a>	    		
	    		
    		</div><!-- /middle -->
    	</div><!-- /row -->
  
      </div><!-- /container -->
	 </div>
	 
	 	<div id="footerwrap"><br>
	  <p><span lang="es-mx" style="font-size: 14px">&copy; IRON DRONE Inc. 2013.All rights reserved. Terms and 
	   Conditions. See our Privacy Policy</span></p>
       <br>
      
	  </div>
     </div>
     
     <script type="text/javascript" src="assets/js/ext/jquery-1.7.2.min.js"></script>
     <script type="text/javascript" src="assets/js/animar-escenario.js"></script>


    </body>
</html>

<?php

include("conex.php");
$link=Conectarse(); 

$name =$_POST[name];
$email=$_POST[email];
$ip= $_SERVER['REMOTE_ADDR']

$Consulta= "Insert into RegistroPagina (Correo,IP) Values ('$email','$ip')";
$Resultado= mysql_query ($Consulta, $link);
mysql_close($link);

?>

