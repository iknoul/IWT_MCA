
<?php

function check($number){
    if($number == 0)
        return 1;
    else if($number == 1)
        return 0;
    else if($number<0)
        return check(-$number);
    else
        return check($number-2);        
}
  
// Driver Code
$number = 39;
if(check($number))
    echo "Even";
else
    echo "Odd";
?>