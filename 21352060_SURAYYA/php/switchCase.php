<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   
    <form action="switchCase.php" method="post">
        Num1: <input type="text" name="num1">
        <br>
        Num2: <input type="text" name="num2">
        <br>
        Operation: <select name="op" id="">
            <option value="1">Add</option>
            <option value="2">Subtract</option>
            <option value="3">Multiply</option>
            <option value="4">Divide</option>
        </select>
        <input type="submit" value="Submit" name="submit">

    </form>
    <?php
    if(isset($_POST['submit']))
    {
        $num1=(int)$_POST['num1'];
        $num2=(int) $_POST['num2'];
        $op=$_POST['op'];
       $result='';
        switch($op)
        {
            case '1':$result=$num1+$num2;
            break;
            case '2':$result=$num1-$num2;
            break;
            case '3':$result=$num1*$num2;
            break;
            case '4':$result=$num1/$num2;
            break;
            default:echo 'Choose Correctly';
            break;
        }
        echo 'Result :'.$result;
    }

    ?>
</body>
</html>