<?php

	session_start();

	include 'include/db_config.php';
	$model = rawurldecode($_GET['name']);
	$con = mysqli_connect("localhost","root","","Web");
	$sql = "SELECT * from Products WHERE Model = '{$model}' ";
	$details = mysqli_query($con,$sql);
	$row = mysqli_fetch_assoc($details);
	mysqli_close($con);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
  
    <meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="Images/favicon.ico"/>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/styles.css" rel="stylesheet">
  <title> Model Details </title>
  
  
  </head>
  
  <body>
<?php include 'header.php';?>
	
  

<div class="container" >
	<br>
	<h1 class="text-center text-success">Model Details</h1>

	<div class="jumbotron">
	
	<table class="table table-hover text-center">
		<tr>
			<td><h3><b>Model: </b></h3></td>
			<td><h3><?php echo $row['Model']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Type: </b></h3></td>
			<td><h3><?php echo $row['Type']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Brand: </b></h3></td>
			<td><h3><?php echo $row['Brand']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Category: </b></h3></td>
			<td><h3><?php echo $row['Category']; ?></h3></td>
		</tr>

		<tr>
			<td><h3><b>Angle measure: </b></h3></td>
			<td><h3><?php echo $row['Angle_measure']; ?></h3></td>
		</tr>
	
		<tr>
			<td><h3><b>Distance measure: </b></h3></td>
			<td><h3><?php echo $row['Distance_measure']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Scanning and Imaging </b></h3></td>
			<td><h3><?php echo $row['Scanning_and_Imaging']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Battery</b></h3></td>
			<td><h3><?php echo $row['Battery']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Telescope: </b></h3></td>
			<td><h3><?php echo $row['Telescope']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Plummet: </b></h3></td>
			<td><h3><?php echo $row['Plummet']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Interface: </b></h3></td>
			<td><h3><?php echo $row['Interface']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Memory: </b></h3></td>
			<td><h3><?php echo $row['Memory']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Environmental: </b></h3></td>
			<td><h3><?php echo $row['Environmental']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Physical: </b></h3></td>
			<td><h3><?php echo $row['Physical']; ?></h3></td>
		</tr>
		<tr>
			<td><h3><b>Special features: </b></h3></td>
			<td><h3><?php echo $row['Special_features']; ?></h3></td>
		</tr>
	</table>
	</div>
	
</div>
		
<?php include 'footer.php';?>
		
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  </body>
  
  
</html>