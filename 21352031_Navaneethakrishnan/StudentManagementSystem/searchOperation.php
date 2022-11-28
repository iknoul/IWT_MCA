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
    <a href="index.php" id='back'>BACK</a>
      <style>
        #back{
            border:2px solid blue;
            color: white;
            padding: 5px;
            border-radius: 10px;
            background-color: blue;
            text-decoration: none;
            
        }

.table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.table td, .table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.table tr:nth-child(even){background-color: #f2f2f2;}

.table tr:hover {background-color: #ddd;}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>


</body>
</html>

<?php

    $con = new PDO("mysql:host=localhost;dbname=pu",'root','password');

    if(isset($_POST["viewAll"])){
        $str = $_POST["viewAll"];
        $sth = $con->prepare("SELECT * FROM `sample_data`");
        $sth->setFetchMode(PDO:: FETCH_OBJ);

        $sth -> execute();
        $i = 1;
        ?>
        <table class="table">
                <thead>
                    <td>STUDENT NAME</td>
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
            
            <table class="table">
        
                <tbody>
                    <td><?php echo $row->student_name; ?></td>
                    <td><?php echo $row->register_number; ?></td>
                    <td><?php echo $row->Institutional_Email; ?></td>
                    <td><?php echo $row->Personal_Email; ?></td>
                    <td><?php echo $row->mobile; ?></td>
                    
                    
                </tbody>
            </table>
            <?php
        }

        
    }
?>


<?php
    if(isset($_POST["searchOperation"])){
        $str = $_POST["search"];
        $sth = $con->prepare("SELECT * FROM `sample_data` WHERE register_number = '$str'");
        $sth->setFetchMode(PDO:: FETCH_OBJ);

        $sth -> execute();

        if($row = $sth->fetch())
        {
            ?>
            <br><br><br>
            <table class="table">
                <thead>
                    <td>NAME</td>
                    <td>REGISTER NUMBER</td>
                    <td>INSTITUTIONAL MAIL ID</td>
                    <td>PERSONAL MAIL ID</td>
                    <td>MOBILE</td>
                </thead>
                <tbody>
                    <td><?php echo $row->student_name; ?></td>
                    <td><?php echo $row->register_number; ?></td>
                    <td><?php echo $row->Institutional_Email; ?></td>
                    <td><?php echo $row->Personal_Email; ?></td>
                    <td><?php echo $row->mobile; ?></td>
                    
                </tbody>
            </table>
            <?php
        }

        
        else{
            echo "Name does not exist..!";
        }
    }

?>
