<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Hello, world!</title>
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
              <a type="button" class="btn btn-primary nav-link active" href="create.php"> New Register</a>
            </li>
            <li class="nav-item">
              <a class='btn btn-danger' href='InternalTheory.php?register_number=$row[register_number]'>Theory Register</a>
            </li>
          <li class="nav-item">    
          <a class='btn btn-success' href='labinternal.php?register_number=$row[register_number]'>Lab Register</a>
         </li>
            
         <li class="nav-item">
          <a class='btn btn-success' href='internalshow.php?register_number=$row[register_number]'>T Mark sheet</a>
          </li>
           <li class="nav-item">
                  <a class='btn btn-danger' href='labinternalshow.php?register_number=$row[register_number]'>Lab Mark sheet</a>
         
              </li>
          <li class="nav-item">
                  <a class='btn btn-danger' href='atten.php?register_number=$row[register_number]'>Attendance</a>
         
              </li>
         
          </ul>
        </div>
      </div>
    </nav>
     <form action="searchOperation.php" method="post">
        <div class="searchDiv">
            <label>REGISTER NUMBER:</label>
            <input type="text" name="search">
            <input type="submit" id="submit" name="searchOperation" value = "SEARCH">

            
        </div>
        <style type="text/css">
          .searchDiv{
            padding-left: 35%;
          }
          #submit{
            background-color: green;
            border-radius: 5px;
            border:1px solid green;
            color: white;
          }
          li{
            padding: 10px;

          }
          li a {
            width: 200px;
          }
        </style>
        
    </form>

    <div class="container my-4">
    <table class="table">
    <thead>
      <tr>
        <th>STUDENT-NAME</th>
        <th>REGISTER-NUMBER</th>
        <th>INSTITUTIONAL-EMAIL</th>
        <th>PERSONAL-EMAIL</th>
        <th>MOBILE</th>
        
        
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
        <td>$row[register_number]</td>
        <td>$row[Institutional_Email]</td>
        <td>$row[Personal_Email]</td>
        <td>$row[mobile]</td>
        
                 <td>
                 <a class='btn btn-success' href='edit.php?register_number=$row[register_number]'>Edit</a>
                  <br><br>
                  <a class='btn btn-danger' href='delete.php?register_number=$row[register_number]'>Delete</a>
                 
                
                </td>
                
      </tr>
      ";
        }
      ?>
    </tbody>
  </table>
      </div>
      <style type="text/css">
        .btn {
          width: 100px;
        }
      </style>
    
    
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>