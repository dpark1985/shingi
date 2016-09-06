
var h3Framework = angular.module('h3Framework')

.controller('indexCtrl', ['$http', '$window', function ($http, $window) {
	var $index = this;	//ControllerAs

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
		$index.title = $('title').text();
	}




	$index.init();

}]);
