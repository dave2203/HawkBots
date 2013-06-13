<?php
//No funciona por la version de MySQL, hay que hacerle unas cosas y reiniciarlo.
//$mysqli = new mysqli("localhost", "dexter_david", "david", "dexter_irondron2") or die("error connection");
//$mysqli = new mysqli("50.116.82.182", "dexter", "Sp1r0g1r0", "dexter_irondron2");
//$result = $mysqli->query("SELECT 'Hello, dear MySQL user!' AS _message FROM DUAL");
//$row = $result->fetch_assoc();
//echo htmlentities($row['_message']);
//http://net.tutsplus.com/tutorials/php/pdo-vs-mysqli-which-should-you-use/

/**
 * Open a connection with database
 *
 * @return db conecction
 * @author  
 */
function conn(){
	//$user = "dexter_david";
	//$pass = "david";
	$user = "dexter";
	$pass = "Sp1r0g1r0";
	$db = "dexter_irondron2";
	$link = mysql_connect('localhost', $user, $pass) or die("error connection");
	
	mysql_select_db($db, $link) or die("error database selection");
	
	return $link;
}