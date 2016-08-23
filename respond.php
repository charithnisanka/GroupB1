<?php
		   if(isset($_GET['edit'])){
			   
			$inqid = $_GET['edit'];
			$select="select * from inquiry where id='$inqid'";
			$run = mysqli_query($con,$select);
			
			$row=mysqli_fetch_array($run);
					    			 			
			$inqemail=$row['email'];
			$inqsubject=$row['subject'];
			$inqmessageres=$row['Responded'];
			$inqmessage=$row['message'];
			
			
		   }
		 
		?>
		


</br>

	<form method="post" action="">		
		
		<div class="col-md-4">
				<div class="form-group">
					<label for="subject">Subject</label>
					<input type="text" class="form-control" name="subject" required="required" value="<?php echo $inqsubject;?>">
				  </div>
				  
				 <div class="form-group">
					<label for="email">email</label>
					<input type="text" class="form-control" name="email" required="required" value="<?php echo $inqemail;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="message">Message</label>
					<input type="text" class="form-control" name="message" required="required" value="<?php echo $inqmessage;?>">
				  </div>
				  
				  <div class="form-group">
					<label for="responded">Responded</label>
					<input type="text" class="form-control" name="responded" required="required" value="<?php echo $inqmessageres;?>">
				  </div>
				  
				   <input type ="submit" name="respond" value="Respond" /></br></br> 
				  
			




			
				  
		</div>
		 
	</form>
	
					
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			<?php
		if(isset($_POST['respond'])){
			 $inqmessageres = $_POST['responded'];
			 
			 
		
			$update = "update inquiry set  Responded='$inqmessageres' where id='$inqid'";
		
			$update_run =mysqli_query($con,$update);
	
		if($update_run){
			
			echo "<script>alert('You have successfully responded')</script>";
			echo "<script>window.open('inquiry.php','_self')</script>";
		}
			 
		}
		     
		
		
	?> 
	
	
	
	