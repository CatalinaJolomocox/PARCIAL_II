<?php
    function conexion(){
        $servidor = "localhost"; 
        $usuario = "root";
        $password = "";
        $bd = "pp_2020";     

        $conexion = mysqli_connect($servidor, $usuario, $password, $bd);
        $conexion->set_charset('utf8');
        
        return $conexion;
    }

/*   if(conexion()){
        echo "CONECTADO";
    }else {
        echo "NO CONECTADO";
    } 
*/

?>