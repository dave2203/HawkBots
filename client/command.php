<?php	/*	Ejecucion de los diferentes querys que se utilizan el el sitio web.	*/
//echo"<pre>";
//print_r($_POST);
//echo"</pre>";
require_once('coneccion/conn.php');	//Datos de la coneccion a la DB.
require_once('funciones.php');					//Funciones utiles.
//exit();
//Si existe "act" significa que se ejecuto submit() del fomulario.
if(isset($_POST["act"])){
	switch($_POST["act"])
	{
		case "admon_user_add":	// Proviene de "consultasAjax/admon_user_add.php".
			/*
				Array(
				    [name_txt] => sERG
				    [lastName_txt] => SSD
				    [edad_txt] => 23
				    [email_txt] => sergio@gmail.com
				    [idUserType_slct] => 114
				    [idUserSalary_slct] => 114
				    [sex_rdo] => M
				    [comentarios_txt] =>  Sergio
				)
			*/

			$name=GetSQLValueString($_POST["name_txt"],"text");
			$lastName=GetSQLValueString($_POST["lastName_txt"],"text");
			$edad=GetSQLValueString($_POST["age_txt"],"int");							//Not saved
			$email=GetSQLValueString($_POST["email_txt"],"text");						//Not saved
			$idUserType=GetSQLValueString($_POST["idUserType_slct"],"int");
			$idUserSalary=GetSQLValueString($_POST["idUserSalary_slct"],"int");
			$sex=GetSQLValueString($_POST["sex_rdo"],"text");							//Not saved
			$comentarios=GetSQLValueString($_POST["comentarios_txt"],"text");			//Not saved

			// ====================== Insert new user ======================//
		    mysql_select_db($database_conServ, $conServ) or die (mysql_error());
		    $queryInsert = "INSERT INTO tblUsers (name,lastname,idtblSalary,idtblUser) VALUES (".$name.", ".$lastName.", ".$idUserSalary.", ".$idUserType.");";
			$ResultAddUser = mysql_query($queryInsert, $conServ); // Insert new user.
			//echo $queryInsert;
			//echo "Insertado registro";
			//exit();
			//header("Location:index.php?menu=admon_user_add");
			break; // switch($_POST["Act"])
		case "admon_user_delete":	// Proviene de "consultasAjax/admon_user_add.php".
			/*
				Array(
				    [act] => admon_user_delete
				    [id] => 17
				)

			*/
			// ====================== Dlet a register from tblUsers ===============//	
			mysql_select_db($database_conServ, $conServ) or die (mysql_error());	
			$queryDelete = "DELETE FROM tblUsers WHERE idtblUsers=".$_POST["id"].";";
			echo $queryDelete;
			$queryDeleteUser = mysql_query($queryDelete, $conServ) or die (mysql_error());
		
			//header("Location:index.php?menu=admon_user_delet");
			break; // switch($_POST["Act"])
	}
}
?>