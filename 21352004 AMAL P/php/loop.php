
<?php
  
  // PHP code to illustrate the difference of two loops
  $num = 2;
    
  // In case of while
  while ($num != 2) {
        
      echo "In case of while the code is skipped";
      echo $num, "\n";
    
  }
  // In case of do...while
  do {
        
      $num++;
      echo "The do...while code is executed atleast once ";
        
  } while($num == 2);
    
  ?>