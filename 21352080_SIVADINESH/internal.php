<?php
    include "connection.php";
    if(isset($_POST['submit'])){
     $register_number=$_POST['register_number'];
     $Internal_1 = $_POST['Internal_1'];
     $Internal_2 = $_POST['Internal_2'];
     $Internal_3 = $_POST['Internal_3'];
        $q = " INSERT INTO `internal_theory`(`register_number`, `Internal_1`, `Internal_2`, `Internal_3`) VALUES ( '$register_number', '$Internal_1', '$Internal_2', '$Internal_3')";
    
    }

?>
    