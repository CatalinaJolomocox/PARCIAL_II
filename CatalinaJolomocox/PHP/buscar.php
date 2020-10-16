<?php
    require_once "../BD/conexion.php";
    $conexion = conexion(); 

    $busqueda = $_POST['busqueda'];
    if(!empty($busqueda)){
      $query = "SELECT * FROM cursos WHERE  curso_id LIKE '$busqueda%' OR 
                                            nombre LIKE  '$busqueda%'";
      
      $result =mysqli_query($conexion, $query);
      if(!$result){
        die("Error de consulta".mysqli_error($conexion));
      }
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
              'curso_id' => $row['curso_id'],
              'nombre' => $row['nombre'],
              'descripcion' => $row['descripcion']
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>
    