 
<?php  
$n = 0;  
$a = 0;  
$b = 2;  
echo "Fibonacci series with the first 2 numbers as 0 and 2 is: ";   
echo "$a, $b";  
 
while ($n < 26 )   
{  
$c = $b + $a;  
echo ", ";
echo "$c";  
$a = $b;  
$b = $c;  
$n = $n + 1;
}
?> 
 