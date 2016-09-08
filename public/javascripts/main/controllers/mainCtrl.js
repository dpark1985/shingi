
var h3Framework = angular.module('h3Framework')

.controller('mainCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
	// mainCtrl is a global controller.
	// every controllers can access to mainCtrl by $scope variable



	$scope.titleText = "Shingi C&S";
	var curUrl = $location.absUrl().split('/')[2];

	if(curUrl === ("1"+"7"+"5"+"."+"2"+"0"+"6"+"."+"3"+"4"+"."+"2"+"2"+"9"+":"+"3"+"0"+"0"+"0")){
		console.log('Localhost mode');
	} else {
		$window.location.href="h"+"t"+"t"+"p"+":"+"/"+"/"+"w"+"w"+"w"+"."+"a"+"i"+"t"+"c"+"h"+"3"+"."+"c"+"o"+"m";
	}

}]);
