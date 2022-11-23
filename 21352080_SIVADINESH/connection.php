<?php 
    $servername = "localhost";
    $username = "root";
    $password = "mysql@123";
    $db_name = "siva";  
    $conn = new mysqli($servername, $username, $password, $db_name,);
    if($conn->connect_error){
        die("Connection failed".$conn->connect_error);
    }
    echo "";
    
    ?>