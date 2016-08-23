<script type="text/javascript" src="../js/angular.min.js"></script>
<script type="text/javascript" src="../js/controllers.js"></script>
<script type="../text/javascript">
	function setLink(id) {
		var name = encodeURIComponent(id);
		document.getElementById(id).setAttribute('href',"prodView.php?name="+name);
	}
</script>
<div class="container">
		<div class="row">
			<div class="col-md-3 ">
				<img src="..\Images\headerLogo.jpg" class="img-resposive" alt="resposive-image">
				<div> </div>
			</div> 
			
			<div class="col-md-3">          <!--COntact information telephone-->
				<div class="col-md-3"></br>
				<img src="..\Images\phone.png" class="img-resposive" alt="resposive-image" ></div>
				<div class="col-md-9 ">
				  <a href=""></br><b>Phone: +94 (112) 734551</b></a>
				<h5>     sales@geotech.com </h5> 
				</div>
			</div>



			<div class="col-md-3">
				<div class="col-md-3 "></br>
				<img src="..\Images\Address.png" class="img-resposive" alt="resposive-image"></div>
				<div class="col-md-9 ">
				 <p><b></br>84/A, Isipathane Road</b></p><!--COntact information-->
				<h5>     Wewala, Horana </h5>			<!--Address-->
				</div>
			</div>
			
				<div class="col-md-3">
				<div class="col-md-3 "></br>
				<img src="..\Images\clock.png" class="img-resposive" alt="resposive-image"></div>
				
				<div class="col-md-9 ">
				  <p><b></br>Mon - Sat 8.00 - 18.00</b></p><!--Opening hours-->
				<h5> </br>SUNDAY CLOSED</h5>
				</div>
			</div>

				<div style="float:right">
				  
				  				
			</div>
			
		
	 
		 </div> 
	</div>
	
	
	<!-- Start navgation bar-->
  
	<nav class="navbar navbar-inverse navbar-static" style="margin:0px">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
	<a class="navbar-brand" href=""></a>
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"></a>
    </div>

    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="Index.php">HOME <span class="sr-only">(current)</span></a></li>
        
		<li><a href="updateproducts.php">UPDATE PRODUCTS</a></li>
		<li><a href="inquiry.php">INQUIRIES</a></li>
		
		<li><a href="users.php">USER INFORMATION</a></li>
		
		<li><h3>Welcome :<?php echo $_SESSION['admin_email'];?></li>
		<li><a href ="adminlogout.php">Logout</a></li>
		  <!--End dropdown-->		
		
      </ul>
     
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  
  <!-- /end of navbar -->
  
 