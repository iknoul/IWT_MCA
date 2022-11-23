<?php
include 'connection1.php';
$searchErr = '';
$employee_details='';
if(isset($_POST['save']))
{
	if(!empty($_POST['search']))
	{
		$search = $_POST['search'];
		$stmt = $con->prepare("select * from sample_data where register_number like '%$search%' or student like '%$search%'");
		$stmt->execute();
		$student_details = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
		
	}
	else
	{
		$searchErr = "Please enter the register_number";
	}
   
}

?>
<html>
<head>
<title>ajax example</title>
<link rel="stylesheet" href="bootstrap.css" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="bootstrap-theme.css" crossorigin="anonymous">
<style>
.container{
	width:70%;
	height:30%;
	padding:20px;
}
</style>
</head>

<body>
	<div class="container">
	<h3><u></u></h3>
	<br/><br/>
	<form class="form-horizontal" action="#" method="post">
	<div class="row">
		<div class="form-group">
		    <label class="control-label col-sm-4" for="email"><b>Search Employee Information:</b>:</label>
		    <div class="col-sm-4">
		      <input type="text" class="form-control" name="search" placeholder="search here">
		    </div>
		    <div class="col-sm-2">
		      <button type="submit" name="save" class="btn btn-success btn-sm">Submit</button>
		    </div>
		</div>
		<div class="form-group">
			<span class="error" style="color:red;">* <?php echo $searchErr;?></span>
		</div>
		
	</div>
    </form>
	<br/><br/>
	<h3><u>Search Result</u></h3><br/>
	<div class="table-responsive">          
	  <table class="table">
	    <thead>
	      <tr>
	        <th>STUDENT NAME</th>
	        <th>REGISTER NUMBER</th>
	        <th>INSTITUTIONAL EMAIL</th>
	        <th>PERSONAL EMAIL</th>
	        <th>MOBILE</th>
	      </tr>
	    </thead>
	    <tbody>
	    		<?php
		    	 if(!$student_details)
		    	 {
		    		echo '<tr>No data found</tr>';
		    	 }
		    	 else{
		    	 	foreach($student_details as $key=>$value)
		    	 	{
		    	 		?>
		    	 	<tr>
		    	 		<td><?php echo $value['student_name'];?></td>
		    	 		<td><?php echo $value['register_number'];?></td>
		    	 		<td><?php echo $value['Institutional_Email'];?></td>
		    	 		<td><?php echo $value['Personal_Email'];?></td>
		    	 		<td><?php echo $value['mobile'];?></td>
		    	 	</tr>
		    	 		
		    	 		<?php
		    	 	}
		    	 	
		    	 }
		    	?>
	    	
	     </tbody>
	  </table>
	</div>
</div>
<script src="jquery-3.2.1.min.js"></script>
<script src="bootstrap.min.js"></script>
</body>
</html>
