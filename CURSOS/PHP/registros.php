<?php
    require_once "../../BD/conexion.php";
    $conexion = conexion();
    
    $query = "SELECT * FROM cursos";     
    $result = mysqli_query($conexion, $query);

    if(!$result){
        die('La consulta ha fallado'.mysqli_error($conexion));
    }

    $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
              'curso_id' => $row['curso_id'],
              'nombre' => $row['nombre'],
              'descripcion' => $row['descripcion'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
?>