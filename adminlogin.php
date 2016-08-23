<!DOCTYPE html>
<?php
session_start();
$con = mysqli_connect("localhost","root","","Web");

?>

<html lang="en">
  <head>
  
    <meta charset="utf-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="Images/favicon.ico"/>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
  <title> Admin panel - GeoTech </title>
  
  
  </head>
  
  <body>
<?php include 'header.php';?>


<fieldset>
<h2 align="center">Admin login</h2><br><br>
<form class="form-horizontal" action="adminlogin.php" method="post">
<div class="col-md-4 col-md-offset-4">
  <div class="form-group">
    <label for="adminemail" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" name="adminemail" class="form-control"  placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="adminpass" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" name="adminpass" class="form-control"  placeholder="Password">
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" name="admin_login" class="btn btn-default">Sign in</button>
    </div>
  </div>
 </div> 
</form>
</fieldset>


<?php
		if(isset($_POST['admin_login'])){
			 
			$admin_password= mysqli_real_escape_string($con,$_POST['adminpass']);
			$admin_email= mysqli_real_escape_string($con,$_POST['adminemail']);
		
			$sel="select * from admin where adminemail='$admin_email' AND adminpass='$admin_password'";
			
			$run =mysqli_query($con,$sel);
			$check=mysqli_num_rows($run);
			
			if($check==0){
			
			echo "<script>alert('Password and Email not correct')</script>";			
			exit();
			}else{
				$_SESSION['admin_email']=$admin_email;
			
			echo "<script>window.open('admin/index.php','_self')</script>";			

			}
		}


?>


<?php include 'footer.php';?>
  
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  </body>
  
  
</html>

