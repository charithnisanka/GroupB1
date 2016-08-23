<!DOCTYPE html>
<?php
session_start();
$con = mysqli_connect("localhost","root","","Web");

if(!$_SESSION['admin_email']){
	
	header("location:../adminlogin.php");
}
else{

?>
	<html lang="en">
  <head>
  
    <meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="../shortcut icon" href="../Images/favicon.ico"/>
	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="../css/styles.css" rel="stylesheet">
  <title> Admin  </title>
<style>
  table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}
body{width:100%}
</style>
	</head>
	
<body>
<?php include 'adminheader.php';?>	
	

 <div style="overflow-x:auto;">
  <table>
    
 
		<tr hover">
			<th>ID</th>
			<th>First name</th>
			<th>Last name</th>
			<th>Email</th>
			<th>Contactno</th>
			<th>Province</th>
			<th>Address</th>
			<th>Gender</th>
			<th>Birthday</th>
			<th>Registered date</th>
			
			
		</tr>
		
		<?php
			$select="select * from users";
			$run = mysqli_query($con,$select);
			
			while($row=mysqli_fetch_array($run)){
			
			$uid = $row['id'];
			$ufname=$row['firstname'];
			$ulname=$row['lastname'];
			$uemail=$row['email'];
			$ucontactno=$row['contact'];		 
			 $province=$row['province'];
			 $address=$row['address'];
			 $gender=$row['gender'];
			 $bday=$row['bday'];
			 $regdate=$row['registerdate'];
			 
		?>
		
		
		<tr>
			<td><?php echo $uid;?></td>
			<td><?php echo $ufname;?></td>
			<td><?php echo $ulname;?></td>
			<td><?php echo $uemail;?></td>
			<td><?php echo $ucontactno;?></td>
			<td><?php echo $province;?></td>
			<td><?php echo $address;?></td>
			<td><?php echo $gender;?></td>
			<td><?php echo $bday;?></td>
			<td><?php echo $regdate;?></td>
											
			
		</tr>
		
		<?php }  ?>
	</table>
</div>


<?php include 'adminfooter.php';?>	
	
	
	
	
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  </body>
  
  
</html>	
<?php }  ?>
	