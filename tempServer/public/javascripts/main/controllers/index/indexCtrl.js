
var h3Framework = angular.module('h3Framework')

.controller('indexCtrl', ['$http', '$window', function ($http, $window) {
	var $index = this;	//ControllerAs

	$index.links = [
		{
			title: '케이블사업부',
			subTitle: '전력 케이블, 통신 케이블, 특수 케이블등 다양한 케이블을 제공합니다.',
			href:"/#business/cable",
			imgSrc: '/images/icons/cable.png'
		},
		{
			title: '무역사업부',
			subTitle: '건축자재, 항공시설자재, 에너지 및 전력 자재 등 맞춤형 제품을 공급합니다.',
			href:"/#business/trade",
			imgSrc: '/images/icons/trade.png'
		},
		{
			title: '건설사업부',
			subTitle: '전기공사, 통신공사, 소방공사에 대한 전문적 경험 및 노하우를 보유하였습니다.',
			href:"/#business/construction",
			imgSrc: '/images/icons/construction.png'
		},
		{
			title: '부동산사업부',
			subTitle: '부동산 자문, 운영관리, 시설관리등 부동산 종합 솔루션을 제공합니다.',
			href:"/#business/realestate",
			imgSrc: '/images/icons/realestate.png'
		},
	];

	// $('.imgSlide').slick({
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// 	arrows: false,
	// 	draggable: false
	// });

	$('.carousel').carousel({
		interval: 2000
	});


}]);
