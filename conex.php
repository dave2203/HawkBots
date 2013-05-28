<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>

<?php
function Conectarse()
{
$user = "dexter_david";
$pass = "david";
$db = "dexter_irondrone";
$link = mysql_connect("localhost", $user, $pass) or die("error connection");

mysql_select_db($db, $link) or die("error database selection");

return $link;	
}

?>

</body>
</html>