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
			<th>Respond</th>
			<th>ID</th>
			<th>Name</th>
			<th>Email</th>
			<th>Subject</th>
			<th>Message</th>
			<th>Respond message</th>
			
			
		</tr>
		
		
		
	
		
		
		
		
		<?php
			$select="select * from inquiry";
			$run = mysqli_query($con,$select);
		
			while($row=mysqli_fetch_array($run)){
			
			$inqid = $row['id'];
			$inqname=$row['name'];
			$inqemail=$row['email'];
			$inqsubject=$row['subject'];
			$inqmessage=$row['message'];
			$inqmessageres=$row['Responded'];
					
		 
		?>
		
	
		
		
		
		
		
		<tr>
			<td><a href="inquiry.php?edit=<?php echo $inqid;?>" class="btn btn-info" role="button">Respond</a></td>
			<td><?php echo $inqid;?></td>
			<td><?php echo $inqname;?></td>
			<td><?php echo $inqemail;?></td>
			<td><?php echo $inqsubject;?></td>
			<td><?php echo $inqmessage;?></td>
			<td><?php echo $inqmessageres;?></td>
			
											
			
		</tr>
		
		<?php }  ?>
	</table>
	
	
	<?php
		if(isset($_GET['edit'])){
		include("../respond.php");
		}
	?>	
	
	
	
</div>








<?php include 'adminfooter.php';?>	
	
	
	
	
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  </body>
  
  
</html>	
<?php }  ?>	