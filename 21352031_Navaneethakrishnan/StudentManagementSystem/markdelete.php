<?php
    include "connection.php";
    if(isset($_GET['register_number'])){
        $register_number = $_GET['register_number'];
        $sql = "DELETE from `internal_theory` where register_number=$register_number";
        $conn->query($sql);
    }
    header('location:internalshow.php');
    exit;
?>
Foo