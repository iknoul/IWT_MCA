<?php
	$student_name = $_POST['student_name'];
	$register_number = $_POST['register_number'];
	$Institutional_Email = $_POST['Institutional_Email'];
	$Personal_Email = $_POST['Personal_Email'];
	$mobile = $_POST['mobile'];
	

	// Database connection
	$conn = new mysqli('localhost','root','password','pu');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into sample_data(student_name, register_number, Institutional_Email, Personal_Email, mobile) values(?, ?, ?, ?, ?)");
		$stmt->bind_param("sissi", $student_name, $register_number, $Institutional_Email, $Personal_Email, $mobile);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>