<?php
   $current_date= date("d-m-Y");

   $query="Insert into student SET date='$current_date'";
   $sql=mysql_query($query) or die(mysql_errno());
    

?>
