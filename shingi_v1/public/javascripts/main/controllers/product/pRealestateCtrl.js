var h3Framework = angular.module('h3Framework')

.controller('pRealestateCtrl', ['$http', function ($http) {
	var $pRealestate = this;

	// cable menu config
	$pRealestate.routeConfig = [
		{name: '투자자문',	enName: "investRE", templateUrl: 'templates/main/product/re/0.html', active: true},
		{name: '구조화 서비스', enName: "structureRE", templateUrl: 'templates/main/product/re/1.html', active: false},
		{name: '운영관리', enName: "mgmtRE", templateUrl: 'templates/main/product/re/2.html', active: false},
		{name: '기타', enName: "otherRe", templateUrl: 'templates/main/product/re/3.html', active: false}
	];

	// Pull data from server
	// ALL DATA MUST FORMATTED AS JSON
	$pRealestate.getCableData = function(currentPage) {
		// set the rest API url
		var restAPIURL = "http://127.0.0.1:3000"+"";
		$http.get(restAPIURL).then(function(data){
			if(currentPage === "investRE") 						{ $pRealestate.investRE 		= data; }
			else if (currentPage === "structureRE") 	{ $pRealestate.structureRE 	= data; }
			else if (currentPage === "mgmtRE") 				{ $pRealestate.mgmtRE 			= data; }
			else if (currentPage === "otherRe")				{ $pRealestate.otherRe 			= data; }
		}, function(err){
			console.log(err);
		});
	};

	// clear all active class
	$pRealestate.clearActive = function () {
		for(var i=0; i<$pRealestate.routeConfig.length; i++){
			$pRealestate.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$pRealestate.toSubMenu = function (index){
		$pRealestate.clearActive();
		$pRealestate.routeConfig[index].active 	= true;
		$pRealestate.subSubMenuOn								= false;
		$pRealestate.selectedItem 							= null;
		$pRealestate.currentPageUrl 						= $pRealestate.routeConfig[index].templateUrl;
		$pRealestate.currentPage 								= $pRealestate.routeConfig[index].enName;

		/*
		// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
		$pRealestate.getCableData($pRealestate.currentPage);
		*/
	}

	// Item Select
	$pRealestate.selectProduct = function (item) {
		$pRealestate.subSubMenuOn = true;
		$pRealestate.selectedItem = item;
	};


	/*
		THE FOLLOWING VARIABLES CAN BE DELTED ONCE REST API SERVER IS SETUP
			$pRealestate.investRE
			$pRealestate.structureRE
			$pRealestate.mgmtRE
			$pRealestate.otherRe

	*/
	$pRealestate.investRE = [
		{
			prodID: "101",
			desc: "투자 물건 또는 포트폴리오를 매각 또는 매입하려는 투자자들에게 리서치에 기반한 포괄적인 글로벌 거래 솔루션을 제공합니다. 당사는 자본 시장에 대한 전문지식과 개별 고객에 맞춤화된 솔루션을 개발하는 뛰어난 능력을 완벽히 결합하여 우수한 결과물을 전달합니다.",
			descSrc: null,
			service: ['매입자문', '매각자문'],
			imgSrc: "images/product/re/0/Picture2.png"
		}
	];

	$pRealestate.structureRE = [
		{
			prodID: "201",
			desc: "기존 솔루션에서부터 다른 차원의 솔루션에 이르기까지 당사의 재무 전문가들은 가치를 최대화하고, 비용을 최소화하며 재무, 회계 및 세무적 영향을 최적화하기 위해 모든 형태의 부동산 관련 재무 전략의 설계 및 이행에 관한 광범위한 전문지식과 경험을 적용하고 있습니다.",
			descSrc: null,
			service: ['부실자산 매각자문', '자산 실사 및 평가', '자산 관리 및 채권 회수', '각종 회수전략 수집', '유입부동산 매입 매각'],
			imgSrc: "images/product/re/1/Picture2.png"
		}
	];

	$pRealestate.mgmtRE = [
		{
			prodID: "301",
			desc: "부동산 운영관리는 고객의 선택, 실행, 지속적으로 유지하는 데 있어 편견 없는 자문을 제공하여 고객이 부동산 자산을 주도적이고 전향적으로 관리할 수 있도록 지원합니다.",
			descSrc: null,
			service: ['자산가치 제고', '빌딩관리', '임대관리', '시설 및 시설 운용 감사', '재무관리', '임대인 자문', '임대 및 프로젝트 마케팅', '임차인 자문 및 대행', '기술 관련 서비스'],
			imgSrc: "images/product/re/2/Picture2.png"
		}
	];

	$pRealestate.otherRe = [
		{
			prodID: "401",
			desc: "부동산 운영관리는 고객의 선택, 실행, 지속적으로 유지하는 데 있어 편견 없는 자문을 제공하여 고객이 부동산 자산을 주도적이고 전향적으로 관리할 수 있도록 지원합니다.",
			descSrc: null,
			service: ['자산가치 제고', '빌딩관리', '임대관리', '시설 및 시설 운용 감사', '재무관리', '임대인 자문', '임대 및 프로젝트 마케팅', '임차인 자문 및 대행', '기술 관련 서비스'],
			imgSrc: "images/product/re/3/Picture2.png"
		}
	];


	$pRealestate.subSubMenuOn = false;
	$pRealestate.selectedItem = null;

	// initial page to load
	$pRealestate.currentPageUrl = $pRealestate.routeConfig[0].templateUrl;
	$pRealestate.currentPage = $pRealestate.routeConfig[0].enName;
	/*
	// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pRealestate.getCableData($pRealestate.currentPage);
	*/


}]);
