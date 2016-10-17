var h3Framework = angular.module('h3Framework')

.controller('pTradeCtrl', ['$http', function ($http) {
	var $pTrade = this;

	// cable menu config
	$pTrade.routeConfig = [
		{name: '항공등화',	enName: "aviation", templateUrl: 'templates/main/product/trade/0.html', active: true},
		{name: '에너지 및 전력', enName: "energyElec", templateUrl: 'templates/main/product/trade/1.html', active: false},
		// {name: '기타', enName: "otherMaterial", templateUrl: 'templates/main/product/trade/2.html', active: false}
	];

	// Pull data from server
	// ALL DATA MUST FORMATTED AS JSON
	$pTrade.getCableData = function(currentPage) {
		// set the rest API url
		var restAPIURL = "http://127.0.0.1:3000"+"";
		$http.get(restAPIURL).then(function(data){
			$pTrade.dataSet = data;
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
		if($pTrade.routeConfig[index].enName === "aviation"){
			$pTrade.dataSet = $pTrade.aviation;
		} else if($pTrade.routeConfig[index].enName === "energyElec"){
			$pTrade.dataSet = $pTrade.energyElec;
		}
	}

	// REMOVE THE FOLLOWING CODE IF DETAILS ARE PRESENTED
	// REMOVE 'ng-style="pTrade.cursorStyle"' FROM TEMPLATE IF DETAILS ARE PRESENTED
	$pTrade.cursorStyle = {'cursor': 'auto'};

	// Item Select
	$pTrade.selectProduct = function (item) {
 		/*
		// UNCOMMENT THE FOLLOWING CODE IF DETAILS ARE PRESENTED
		$pTrade.subSubMenuOn = true;
		*/
		$pTrade.selectedItem = item;
	};


	/*
		THE FOLLOWING VARIABLES CAN BE DELTED ONCE REST API SERVER IS SETUP
			$pTrade.aviation
			$pTrade.energyElec
	*/
	$pTrade.aviation = {
		data: [
			{
				prodID: "101",
				name: "RUNWAY & TAXIWAY INSET LIGHTS",	//제품 이름
				desc: ["xxxxxx"],				//제품 이름2
				desc2: ["Eaton's inset airfield lights are designed to produce high quality light output, be energy-efficient and reliable on the airfield.  Location, color and intensity are all important to the pilot when determining his position on the airfield."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture2.png"
			},
			{
				prodID: "102",
				name: "Runway & Taxiway Elevated Lights",	//제품 이름
				desc: ["xxxxxx"],				//제품 이름2
				desc2: ["Eaton's elevated airfield lights are designed to be durable, energy-efficient and reliable on the airfield.  These lights are designed to last and hold up to the elements"],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture3.png"
			},
			{
				prodID: "103",
				name: "Airport Light Bases",	//제품 이름
				desc: ["xxxxxx"],				//제품 이름2
				desc2: ["There are a variety of bases to which airport lights may be mounted.  These bases are designed for locations that are exposed to aircraft and vehicles."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture4.png"
			},
			{
				prodID: "104",
				name: "Approach & Navigational Aids",	//제품 이름
				desc: ["xxxxxx"],				//제품 이름2
				desc2: ["Designed to aid the pilot in visual landings, a combination of lights from PAPI to approach and threshold lights are required to visually identify the runway."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture5.png"
			},
			{
				prodID: "105",
				name: "Guidance Signs",	//제품 이름
				desc: ["xxxxxx"],				//제품 이름2
				desc2: ["The safe and efficient movement of aircraft around the airfield is of para­mount importance.  The FAA and ICAO have set color, intensity, perfor­mance and location standards for all airfield guidance signs."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture6.png"
			},
			{
				prodID: "106",
				name: "Power & Control Equipment",	//제품 이름
				desc: ["파워 및 제어 장치"],				//제품 이름2
				desc2: ["Power and control are at the heart of the lighting control system for any airfield.  Eaton has a variety of constant current regulators.  Eaton’s regulators and control equipment are designed to provide precision control of airfield circuits and interface with a wide array of control and monitoring options."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture7.png"
			},
			{
				prodID: "107",
				name: "Airport Control & Monitoring Systems",	//제품 이름
				desc: ["항공 제어 및 모니터링 시스템"],				//제품 이름2
				desc2: ["Designed to meet a wide range of airfield lighting control and monitoring requirements and to ensure reliable operation of core and accessory systems for airports of any size."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture8.png"
			},
			{
				prodID: "108",
				name: "Replacement Parts",	//제품 이름
				desc: ["교체 제품"],				//제품 이름2
				desc2: ["Additional lamps are available for purchase; all lamps listed are FAA Approved."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture9.png"
			},
			{
				prodID: "109",
				name: "Solar Lighting",	//제품 이름
				desc: ["솔러 라이트"],				//제품 이름2
				desc2: ["Cut energy costs by taking advantage of solar panels with Eaton's line of solar powered lighting products.  This line includes lighting for runways, taxi­ways, thresholds, obstructions, signage, area, and even windsocks."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture10.png"
			},
			{
				prodID: "110",
				name: "Utility Lights",	//제품 이름
				desc: ["xxxxxx"],				//제품 이름2
				desc2: ["Utility lights are used in a variety of general lighting applications, such as boundary markings, apron areas, heliport applications and alternate traffic areas."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture11.png"
			},
			{
				prodID: "111",
				name: "Tools & Accessoris",	//제품 이름
				desc: ["xxxxxx"],				//제품 이름2
				desc2: ["The safe and efficient maintenance of the airfield is of the highest importance to ensure the airfield continues to run properly.  Tools and accessories are sold to help diagnose and repair products on the airfield and in the lighting vault.  Taxiway reflective markers are used to mark the edges of taxiways and ramps at airports and heliports."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/0/Picture12.png"
			},
		]
	};

	$pTrade.energyElec = {
		data: [
			{
				prodID: "201",
				name: "Uninterruptible Power Supply - Light",	//제품 이름
				desc: ["무전정 전원 장치 (상업용)"],				//제품 이름2
				desc2: ["데이터 센터, 제조업, 금융업, 의료 산업, 교통 시설 등 소규모 산업에서 원활하고 효율적으로 백업 전력을 공급 받을 수 있도록 설계되었습니다. 무정전 전원 장치는 정전 뿐만 아니라 순간 전압 강하, 서지 등 다른 전원 문제들로부터도 전원을 보호하며, 단일 컴퓨터나 POS 장비를 보호하는 데 가장 널리 사용되고 있습니다."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/1/Picture2.png"
			},
			{
				prodID: "202",
				name: "Uninterruptible Power Supply - Heavy",	//제품 이름
				desc: ["무전정 전원 장치 (산업용)"],				//제품 이름2
				desc2: ["화학, 국방, 광업, 원자력, 오일, 플랜트 등 지속적인 전력 공급이 필요한 대규모 산업에서도 정전, 순간 전압 강하, 서지, 저전압, 고전압, 전선 노이즈, 주파수 변동, 과도한 스위칭, 고조파 왜곡 등의 전원 문제점 및 이슈로 차질 없이 전력을 공급하도록 설계되었습니다."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/1/Picture3.png"
			},
			{
				prodID: "203",
				name: "Busduct",	//제품 이름
				desc: ["부스덕트"],				//제품 이름2
				desc2: ["공항, 병원, 데이터 센터, 플랜트, 건물 등 다양한 산업범의의 건축물의 안정적인 전력공급을 위하여 수전/변전/배전라인에는 고압용 부스닥트를, 수하물 관제탑부터 일반 Commercial 빌딩에는 저압용 부스닥트를 적용하여 용도에 맞는 최적의 맞춤 솔루션을  제공합니다."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/1/Picture4.png"
			},
			{
				prodID: "204",
				name: "LED Light",	//제품 이름
				desc: ["LED 조명"],				//제품 이름2
				desc2: ["가정용 LED 조명, 램프, 등기구 부터 산업용 LED Bar, LED 모듈,  주차창 LED 형광등, 식물 재배용 LED 램프 까지 다양한 종류의 LED 조명을 공급합니다."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/1/Picture5.png"
			},
			{
				prodID: "205",
				name: "Fastener Parts",	//제품 이름
				desc: ["전기 자재"],				//제품 이름2
				desc2: ["핸들, 클램프, 캠록, 락볼트, 리벳, 등 다양한 철물부속품 및 화스너를 전문적으로 제공합니다."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/1/Picture6.png"
			},
			{
				prodID: "206",
				name: "Other Parts",	//제품 이름
				desc: ["기타 자재"],				//제품 이름2
				desc2: ["국내 최고효율의 태양광 모듈과 인버터를 활용하여 안정적이고 신뢰성 높은 태양광발전 시스템을 제안합니다. 주택용에서 상업용발전까지 설계, 제조, 시공, 사후관리까지 토탈솔루션을 제공합니다."],	// 제품설명
				descSrc: null,
				imgSrc: "images/product/trade/1/Picture7.png"
			},
		]
	};

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

	// REMOVE THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pTrade.dataSet = $pTrade.aviation;
	/*
	// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pTrade.getCableData($pTrade.currentPage);
	*/


}]);
