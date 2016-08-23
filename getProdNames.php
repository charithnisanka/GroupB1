<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	$con = mysqli_connect("localhost","root","","Web");
	$sql = "SELECT Model from Products";
	$models = mysqli_query($con,$sql);
	$arr = [];
	while ($row = mysqli_fetch_assoc($models)) {
			$arr[]=$row["Model"];
			
	}
	echo json_encode($arr);
	mysqli_close($con);
?>