<?php

$servername = "localhost";
$username = "root";
$password = "sql321@1234567";
$dbname = "form";

$conn = mysqli_connect($servername , $username , $password , $dbname );

if($conn){
    if($_SERVER["REQUEST_METHOD"]=="POST")
    {
        $name = $_POST['name'];
		$course = $_POST['course'];
		$gender = $_POST['gender'];
		$phonenumber = $_POST['phonenumber'];
		$email = $_POST['email'];
		$address = $_POST['address'];
        $sql= "INSERT INTO student(name,course,gender,phonenumber,email,address) VALUES ('$name','$course','$gender','$phonenumber','$email','$address')";
        $result=mysqli_query($conn,$sql);
    echo "success";
    }
}
else{
    die("Error".mysqli_connect_error());
}

?>