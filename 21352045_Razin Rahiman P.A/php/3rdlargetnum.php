<?php

$arr=array(4,5,2,6,8);
$size=sizeof($arr);

if($size<3)
{

    echo 'size should greater than 3';
}
else{
    $largest=$arr[0];
    for($i=0;$i<$size;$i++)
    {
        if($arr[$i]>$largest)
         $largest=$arr[$i];
    }
    $second=PHP_INT_MIN;
    for($i=0;$i<$size;$i++)
    {
        if($arr[$i]>$second && $arr[$i]< $largest)
        {
            $second=$arr[$i];
        }
    }
    $third=PHP_INT_MIN;
    for($i=0;$i<$size;$i++)
    {
        if($arr[$i]>$third && $arr[$i]< $second)
        {
            $third=$arr[$i];
        }
    }
    echo 'Third Largest Number:'.$third;

 }
?>