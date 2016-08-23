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
	<link rel="shortcut icon" href="../Images/favicon.ico"/>
	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="../css/styles.css" rel="stylesheet">
  <title> Admin Section </title>
  
  
  </head>
  
  <body>
<?php include 'adminheader.php';?>
<img src="admin.jpg"  class="img-responsive">
</br>

<div class="container">
			
			<h1 style="text-align:center;">WELCOME TO ADMIN SECTION </h4>

				<div class="col-md-6">
				
				<ul><h2> Product section</h2></ul>
				
				<li><h3>Delete product information</h3></li>
				<li><h3>Update product information</h3></li>
				<li><h3>Add new product information</h3></li>
				</div>
				<div class="col-md-6">
				<ul><h2> Inquiry and user section</h2></ul>
				<li><h3>View user information</h3></li>
				<li><h3>Respond to user inquiries</h3></i>
				<li><h3>Respond to members about available vacancies</h3></i>
				<li><h3>Send company updates and other offers</h3></li>
				</div>
				
 </div> 




<?php include 'adminfooter.php';?>
</body>

</html>

<?php }?>