<?php 
include "connection.php";
if(isset($_POST['username'])){
    
    $username=$_POST['username'];
    $password=$_POST['password'];
    
    $sql="select * from staff_login where username='".$username."'AND Password='".$password."' limit 1";
    if (mysqli_query($conn, $sql)) {
       header('location:index.php');
   
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
        $query = mysqli_query($conn,$sql);
         
  }
?>
<!DOCTYPE html>
<html>
<head>
 <title>register</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.php"></a>
        <div class="collapse navbar-collapse" id="navbarNav">
          </div>
      </div>
    </nav>
 <div class="col-lg-6 m-auto">
 
 <form method="post">
 
 <br><br><div class="card">
 
 <div class="card-header bg-primary">
 <h1 class="text-white text-center">  LOGIN </h1>
 </div><br>

 <label> USER NAME: </label>
 <input type="text" name="username" class="form-control" required="" placeholder="User name"> <br>


 <label> PASSWORD: </label>
 <input type="password" name="password" class="form-control" placeholder="Password"> <br>


 <button class="btn btn-success" type="submit" name="submit"> Submit </button><br>
 <a class="btn btn-info" type="submit" name="cancel" href="http://localhost/iwt/staff_reg.php"> New Register </a><br>

 </div>
 </form>
 </div>
</body>
</html>