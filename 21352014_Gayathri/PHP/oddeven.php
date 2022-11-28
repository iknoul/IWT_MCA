<?php
// is Even or Odd in Normal way
function check($number){
    if($number % 2 == 0){
        echo "The given number is EVEN"; 
    }
    else{
        echo "The given number is ODD";
    }
}
$number = 39;
check($number)
?> 