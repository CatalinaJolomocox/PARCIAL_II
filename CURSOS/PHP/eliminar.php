<?php
    require_once "../../BD/conexion.php";
    $conexion = conexion(); 

    if(isset($_POST['curso_id'])){
        $curso_id = $_POST['curso_id'];
        
        $query= "DELETE from cursos where curso_id=$curso_id";        
        $result= mysqli_query($conexion, $query);

        if(!$result){
            die('Error en la consulta');
        }
        echo "Registro Eliminado";
    }

    
    

?>