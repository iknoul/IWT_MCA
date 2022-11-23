<!DOCTYPE html>
<html>
<body>
	<style type="text/css">
		 table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}
table{
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
}
table tr:nth-child(even){background-color: #f2f2f2;}
table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
.btn{
	text-decoration: none;
	border:1px solid red;
	background-color: red;
	padding: 5px;
	color: white;
	border-radius: 5px;
}
</style>

<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "pu";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT student_name, register_number, Institutional_Email, Personal_Email, mobile FROM sample_data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	echo "<table><tr>
	        <th>STUDENT-NAME</th>
	        <th>REGISTER-NUMBER</th>
	        <th>INSTITUTIONAL-EMAIL</th>
	        <th>PERSONAL-EMAIL</th>
	        <th>MOBILE</th>
	        <th></th>
	        </tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
                 echo "<tr><td>" . $row["student_name"]. "</td>
                 <td>" . $row["register_number"]. "</td>
                 <td>" . $row["Institutional_Email"]. "</td>
                 <td>" . $row["Personal_Email"]. "</td>
                 <td>" . $row["mobile"]. "</td>
                 <td>
                  <a  class='btn' href='delete.php?del=<?php echo ＄row['register_number']; ?>Delete</a></td>
                 
                 </tr>";}
       echo "<table>";
} else {
    echo "0 results";
}
$conn->close();
?>

</body>
</html>