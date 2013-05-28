<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>




</body>

<?php

include("conex.php");
$link=Conectarse(); 

$name =$_POST[name];
$email=$_POST[email];

$Consulta= "Insert into RegistroPagina (Nombre, Correo) Values ('$name', '$email')";
$Resultado= mysql_query ($Consulta, $link);
echo "Thanks for registering with hawkbots!";

mysql_close($link);

?>

</html>