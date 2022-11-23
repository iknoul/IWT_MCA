<?php
    include "connection.php";
    if(isset($_POST['submit'])){
        $register_number = $_POST['register_number'];
        $Internal_1 = $_POST['Internal_1'];
        $Internal_2 = $_POST['Internal_2'];
        $Internal_3 = $_POST['Internal_3'];
        $sql = " INSERT INTO `internal_lab`(`register_number`, `Internal_1`, `Internal_2`, `Internal_3`) VALUES ( '$register_number', '$Internal_1', '$Internal_2', '$Internal_3')";
      }
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>lab internal</title>
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
              <a type="button" class="btn btn-primary nav-link active" href="index.php">Back</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="container my-4">
    <table class="table">
    <thead>
      <tr>
        <th>STUDENT-NAME</th>
        
        <th>INTERNAL-LAB-MARK</th>
      </tr>
    </thead>
    <tbody>
      <?php
        include "connection.php";
        $sql = "select * from sample_data";
        $result = $conn->query($sql);
        if(!$result){
          die("Invalid query!");
        }
        while($row=$result->fetch_assoc()){
          echo "
      <tr>
        <th>$row[student_name]</th>
        
        
        <td>
        <form method='post'>
 
 <br><br><div class='card'>
 
 <div class='card-header bg-primary'>
 <h1 class='text-white text-center'>  INTERNAL LAB MARK REGISTER </h1>
 </div><br>

 <label> REGISTER-NUMBER: </label>
 <input type='text' name='register_number' class='form-control' placeholder='REGISTER-NUMBER'> <br>

 <label> INTERNAL-1 </label>
 <input type='number' name='Internal_1' class='form-control' maxlength='2' placeholder='TOTAL MARK 30'> <br>

 <label> INTERNAL-2 </label>
 <input type='number' name='Internal_2' class='form-control' maxlength='2' placeholder='TOTAL MARK 30'> <br>

<label> INTERNAL-3 </label>
 <input type='number' name='Internal_3' class='form-control' maxlength='2' placeholder='TOTAL MARK 30'> <br>

 

 <button class='btn btn-success' type='submit' name='submit'> Submit </button><br>
 <a class='btn btn-info' type='submit' name='cancel' href='index.php'> BACK </a><br>

 </div>
 </form>
 
                  </td>
      </tr>
      ";
        }
      ?>
    </tbody>
  </table>
      </div>
    
    
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>