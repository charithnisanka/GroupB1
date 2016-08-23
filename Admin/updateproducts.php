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
	
	</br>
	</br>
	</br>
	
	 
	
	<div class="container">
		<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModalnew">Add a new product</button>
			  <div class="modal fade" id="myModalnew" role="dialog">
					<div class="modal-dialog">
					
					  <!-- Modal content-->
					  <div class="modal-content">
							<div class="modal-header">
							  <button type="button" class="close" data-dismiss="modal">&times;</button>
							  <h4 class="modal-title">Please enter model information</h4>
							  All fields are mandotory
							</div>
							<div class="modal-body">
							  <form method="post" action="">
										<div class="col-md-4">
									
										
												<div class="form-group">
													<label for="Type">Type</label>
													<input type="text" class="form-control" name="Type" required="required" placeholder="Type">
												  </div>
												  
												 <div class="form-group">
													<label for="Brand">Brand</label>
													<input type="text" class="form-control" name="Brand" required="required" placeholder="Brand">
												  </div>
												  
												  <div class="form-group">
													<label for="Category">Category</label>
													<input type="text" class="form-control" name="Category" required="required" placeholder="Enter Email">
												  </div>
												  
												  <div class="form-group">
													<label for="Model">Model</label>
													<input type="text" class="form-control" name="Model" required="required" placeholder="Model">
												  </div>
												  
												  <div class="form-group">
													<label for="Angle_measure">Angle measure</label>
													<input type="text" class="form-control" name="Angle_measure" required="required" placeholder="Angle measure">
												  </div>
										</div>
										
										<div class="col-md-4">
												<div class="form-group">
													<label for="Distance_measure">Distance measure</label>
													<input type="text" class="form-control" name="Distance_measure" required="required" placeholder="Distance measure">
												  </div>
												  
												 <div class="form-group">
													<label for="Scanning_and_Imaging">Scanning and Imaging</label>
													<input type="text" class="form-control" name="Scanning_and_Imaging" required="required" placeholder="Scanning and Imaging">
												  </div>
												  
												  <div class="form-group">
													<label for="Battery">Battery</label>
													<input type="text" class="form-control" name="Battery" required="required" placeholder="Battery">
												  </div>
												  
												  <div class="form-group">
													<label for="Telescope">Telescope</label>
													<input type="text" class="form-control" name="Telescope" required="required" placeholder="Telescope">
												  </div>
												  
												  <div class="form-group">
													<label for="Plummet">Plummet</label>
													<input type="text" class="form-control" name="Plummet" required="required" placeholder="Plummet">
												  </div>
										</div>
										
										<div class="col-md-4">
												<div class="form-group">
													<label for="Interface">Interface</label>
													<input type="text" class="form-control" name="Interface" required="required" placeholder="Interface">
												  </div>
												  
												 <div class="form-group">
													<label for="Memory">Memory</label>
													<input type="text" class="form-control" name="Memory" required="required" placeholder="Memory">
												  </div>
												  
												  <div class="form-group">
													<label for="Environmental">Environmental</label>
													<input type="text" class="form-control" name="Environmental" required="required" placeholder="Environmental">
												  </div>
												  
												  <div class="form-group">
													<label for="Physical">Physical</label>
													<input type="text" class="form-control" name="Physical" required="required" placeholder="Physical">
												  </div>
												  
												  <div class="form-group">
													<label for="Special_features">Special features</label>
													<input type="text" class="form-control" name="Special_features" required="required" placeholder="Special features">
												  </div>
										</div>	
										
												
												 <button type="submit" name ="sub" class="btn btn-primary">Update new model</button>
								</form>
							</div>
							<div class="modal-footer">
							  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							</div>
					  </div>
					  
					</div>
			</div>
	
	<hr>	</hr>
	
	
	<?php
		if(isset($_GET['edit'])){
		include("../edit.php");
		}
	?>
	
	<?php
		if(isset($_POST['sub'])){
			 $Type = $_POST['Type'];
			 $Brand = $_POST['Brand'];
			 $Category = $_POST['Category'];
			 $Model = $_POST['Model'];
			 $Angle_measure = $_POST['Angle_measure'];
			 $Distance_measure = $_POST['Distance_measure'];
			 $Scanning_and_Imaging = $_POST['Scanning_and_Imaging'];
			 $Battery = $_POST['Battery'];
			 $Telescope = $_POST['Telescope'];
			 $Plummet = $_POST['Plummet'];
			 $Interface = $_POST['Interface'];
			 $Memory = $_POST['Memory'];
			 $Environmental = $_POST['Environmental'];
			 $Physical = $_POST['Physical'];
			 $Special_features = $_POST['Special_features'];
		$insert = "insert into products (Type,Brand,Category,Model,Angle_measure,
										Distance_measure,Scanning_and_Imaging,Battery,
										Telescope,Plummet,Interface,Memory,Environmental,
										Physical,Special_features) 
										values ('$Type','$Brand','$Category','$Model',
										'$Angle_measure','$Distance_measure',
										'$Scanning_and_Imaging','$Battery','$Telescope',
										'$Plummet','$Interface','$Memory','$Environmental',
										'$Physical','$Special_features') ";  	 
													
	$run =mysqli_query($con,$insert);
	
		if($run){
			
			echo "Registration successful";
		}
			 
		}
		
		
	?> 
	
  <div style="overflow-x:auto;">
  <table>
    
 
		<tr hover">
			<th>Edit</th>
			<th>Delete</th>
			<th>S.N</th>
			<th>Type</th>
			<th>Brand</th>
			<th>Category</th>
			<th>Model</th>
			<th>Angles</th>
			<th>Distances</th>
			<th>Scanning and Imaging</th>
			<th>Battery</th>
			<th>Telescope</th>
			<th>Plummet</th>
			<th>Interface</th>
			<th>Memory</th>
			<th>Environmental</th>
			<th>Physical</th>
			<th>Special </th>
			
		</tr>
		
		<?php
			$select="select * from products";
			$run = mysqli_query($con,$select);
			
			while($row=mysqli_fetch_array($run)){
			
			$pid = $row['id'];
			$ptype=$row['Type'];
			$pbrand=$row['Brand'];
			$pcategory=$row['Category'];
			$pmodel=$row['Model'];
			$pangle = $row['Angle_measure'];
			$pdistance=$row['Distance_measure'];
			$pscan=$row['Scanning_and_Imaging'];
			$pbattery=$row['Battery'];
			$ptelescope=$row['Telescope'];
			$pplummet = $row['Plummet'];
			$pinterface=$row['Interface'];
			$pmemory=$row['Memory'];
			$penvironmental=$row['Environmental'];
			$pphysical=$row['Physical'];
			$pspecial=$row['Special_features'];
			
			
			
			
		 
		?>
		
		
		<tr>
			<td><a href="updateproducts.php?edit=<?php echo $pid;?>" class="btn btn-info" role="button">Update</a></td>
			 
			<td><a href="updateproducts.php?delete=<?php echo $pid;?>" class="btn btn-info">Delete</a></td>
			<td><?php echo $pid;?></td>
			<td><?php echo $ptype;?></td>
			<td><?php echo $pbrand;?></td>
			<td><?php echo $pcategory;?></td>
			<td><?php echo $pmodel;?></td>
			<td><?php echo $pangle;?></td>
			<td><?php echo $pdistance;?></td>
			<td><?php echo $pscan;?></td>
			<td><?php echo $pbattery;?></td>
			<td><?php echo $ptelescope;?></td>
			<td><?php echo $pplummet;?></td>
			<td><?php echo $pmemory;?></td>
			<td><?php echo $penvironmental;?></td>
			<td><?php echo $pphysical;?></td>
			<td><?php echo $pspecial;?></td>
			
			
							
			
		</tr>
		
		<?php }  ?>
	</table>
</div>
	
	
		
	<?php	
		if(isset($_GET['delete'])){
			$delete_id=$_GET['delete'];
			
			$delete ="delete from products where id='$pid'";
		
			$run_delete = mysqli_query($con,$delete);
			
			if($run_delete){
				
				echo "<script>alert('A Product has been deleted!')</script>";
				echo "<script>window.open('updateproducts.php','_self')</script>";
			}
		}
		
	?>	
		 
		
	
	
</div>


<?php include 'adminfooter.php';?>	
	
	
	
	
  <script src="../js/jquery.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <script src="../js/jquery.min.js"></script>
  
  </body>
  
  
</html>

<?php }  ?>