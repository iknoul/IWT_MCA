<?php
 if(isset($_POST['submit']))
 {
    $min=$_POST['min'];
    $max=$_POST['max'];
    $random=rand($min,$max);
    echo 'Random number is'.$random;
 }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number</title>
</head>
<body>
    <form action="random.php" method="post">
       Minimum Limit: <input type="text" name="min">
      <br>Maximum Limit:  <input type="text" name="max">
      <br>
        <input type="submit" name="submit" value="Get random number">
    </form>
</body>
</html>