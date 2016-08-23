<!DOCTYPE html>
<?php
	$con = mysqli_connect("localhost","root","","Web");
?>
<html lang="en">
  <head>
  
    <meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="Images/favicon.ico"/>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/styles.css" rel="stylesheet">
  <title> Contact Us </title>
  
  <!--Google map Api start-->
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC1QZURa5uenRxe_c16k2tsyQyy15Ueld8"></script>
	<script src="js/locationApi.js"></script>
   <!--Google map Api end-->
 
                                   <!--AIzaSyC1QZURa5uenRxe_c16k2tsyQyy15Ueld8-->
  </head>
  
  <body>
	<?php include 'header.php';?>
 
  <div class="front" >
    <img src="Images\contact.jpg" class="img-resposive" alt="resposive-image">
   </div>  


<div class="container">

	
		<div class="col-md-7">
		
		<h3>Our Islandwide branches</h3>
		 <hr>  </hr>
		<div id="googleMap" style="height:500px;"></div>
		
		</div>
	  
		<div class="col-md-5">
		
		<h3>Send us a message</h3>
		<hr>  </hr>
			<form method="post" action="Contact_us.php" enctype="multipart/form-data">
				  <div class="form-group">
					<label for="contactname">*Name</label>
					<input type="text" class="form-control" name="contactname" required="required" placeholder="Enter Name" >
				  </div>
				  
				  <div class="form-group">
					<label for="contactemail">*Email Address</label>
					<input type="email" class="form-control" name="contactemail" required="required" placeholder="Enter Email" >
				  </div>
				  
				  <div class="form-group">
					<label for="contactsubject">*Subject</label>
					<input type="text" class="form-control" name="contactsubject" required="required" placeholder="Enter Subject" >
				  </div>
				  
				  <div class="form-group">
					<label for="contactmessage">*Message</label>
					<textarea class="form-control" name="contactmessage" required="required" placeholder="Enter Message"  rows="7"></textarea>
				  </div>
				  
				  
		 </div>
				  <input type="submit" value="Submit " class="btn btn-default" name="sub">
			</form>
		</div>
</div>
				<?php
					if(isset($_POST['sub'])){
						
						 $name=$_POST['contactname'];
						 $email=$_POST['contactemail'];
						 $subject=$_POST['contactsubject'];
						 $message=$_POST['contactmessage'];
						
						$insert = "Insert into inquiry (name,email,subject,message) values ('$name','$email','$subject','$message')";
					
						$run = mysqli_query($con,$insert);
					
					if($run){
						echo "Message has been successfully sent";
					}	
					}
				?>
				
				
<?php include 'footer.php';?>	
	
	
	
	
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  </body>
  
  
</html>