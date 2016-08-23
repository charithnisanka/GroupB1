<?php
	$con = mysqli_connect("localhost","root","","Web");
	$sql = "SELECT Model from Products";
	$models = mysqli_query($con,$sql);
?>

<!DOCTYPE html>

<html>

<head>
	<title>Compare Models</title>
	<meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="Images/favicon.ico"/>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/styles.css" rel="stylesheet">
	<style type="text/css">
		.table td,.table th {
   			font-size:2em;
		}
	</style>
</head>

<body>
<?php include 'header.php';?>
	<center>
		<h1>Please select the models you want to compare</h1><br/>


		<table class="table table-hover table-striped">

			<tr>
				<th></th>
				<th>
					<select name="prod1" id="prod1" onchange="getDetails(this.value,1);getDetails(this.value,0);">
						<option id="op1" selected disabled>Select a model</option>
						<?php while($row = mysqli_fetch_row($models)) { ?>
						<option value="<?php echo $row[0]; ?>"><?php echo $row[0]; ?></option>
						<?php } mysqli_free_result($models); $models = mysqli_query($con,$sql); ?>
					</select>
				</th>
				<th>
					<select name="prod2" id="prod2" onchange="getDetails(this.value,2)" disabled="true">
						<option id="op2" selected disabled>Select a model</option>						
					</select>
				</th>
			</tr>

			<div class="collapse" id="detailView">
				<tr>
					<th>Type</th>
					<td id="type1" style="font-size:20px; color:#888888"></td>
					<td id="type2" style="font-size:20px; color:#888888"></td>
				</tr>

				<tr>
					<th>Brand</th>
					<td id="brand1" style="font-size:20px; color:#888888"></td>
					<td id="brand2" style="font-size:20px; color:#888888"></td>
				</tr>

				<tr>
					<th>Category</th>
					<td id="category1" style="font-size:20px; color:#888888"></td>
					<td id="category2" style="font-size:20px; color:#888888"></td>
				</tr>

				<tr>
					<th>Model</th>
					<td id="Model1" style="font-size:20px; color:#888888"></td>
					<td id="Model2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Angle measure</th>
					<td id="Angle_measure1" style="font-size:20px; color:#888888"></td>
					<td id="Angle_measure2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Distance measure</th>
					<td id="Distance_measure1" style="font-size:20px; color:#888888"></td>
					<td id="Distance_measure2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Scanning and Imaging</th>
					<td id="Scanning_and_imaging1" style="font-size:20px; color:#888888"></td>
					<td id="Scanning_and_imaging2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Battery</th>
					<td id="Battery1" style="font-size:20px; color:#888888"></td>
					<td id="Battery2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Telescope</th>
					<td id="Telescope1" style="font-size:20px; color:#888888"></td>
					<td id="Telescope2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Plummet</th>
					<td id="Plummet1" style="font-size:20px; color:#888888"></td>
					<td id="Plummet2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Interface</th>
					<td id="Interface1" style="font-size:20px; color:#888888"></td>
					<td id="Interface2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Memory</th>
					<td id="Memory1" style="font-size:20px; color:#888888"></td>
					<td id="Memory2" style="font-size:20px; color:#888888"></td>
				</tr>
				<tr>
					<th>Environmental</th>
					<td id="Environmental1" style="font-size:20px; color:#888888"></td>
					<td id="Environmental2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Physical</th>
					<td id="Physical1" style="font-size:20px; color:#888888"></td>
					<td id="Physical2" style="font-size:20px; color:#888888"></td>
				</tr>
				
				<tr>
					<th>Special features</th>
					<td id="Special_features1" style="font-size:20px; color:#888888"></td>
					<td id="Special_features2" style="font-size:20px; color:#888888"></td>
				</tr>
			</div>


		</table>

		<div class="modal fade" tabindex="-1" id="NAmodal" aria-labeledby="lbl" role="dialog">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h3 id="lbl" class="modal-title">Model Comparison Availability</h3>
						</div>

						<div class="modal-body">
							<h3>No particular model as the same type of the selected brand is found in the database!</h3>
							<h3>Please select a different model.</h3>
							<br>
							<h3><b>Selected Model: </b><span id="sModel"></span></h3>
							<h3><b>Selected Type: </b><span id="sType"></span></h3>
						</div>

						<div class="modal-footer">						
							<button data-dismiss="modal" class="btn btn-primary" type="button">Dismiss Message</button>
						</div>
					</div>
				</div>
		</div>


	</center>

	<script src="js/jquery.js"></script>
		<script>
		function getDetails(models,type) {
			model = encodeURIComponent(models);
			var details = [];
			var sType = "";
			var sModel = "";
			var Grequest = new XMLHttpRequest();
			Grequest.onreadystatechange = function() {
				if (Grequest.readyState == 4 && Grequest.status == 200 ) {
					details = JSON.parse(Grequest.responseText);
					if(type === 1) {
						document.getElementById("type1").innerHTML = details['Type'];
						document.getElementById("brand1").innerHTML = details['Brand'];
						document.getElementById("category1").innerHTML = details['Category'];
						document.getElementById("Model1").innerHTML = details['Model'];
						document.getElementById("Angle_measure1").innerHTML = details['Angle_measure'];
						document.getElementById("Distance_measure1").innerHTML = details['Distance_measure'];
						document.getElementById("Scanning_and_imaging1").innerHTML = details['Scanning_and_Imaging'];	
						document.getElementById("Battery1").innerHTML = details['Battery'];
						document.getElementById("Telescope1").innerHTML = details['Telescope'];
						document.getElementById("Plummet1").innerHTML = details['Plummet'];
						document.getElementById("Interface1").innerHTML = details['Interface'];
						document.getElementById("Memory1").innerHTML = details['Memory'];
						document.getElementById("Environmental1").innerHTML = details['Environmental'];
						document.getElementById("Physical1").innerHTML = details['Physical'];
						document.getElementById("Special_features1").innerHTML = details['Special_features'];
						localStorage.setItem("_sType",details['Type']);
						localStorage.setItem("_sModel",details['Model']);
					} else {
						if (type === 2) {
							document.getElementById("type2").innerHTML = details['Type'];
							document.getElementById("brand2").innerHTML = details['Brand'];
							document.getElementById("category2").innerHTML = details['Category'];
							document.getElementById("Model2").innerHTML = details['Model'];
							document.getElementById("Angle_measure2").innerHTML = details['Angle_measure'];
							document.getElementById("Distance_measure2").innerHTML = details['Distance_measure'];
							document.getElementById("Scanning_and_imaging2").innerHTML = details['Scanning_and_Imaging'];	
							document.getElementById("Battery2").innerHTML = details['Battery'];
							document.getElementById("Telescope2").innerHTML = details['Telescope'];
							document.getElementById("Plummet2").innerHTML = details['Plummet'];
							document.getElementById("Interface2").innerHTML = details['Interface'];
							document.getElementById("Memory2").innerHTML = details['Memory'];
							document.getElementById("Environmental2").innerHTML = details['Environmental'];
							document.getElementById("Physical2").innerHTML = details['Physical'];
							document.getElementById("Special_features2").innerHTML = details['Special features'];
						} else {
							$('#type2').text("");
							$('#brand2').text("");
							$('#category2').text("");
							$('#Model2').text("");
							$('#Angle_measure2').text("");	
							$('#Distance_measure2').text("");
							$('#Scanning_and_imaging2').text("");
							$('#Battery2').text("");
							$('#Telescope2').text("");
							$('#Plummet2').text("");
							$('#Interface2').text("");
							$('#Memory2').text("");
							$('#Environmental2').text("");
							$('#Physical2').text("");
							$('#Special_features2').text("");

							if (details.length == 0) {								
								$('#prod2').prop("disabled",true);
								$('#prod2').empty();
								$('#prod2').append("<option id='op' selected disabled>Select a model</option>");
								//alert("No comparable models available for the selected product!");
								sType = localStorage.getItem("_sType");
								sModel = localStorage.getItem("_sModel");
								$('#sType').text(sType);
								$('#sModel').text(sModel);
								$('#NAmodal').modal('show');
							} else {
								$('#prod2').prop("disabled",false);
								$('#prod2').empty();
								$('#prod2').append("<option id='op' selected disabled>Select a model</option>");

								for (var key in details) {
									$('#prod2').append("<option value='"+details[key]+"'>"+details[key]+"</option>");
								}
							}
						}
					}
				}
				
			}
			Grequest.open("GET","getModelDetails.php?model="+model+"&type="+type,true);
			Grequest.send();				
		}


	</script>
	<script src="js/bootstrap.min.js"></script>
<?php include 'footer.php';?>
</body>

</html>

<?php mysqli_close($con); ?>