<?php
    require_once "../BD/conexion.php";
    $conexion = conexion();

     $curso_id = $_POST['curso_id'];   
    $query = "SELECT * FROM cursos WHERE curso_id=$curso_id";     
    $result = mysqli_query($conexion, $query);

        if(!$result){
            die('La consulta ha fallado');
        }

        $json = array();
        while ($row = mysqli_fetch_array($result)) {
            $json[]=array(
                'nombre' => $row['nombre'],
                'descripcion' => $row['descripcion'],
                'curso_id' => $row['curso_id']
            );
        }

    $jsonstring = json_encode($json[0]);
    echo $jsonstring;
?>