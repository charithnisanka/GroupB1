
<?php
		   if(isset($_GET['edit'])){
			   
			$edit_id = $_GET['edit'];
			$select="select * from products where id='$edit_id'";
			$run = mysqli_query($con,$select);
			
			$row=mysqli_fetch_array($run);
					    			 			
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
			
		   }
		 
		?>

</br>

	<form method="post" action="">
		<div class="col-md-4">
		
		
				<div class="form-group">
					<label for="Type">Type</label>
					<input type="text" class="form-control" name="Type" required="required" value="<?php echo $ptype;?>">
				  </div>
				  
				 <div class="form-group">
					<label for="Brand">Brand</label>
					<input type="text" class="form-control" name="Brand" required="required" value="<?php echo $pbrand;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Category">Category</label>
					<input type="text" class="form-control" name="Category" required="required" value="<?php echo $pcategory;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Model">Model</label>
					<input type="text" class="form-control" name="Model"required="required"  value="<?php echo $pmodel;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Angle_measure">Angle measure</label>
					<input type="text" class="form-control" name="Angle_measure" required="required" value="<?php echo $pangle;?>">
				  </div>
		</div>
		
		<div class="col-md-4">
				<div class="form-group">
					<label for="Distance_measure">Distance measure</label>
					<input type="text" class="form-control" required="required" name="Distance_measure" value="<?php echo $pdistance;?>">
				  </div>
				  
				 <div class="form-group">
					<label for="Scanning_and_Imaging">Scanning and Imaging</label>
					<input type="text" class="form-control" required="required" name="Scanning_and_Imaging" value="<?php echo $pscan;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Battery">Battery</label>
					<input type="text" class="form-control" name="Battery" required="required" value="<?php echo $pbattery;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Telescope">Telescope</label>
					<input type="text" class="form-control" name="Telescope" required="required" value="<?php echo $ptelescope;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Plummet">Plummet</label>
					<input type="text" class="form-control" name="Plummet" required="required" value="<?php echo $pplummet;?>">
				  </div>
		</div>
		
		<div class="col-md-4">
				<div class="form-group">
					<label for="Interface">Interface</label>
					<input type="text" class="form-control" name="Interface" required="required" value="<?php echo $pinterface;?>">
				  </div>
				  
				 <div class="form-group">
					<label for="Memory">Memory</label>
					<input type="text" class="form-control" name="Memory" required="required" value="<?php echo $pmemory;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Environmental">Environmental</label>
					<input type="text" class="form-control" name="Environmental" required="required" value="<?php echo $penvironmental;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Physical">Physical</label>
					<input type="text" class="form-control" name="Physical" required="required" value="<?php echo $pphysical;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="Special_features">Special features</label>
					<input type="text" class="form-control" name="Special_features" required="required" value="<?php echo $pspecial;?>">
					
					
				  </div>
				 <input type ="submit" name="update" value="Update data"/></br></br> 
				  
		</div>	
		
				
				 
	</form>
	
	
	<?php
		if(isset($_POST['update'])){
			 $puType = $_POST['Type'];
			 $puBrand = $_POST['Brand'];
			 $puCategory = $_POST['Category'];
			 $puModel = $_POST['Model'];
			 $puAngle_measure = $_POST['Angle_measure'];
			 $puDistance_measure = $_POST['Distance_measure'];
			 $puScanning_and_Imaging = $_POST['Scanning_and_Imaging'];
			 $puBattery = $_POST['Battery'];
			 $puTelescope = $_POST['Telescope'];
			 $puPlummet = $_POST['Plummet'];
			 $puInterface = $_POST['Interface'];
			 $puMemory = $_POST['Memory'];
			 $puEnvironmental = $_POST['Environmental'];
			 $puPhysical = $_POST['Physical'];
			 $puSpecial_features = $_POST['Special_features'];
		
			$update = "update products set  Type='$puType',Brand='$puBrand',Category='$puCategory',
			                                Model= '$puModel',Angle_measure='$puAngle_measure',Distance_measure='$puDistance_measure',
											Scanning_and_Imaging='$puScanning_and_Imaging',Battery='$puBattery',Telescope='$puTelescope',
											Plummet='$puPlummet',Interface='$puInterface',Memory='$puMemory',Environmental='$puEnvironmental',
											Physical='$puPhysical',Special_features='$puSpecial_features' where id='$edit_id'";
		
			$update_run =mysqli_query($con,$update);
	
		if($update_run){
			
			echo "<script>alert('A Product has been updated!')</script>";
			echo "<script>window.open('updateproducts.php','_self')</script>";
		}
			 
		}
		     
		
		
	?> 