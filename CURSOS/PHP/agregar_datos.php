<?php
    require_once "../../BD/conexion.php";
    $conexion = conexion(); 


    if(empty($_POST['nombre']) or empty($_POST['descripcion'])){
        echo "Campos Vacios";
    }else{
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];

        $query = "INSERT into cursos (nombre, descripcion) values ('$nombre', '$descripcion')";
        $result = mysqli_query($conexion, $query);  

        if(!$result){
            die('La consulta ha fallado');
        }echo 'Registro agregado.';

    }

?> 
