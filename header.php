<script type="text/javascript" src="js/angular.min.js"></script>
<script type="text/javascript" src="js/controllers.js"></script>
<script type="text/javascript">
	function setLink(id) {
		var name = encodeURIComponent(id);
		document.getElementById(id).setAttribute('href',"prodView.php?name="+name);
	}
</script>


<div class="container-fluid">


		<div class="row">
			<div class="col-sm-3 col-md-3  ">
				<img src="Images\headerLogo.jpg" class="img-resposive" alt="resposive-image">
				<div> </div>
			</div> 
			
			<div class="col-sm-3 col-md-3">          <!--COntact information telephone-->
				<div class="col-sm-3 col-md-3"></br>
				<img src="Images\phone.png" class="img-resposive" alt="resposive-image" ></div>
				<div class="col-sm-9 col-md-9 ">
				  <a href=""></br><b>Phone: +94 (112) 734551</b></a>
				<h5>     sales@bhoomitech.com </h5> 
				</div>
			</div>



			<div class="col-sm-3 col-md-3">
				<div class="col-sm-3 col-md-3 "></br>
				<img src="Images\Address.png" class="img-resposive" alt="resposive-image"></div>
				<div class="col-sm-9 col-md-9 ">
				 <p><b></br>84/A, Isipathane Road</b></p><!--COntact information-->
				<h5>     Wewala, Horana </h5>			<!--Address-->
				</div>
			</div>
			
				<div class="col-sm-3 col-md-3">
				<div class="col-sm-3 col-md-3 "></br>
				<img src="Images\clock.png" class="img-resposive" alt="resposive-image"></div>
				
				<div class="col-sm-9 col-md-9 ">
				  <p><b></br>Mon - Sat 8.00 - 18.00</b></p><!--Opening hours-->
				<h5> </br>SUNDAY CLOSED</h5>
				</div>
			</div>

				<div style="float:right">
				 
				  				
			</div>
			</div>
			
		
	 
		 </div> 

	
	
	<!-- Start navgation bar-->
 <div class="header"> 
	<nav class="navbar navbar-inverse" style="margin:0px">
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
        
        <li class="dropdown">     <!--Start dropdown-->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PRODUCTS <span class="caret"></span></a>
          <ul class="dropdown-menu multi-level" role="menu" arial-labelledby="dropdownMenu">
					<li class="dropdown-submenu"">
						    <!--Start dropdown-->
						<a tabindex="-1" href="#">TOTAL STATION</a>
                <ul class="dropdown-menu">
                  <li><a tabindex="-1" href="TS_sokkia.php">SOKKIA</a></li>
                  <li><a tabindex="-1" href="TS_leica.php">LEICA</a></li>
                  <li><a tabindex="-1" href="TS_topcon.php">TOPCON</a></li>
                  <li><a tabindex="-1" href="TS_nikon.php">NIKON</a></li>
                  <li><a tabindex="-1" href="TS_south.php">SOUTH</a></li>
                
                </ul>
						<!--  -->
					</li>
					<li class="dropdown-submenu"">
						    <!--Start dropdown-->
						<a tabindex="-1" href="#">LEVELS</a>
                <ul class="dropdown-menu">
                  <li><a tabindex="-1" href="LEVEL_sokkia.php">SOKKIA</a></li>
                  <li><a tabindex="-1" href="LEVEL_leica.php">LEICA</a></li>
                  <li><a tabindex="-1" href="LEVEL_topcon.php">TOPCON</a></li>
                  <li><a tabindex="-1" href="LEVEL_trimble.php">TRIMBLE</a></li>
                  <li><a tabindex="-1" href="LEVEL_south.php">SOUTH</a></li>
                
                </ul>
						<!--  -->
					</li>
					<li class="dropdown-submenu"">
						    <!--Start dropdown-->
						<a tabindex="-1" href="#">GNSS</a>
                <ul class="dropdown-menu">
                  <li><a tabindex="-1" href="GNSS_trimble.php">TRIMBLE</a></li>
                  <li><a tabindex="-1" href="GNSS_leica.php">LEICA</a></li>
                  <li><a tabindex="-1" href="GNSS_topcon.php">TOPCON</a></li>
                  
                
                </ul>
						<!--  -->
					</li>
					<li class="dropdown-submenu"">
						    <!--Start dropdown-->
						<a tabindex="-1" href="#">Theodolites</a>
                <ul class="dropdown-menu">
                  <li><a tabindex="-1" href="TL_SOKKIA.php">SOKKIA</a></li>
                  <li><a tabindex="-1" href="TL_LEICA.php">LEICA</a></li>
                  <li><a tabindex="-1" href="TL_TOPCON.php">TOPCON</a></li>
                  <li><a tabindex="-1" href="TL_TRIMBLE.php">TRIMBLE</a></li>
                 
                
                </ul>
						<!--  -->
					</li>
				
					
          </ul>
		</li>  
		
		 <li class="dropdown">     <!--Start dropdown-->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">SERVICES <span class="caret"></span></a>
          <ul class="dropdown-menu">
					<li><a href="Services_topo.php">Topographical Surveying</a></li>
					<li><a href="Services_Aerial.php">Aerial and Photogrammetry Surveying</a></li>
					<li><a href="Services_GIS.php">GIS data analysis</a></li>
					<li><a href="services_hydro.php">Hydrographic Surveying</a></li>
					<li><a href="Services_construction.php">Construction Surveying</a></li>
					
          </ul> 
		</li>
		<li><a href="productCompare.php">COMPARE</a></li>
		<li><a href="contact_us.php">CONTACT US</a></li>
		
		<li><a href="registration.php">JOIN US</a></li>
		
		  <!--End dropdown-->


	  <form class="navbar-form navbar-right" role="search">
        <div ng-App="searchBoxApp"  ng-Controller="SearchController">	            
                <div class="form-group">
                    <div class="dropdown">
                    	<input type="search" class="form-control" name="username" placeholder="Search" ng-Model="product" data-toggle = 'dropdown' aria-expanded='true' aria-has-popup='true' id="prodSearch">

                    	<ul class="dropdown-menu scrollable-menu" aria-labeledby='prodSearch' ng-Show="product">
							<li class="dropdown-header">Models</li>
							<li ng-Repeat="item in productNames | filter: product">
								<a href="#" id="{{item}}" onmouseover="setLink(this.id);">{{item}}</a>
							</li>
						</ul>
                    </div>          
                	<!-- <button type="submit" class="btn btn-default">Search</button> -->
                </div>             
		</div>
      </form>
				
			
        
		
		
		
		
      </ul>
     
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</div>
  
  <!-- /end of navbar -->
  
 