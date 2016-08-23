<?php
	if(isset($_GET['model'])){
		$model = rawurldecode($_GET['model']);
		$con = mysqli_connect("localhost","root","","Web");
		if (((int)$_GET['type'])==0) {
			$sql = "SELECT Type from Products WHERE Model = '{$model}' ";
			$modelX = mysqli_query($con,$sql);
			$row = mysqli_fetch_row($modelX);
			$type = $row[0];
			mysqli_free_result($modelX);
			$sql = "SELECT Model from Products WHERE Type = '{$type}' ";
			$models = mysqli_query($con,$sql);
			$arr = [];
			while ($row = mysqli_fetch_row($models)) {
				if ($row[0] != $model) {
					$arr[]=$row[0];
				}
			}
			echo json_encode($arr);
		} else {
			$sql = "SELECT * from Products WHERE Model = '{$model}' ";
			$models = mysqli_query($con,$sql);
			$row = mysqli_fetch_assoc($models);
			echo json_encode($row);
		}
		mysqli_close($con);
	}
?>
