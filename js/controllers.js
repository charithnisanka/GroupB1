var searchBoxApp = angular.module('searchBoxApp',[]);

var SearchController = searchBoxApp.controller('SearchController',['$scope','$http',function ($scope,$http) {
	$http.get("getProdNames.php").then(function (response) {
		$scope.productNames = response.data;
	});
}]);