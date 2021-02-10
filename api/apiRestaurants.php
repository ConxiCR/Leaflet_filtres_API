<?php
// The following property can be used to configure cross-origin resource sharing
header('Access-Control-Allow-Origin: *');
//ordeno la forma de mostrar el json
header('content-type: application/json');

/*
Trataremos los datos de acuerdo con la especificación 
*/
include("_db.php");

$sql = "SELECT * FROM restaurants"; 
$result = $mysqli->query($sql);

$numrows = $result->num_rows;

$datos = array();

$datos = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($datos);

?>
		