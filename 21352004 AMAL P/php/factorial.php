<?php 
function factorial($n)  
{  
  if($n <= 1) {  
    return 1;  
  }  
  else{  
    return $n * factorial($n - 1);  
  }  
} 
if(isset($_POST['submit']))
{
    $n=$_POST['num'];
    echo "Factorial of $n is " .factorial($n); 
}

 
?>  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial</title>
</head>
<body>
    <form action="factorial.php" method="post">
        Number: <input type="text" name="num">
        <input type="submit" value="Find factorial" name="submit">
    </form>
</body>
</html>