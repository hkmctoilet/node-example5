	var myApp = angular.module("myApp",["ngRoute"]);
	myApp.config(function($routeProvider){
		$routeProvider
		.when("/13F", {
			templateUrl : "parts/13F.html",
			controller : "13Fctrl"
		})
		.when("/14F", {
			templateUrl : "parts/14F.html",
			controller : "14Fctrl"
		})
		.when("/15F", {
			templateUrl : "parts/15F.html",
			controller : "15Fctrl"
		});
	});
	myApp.controller("13Fctrl", function($scope){
		$scope.msg = "13층 화장실 가용현황입니다." ;
	});
	myApp.controller("14Fctrl", function($scope){
		$scope.msg = "14층 화장실 가용현황입니다." ;
	});
	myApp.controller("15Fctrl", function($scope){
		$scope.msg = "15층 화장실 가용현황입니다." ;
	});