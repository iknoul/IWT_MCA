
<?php
  include "connection.php";
  $student_name="";
  $register_number="";
  $Institutional_Email="";
  $Personal_Email="";
  $mobile="";

  $error="";
  $success="";

  if($_SERVER["REQUEST_METHOD"]=='GET'){
    if(!isset($_GET['register_number'])){
      header("location:index.php");
      exit;
    }
    $register_number = $_GET['register_number'];
    $sql = "select * from internal_lab where register_number=$register_number";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    while(!$row){
      header("location:index.php");
      exit;
    }
    $register_number=$row["register_number"];
    $Internal_1=$row["Internal_1"];
    $Internal_2=$row["Internal_2"];
    $Internal_3=$row["Internal_3"];


  }
  else{

    $register_number=$_POST["register_number"];
    $Internal_1=$_POST["Internal_1"];
    $Internal_2=$_POST["Internal_2"];
    $Internal_3=$_POST["Internal_3"];

    $sql = "update internal_lab set register_number='$register_number', Internal_1='$Internal_1', Internal_2='$Internal_2', Internal_3=$Internal_3 where register_number='$register_number'";
    $result = $conn->query($sql);
    header('location:index.php');
    
  }

  
?>
<!DOCTYPE html>
<html>
<head>
 <title>CRUD</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" class="fw-bold">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.php"></a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.php">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="create.php">Add New</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 <div class="col-lg-6 m-auto">
 
 <form method="post">
 
 <br><br><div class="card">
 
 <div class="card-header bg-warning">
 <h1 class="text-white text-center">  Update  </h1>
 </div><br>

 
 
 <label> REGISTER NUMBER: </label>
 <input type="number" name="register_number" class="form-control"> <br>

 <label> INTERNAL-1: </label>
 <input type="number" name="Internal_1" class="form-control"> <br>

<label> INTERNAL-2: </label>
 <input type="number" name="Internal_2" class="form-control"> <br>

 <label> INTERNAL-3:</label>
 <input type="number" name="Internal_3" class="form-control"> <br>


 <button class="btn btn-success" type="submit" name="submit"> Submit </button><br>
 <a class="btn btn-info" type="submit" name="cancel" href="index.php"> Cancel </a><br>

 </div>
 </form>
 </div>
</body>
</html>