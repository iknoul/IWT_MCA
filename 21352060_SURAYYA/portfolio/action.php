<?php 
if(isset($_POST['send']))
{
    $conn=mysqli_connect("localhost","root","","iwtdb");

    $email=$_POST['email'];
    $name=$_POST['name'];
    $comment=$_POST['comment'];
    $sql="insert into Comment values('$email','$name','$comment')";
    $result=mysqli_query($conn,$sql);
    if($result)
    {
        echo '<script>alert("Thank You for your comments");</script>';
        
        header("Location:index.php");
    }
    
}

?>