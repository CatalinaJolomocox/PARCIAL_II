<?php
    require_once "../BD/conexion.php";
    $conexion = conexion();

    $curso_id= $_POST['id'];
    $nombre= $_POST['nombre'];
    $descripcion= $_POST['descripcion'];

    $query =   "UPDATE cursos SET nombre = '$nombre', descripcion= '$descripcion' WHERE curso_id = '$curso_id'";
        
        $result = mysqli_query($conexion, $query);
        if(!$result){
            die('Error en la consulta');
        }
            echo "Registro Actualizado";
        
?>
