var h3Framework = angular.module('h3Framework')

.controller('pTradeCtrl', ['$http', function ($http) {
	var $pTrade = this;

	// cable menu config
	$pTrade.routeConfig = [
		{name: '항공등화',	enName: "aviation", templateUrl: 'templates/main/product/trade/0.html', active: true},
		{name: '에너지 및 전력', enName: "energyElec", templateUrl: 'templates/main/product/trade/1.html', active: false},
		{name: '기타', enName: "otherMaterial", templateUrl: 'templates/main/product/trade/2.html', active: false}
	];

	// Pull data from server
	// ALL DATA MUST FORMATTED AS JSON
	$pTrade.getCableData = function(currentPage) {
		// set the rest API url
		var restAPIURL = "http://127.0.0.1:3000"+"";
		$http.get(restAPIURL).then(function(data){
		if(currentPage === "aviation") 										{ $pTrade.aviation 					= data; }
			else if (currentPage === "energyElec") 					{ $pTrade.energyElec 				= data; }
			else if (currentPage === "otherMaterial") 			{ $pTrade.otherMaterial 		= data; }
		}, function(err){
			console.log(err);
		});
	};

	// clear all active class
	$pTrade.clearActive = function () {
		for(var i=0; i<$pTrade.routeConfig.length; i++){
			$pTrade.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$pTrade.toSubMenu = function (index){
		$pTrade.clearActive();
		$pTrade.routeConfig[index].active 	= true;
		$pTrade.subSubMenuOn								= false;
		$pTrade.selectedItem 								= null;
		$pTrade.currentPageUrl 							= $pTrade.routeConfig[index].templateUrl;
		$pTrade.currentPage 								= $pTrade.routeConfig[index].enName;

		/*
		// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
		$pTrade.getCableData($pTrade.currentPage);
		*/
	}

	// Item Select
	$pTrade.selectProduct = function (item) {
		$pTrade.subSubMenuOn = true;
		$pTrade.selectedItem = item;
	};


	/*
		THE FOLLOWING VARIABLES CAN BE DELTED ONCE REST API SERVER IS SETUP
			$pTrade.aviation
			$pTrade.energyElec
	*/
	$pTrade.aviation = [
		{
			prodID: "101",
			name: null,
			desc: null,
			usage: null,
			std: null,
			descSrc: "",
			imgSrc: "images/product/trade/0/Picture2.png"
		}
	];

	$pTrade.energyElec = [
		{
			prodID: "201",
			name: null,
			desc: null,
			usage: null,
			std: null,
			descSrc: "",
			imgSrc: "images/product/trade/1/Picture2.png"
		},
		{
			prodID: "202",
			name: null,
			desc: null,
			usage: null,
			std: null,
			descSrc: "",
			imgSrc: "images/product/trade/1/Picture3.png"
		},
	];

	$pTrade.otherMaterial = [
		{
			prodID: "301",
			name: null,
			desc: null,
			usage: null,
			std: null,
			descSrc: "",
			imgSrc: "images/product/trade/2/Picture2.png"
		}
	];


	$pTrade.subSubMenuOn = false;
	$pTrade.selectedItem = null;

	// initial page to load
	$pTrade.currentPageUrl = $pTrade.routeConfig[0].templateUrl;
	$pTrade.currentPage = $pTrade.routeConfig[0].enName;
	/*
	// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pTrade.getCableData($pTrade.currentPage);
	*/


}]);
