
var h3Framework = angular.module('h3Framework')

.controller('indexCtrl', ['$http', '$window', '$h3Account', function ($http, $window, $h3Account) {
	var $index = this;

	$('.imgBG').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
		vertical: true,
		pauseOnHover: true,
		dots: true,
		arrows: false,
		dotsClass: "slick-dots"
	});



	$index.init = function(){
		$index.userData = $h3Account.getUserData();
		$index.title = $('title').text();
	}




	$index.init();

}]);
