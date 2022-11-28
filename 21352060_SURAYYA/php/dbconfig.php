<?php

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "iwtdb";

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}
else
{
    echo 'connected';
}