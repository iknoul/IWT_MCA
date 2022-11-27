<?php
    include "connection.php";
    if(isset($_POST['submit'])){
       $attendence = $_POST['attendence'];
       $register_number = $_POST['register_number'];
       $attendencedate = $_POST['attendencedate'];
        $sql = "ALTER table pu.student add column `'$attendencedate'` varchar(8)";

        if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
       
    }
    else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

}
?>
 <?php
    include "connection.php";
    if(isset($_POST['submit'])){
        $attendence = $_POST['attendence'];
        $attendencedate = $_POST['attendencedate'];
        $register_number = $_POST['register_number'];
        $sql = "update student set `'$attendencedate'` = `$attendence` where register_number = $register_number";
        if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
       
    }
    else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


        $query = mysqli_query($conn,$sql);
         
    }
    

?>



<!DOCTYPE html>
<html>
<head>
 <title>attendence</title>

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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.php">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="create.php"><span style="font-size:larger;">Add New</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 <div class="col-lg-6 m-auto">
 
 <form method="post">
 
 <br><br><div class="card">
 
 <div class="card-header bg-primary">
 <h1 class="text-white text-center">  ATTENDENCE </h1>
 </div><br>

 
 <label> DATE: </label>
 <input type="date" name="attendencedate" class="form-control"> <br>
 <label> Register No: </label>
<input type="number" name="register_number" class="form-control"> <br>

<label for="present">PRESENT</label>
<input type="radio" name="attendence" value="present">
<label for="absent">ABSENTS</label>
<input type="radio"  name="attendence" value="absent">


 <button class="btn btn-success" type="submit" name="submit"> Submit </button><br>
 
 </div>
 </form>
 </div>
</body>
</html>