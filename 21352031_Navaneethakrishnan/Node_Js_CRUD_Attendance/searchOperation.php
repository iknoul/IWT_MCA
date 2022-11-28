<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEARCH OPERATION USING PHP</title>
    <link rel="stylesheet" href="searchStyle.css">

    
</head>
<body>
<center>
    <form action="" method="post">
        <div class="searchDiv">
            <label>REGISTER NUMBER:</label>
            <input type="text" autocomplete="off" name="search">
            <input type="submit" name="searchOperation" value = "SEARCH"><br>
        </div>
        
        <div class="view">
            <input type="submit" name="viewAll" value = "VIEW ALL">  
        </div>
        
        <div class="viewAttndance">
            <label>SELECT DATE:</label>
            <input type="date" name="attendanceDate">
            <label for="subject">SUBJECT</label>
            <select name="subjects" id="subject">
                <option value="CRYPTOGRAPHY">FundamentalsOfCrytpography</option>
                <option value="IWT">InternetAndWebTechnologies</option>
                <option value="MCS">Management concepts and strategies</option>
                <option value="SWE">Software Engineering</option>
            </select>
            <label for="faculty">FACULTY NAME</label>
            <select name="faculties" id="faculty">
                <option value="Sukhwinder singh">Sukhwinder singh</option>
                <option value="Vaidehi">Vaidehi</option>
                <option value="Suresh Joseph">Suresh Joseph</option>
                <option value="Seenivasan">Seenivasan</option>
            </select>
            <input type="submit" name="attendance" value = "GET ATTENDANCE LIST">
        </div>


        <div class="takeAttndance">
            <input type="date" name="takeAtdnce">
            <input type="submit" name="takeAttendance" value = "TAKE ATTENDANCE">
        </div>
        
    </form>
</center>
</body>
</html>

<?php

    $con = new PDO("mysql:host=localhost;dbname=iwt_lab",'root','Naveen@007');

    if(isset($_POST["viewAll"])){
        $str = $_POST["viewAll"];
        $sth = $con->prepare("SELECT * FROM `mcasts`");
        $sth->setFetchMode(PDO:: FETCH_OBJ);

        $sth -> execute();
        $i = 1;
        ?>
        <table>
                <thead>
                    <td>NAME</td>
                    <td>REGISTER NUMBER</td>
                    <td>INSTITUTIONAL MAIL ID</td>
                    <td>PERSONAL MAIL ID</td>
                    <td>MOBILE</td>
                    
                </thead>
        </table>
        <?php
        
        while($row = $sth->fetch())
        {
            
            ?>
            
            <table>
        
                <tbody>
                    <td><?php echo $row->Name; ?></td>
                    <td><?php echo $row->RegisterNumber; ?></td>
                    <td><?php echo $row->InstitutionalEmail; ?></td>
                    <td><?php echo $row->PersonalEmail; ?></td>
                    <td><?php echo $row->Mobile; ?></td>
                    
                    
                </tbody>
            </table>
            <?php
        }

        
    }
?>


<?php
    if(isset($_POST["searchOperation"])){
        $str = $_POST["search"];
        $sth = $con->prepare("SELECT * FROM `mcasts` WHERE RegisterNUmber = '$str'");
        $sth->setFetchMode(PDO:: FETCH_OBJ);

        $sth -> execute();

        if($row = $sth->fetch())
        {
            ?>
            <br><br><br>
            <table>
                <thead>
                    <td>NAME</td>
                    <td>REGISTER NUMBER</td>
                    <td>INSTITUTIONAL MAIL ID</td>
                    <td>PERSONAL MAIL ID</td>
                    <td>MOBILE</td>
                </thead>
                <tbody>
                    <td><?php echo $row->Name; ?></td>
                    <td><?php echo $row->RegisterNumber; ?></td>
                    <td><?php echo $row->InstitutionalEmail; ?></td>
                    <td><?php echo $row->PersonalEmail; ?></td>
                    <td><?php echo $row->Mobile; ?></td>
                    
                </tbody>
            </table>
            <?php
        }

        
        else{
            echo "Register Number does not exist..!";
        }
    }

?>



<?php

$conn = new mysqli('localhost','root','Naveen@007','iwt_lab');
// SELECT Name, `'$str'`FROM mcasts
    if(isset($_POST["attendance"])){
        $attDate = $_POST["attendanceDate"];
        $faculty = $_POST["faculties"];
        $subject = $_POST["subjects"];
        $space = " ";
        $str = $attDate.$space.$faculty.$space.$subject;
        if($str == ""){
            echo "Please select any date to get list";
        }
        $query = "SELECT Name, `'$str'`FROM mcasts";
        $date = "'$str'";
        $result = mysqli_query($conn,$query);
    
    ?>

    <table style = "width = 50%;">
                <thead>
                    <td>NAME</td>
                    <td><?php echo $str; ?></td> 
                </thead>
    </table>
                <?php 
                    while($rows = mysqli_fetch_assoc($result))
                    {
                ?>
    <table style = "width = 50%;">
                <tbody>
                    <td><?php echo $rows['Name']; ?></td>
                    <td><?php echo $rows[$date]; ?></td>   
                </tbody>
    </table>
                    
                <?php
                    } 
}else{

}
               
?>






<?php

$conn = new mysqli('localhost','root','Naveen@007','iwt_lab');
// SELECT Name, `'$str'`FROM mcasts
    if(isset($_POST["takeAttendance"])){
    
    ?>
        <table>
                <thead>
                  <tr>
                    <th>Roll No.</th>
                    <th>Student Name</th>
                    <th>Present</th>
                    <th>Absent</th>
                  </tr>
                </thead>
          <?php
          $sub_query = "SELECT RegisterNumber, Name, InstitutionalEmail from mcasts";
          $statement = $connect->prepare($sub_query);
          $statement->execute();
          $student_result = $statement->fetchAll();
          foreach($student_result as $student)
          {
          ?>
                <tr>
                  <td><?php echo $student["student_roll_number"]; ?></td>
                  <td>
                    <?php echo $student["student_name"]; ?>
                    <input type="hidden" name="student_id[]" value="<?php echo $student["student_id"]; ?>" />
                  </td>
                  <td align="center">
                    <input type="radio" name="attendance_status<?php echo $student["student_id"]; ?>" value="Present" />
                  </td>
                  <td align="center">
                    <input type="radio" name="attendance_status<?php echo $student["student_id"]; ?>" checked value="Absent" />
                  </td>
                </tr>
          <?php
          }
          ?>
              </table>
    
                    
                <?php
                    } 
else{

}
               
?>



      
        
          


      