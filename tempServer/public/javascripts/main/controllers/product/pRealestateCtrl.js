var h3Framework = angular.module('h3Framework')

.controller('pRealestateCtrl', ['$http', function ($http) {
	var $pRealestate = this;

	// cable menu config
	$pRealestate.routeConfig = [
		{name: '투자자문',	enName: "investRE", templateUrl: 'templates/main/product/re/0.html', active: true},
		{name: '구조화 서비스', enName: "structureRE", templateUrl: 'templates/main/product/re/1.html', active: false},
		{name: '운영관리', enName: "mgmtRE", templateUrl: 'templates/main/product/re/2.html', active: false},
		// {name: '기타', enName: "otherRe", templateUrl: 'templates/main/product/re/3.html', active: false}
	];

	// Pull data from server
	// ALL DATA MUST FORMATTED AS JSON
	$pRealestate.getCableData = function(currentPage) {
		// set the rest API url
		var restAPIURL = "http://127.0.0.1:3000"+"";
		$http.get(restAPIURL).then(function(data){
			$pRealestate.dataSet = data;
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
		if($pRealestate.routeConfig[index].enName === "investRE"){
			$pRealestate.dataSet = $pRealestate.investRE;
		} else if($pRealestate.routeConfig[index].enName === "structureRE"){
			$pRealestate.dataSet = $pRealestate.structureRE;
		} else if($pRealestate.routeConfig[index].enName === "mgmtRE"){
			$pRealestate.dataSet = $pRealestate.mgmtRE;
		}


		/*
		// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
		$pRealestate.getCableData($pRealestate.currentPage);
		*/
	}

	// REMOVE THE FOLLOWING CODE IF DETAILS ARE PRESENTED
	// REMOVE 'ng-style="pRealestate.cursorStyle"' FROM TEMPLATE IF DETAILS ARE PRESENTED
	$pRealestate.cursorStyle = {'cursor': 'auto'};

	// Item Select
	$pRealestate.selectProduct = function (item) {
		/*
		// UNCOMMENT THE FOLLOWING CODE IF DETAILS ARE PRESENTED
		$pTrade.subSubMenuOn = true;
		*/
		$pRealestate.selectedItem = item;
	};


	/*
		THE FOLLOWING VARIABLES CAN BE DELTED ONCE REST API SERVER IS SETUP
			$pRealestate.investRE
			$pRealestate.structureRE
			$pRealestate.mgmtRE
			$pRealestate.otherRe

	*/
	$pRealestate.investRE = {
		title: "Investments",
		header: {
			strongTxt: "풍부한 부동산 경험 및 최적의 맞춤형 컨설팅을 통해 최고의 자산 자문 및 관리 서비스를 제공합니다.",
			defaultTxt: "부동산 시장 전반에 걸쳐 폭넓은 서비스를 제공하는 신기는 특히 부동산 투자 분야에 집중하여 성장하고 있습니다. 신기는 상업용 부동산 시장에서 투자, 재개발 및 자사 사옥용 등 다양한 부동산 수요를 가진 고객층을 대상으로 전문 서비스를 제공합니다.",
			imgSrc: "images/product/re/0/Picture1.png"
		},
		data: [{
			prodID: "101",
			desc: "투자 물건 또는 포트폴리오를 매각 또는 매입하려는 투자자들에게 리서치에 기반한 포괄적인 글로벌 거래 솔루션을 제공합니다. 당사는 자본 시장에 대한 전문지식과 개별 고객에 맞춤화된 솔루션을 개발하는 뛰어난 능력을 완벽히 결합하여 우수한 결과물을 전달합니다.",
			services: ["매입자문", "매각자문"],
			descSrc: null,
			imgSrc: "images/product/re/0/Picture2.png"
		}]
	};

	$pRealestate.structureRE = {
		title: "Transaction Advisory",
		header: {
			strongTxt: "풍부한 부동산 경험 및 최적의 맞춤형 컨설팅을 통해 최고의 자산 자문 및 관리 서비스를 제공합니다.",
			defaultTxt: "부실자산 시장으로 업무영역을 확장한 신기씨엔에스는 매출구조를 다변화하고 고객들에게 새로운 투자기회를 제공하기 위해 노력하고 있습니다. 고객에게 부동산 및 법인 수준의 금융 상품과 자문 서비스를 제공합니다.",
			imgSrc: "images/product/re/1/Picture1.png"
		},
		data: [{
			prodID: "201",
			desc: "기존 솔루션에서부터 다른 차원의 솔루션에 이르기까지 당사의 재무 전문가들은 가치를 최대화하고, 비용을 최소화하며 재무, 회계 및 세무적 영향을 최적화하기 위해 모든 형태의 부동산 관련 재무 전략의 설계 및 이행에 관한 광범위한 전문지식과 경험을 적용하고 있습니다.",
			services: ["부실자산 매각자문", "자산 실사 및 평가", "자산 관리 및 채권 회수", "각종 회수전략 수립", "유입부동산 매입 및 매각"],
			descSrc: null,
			imgSrc: "images/product/re/1/Picture2.png"
		}]
	};

	$pRealestate.mgmtRE = {
		title: "Portfoli/Lease Management",
		header: {
			strongTxt: "풍부한 부동산 경험 및 최적의 맞춤형 컨설팅을 통해 최고의 자산 자문 및 관리 서비스를 제공합니다.",
			defaultTxt: "임대 건물, 복합 상업 지구를 비롯한 모든 유형의 사무 시설과 복합 시나리오를 임대차 또는 구매하고 있습니다. 사무실 임대 시 혁신적인 거래 설계, 빌딩관리, 임대관리, 금융 전문지식 및 최신 마케팅을 제공하여 최적의 결과를 보장합니다.",
			imgSrc: "images/product/re/2/Picture1.png"
		},
		data: [{
			prodID: "301",
			desc: "부동산 운영관리는 고객의 선택, 실행, 지속적으로 유지하는 데 있어 편견 없는 자문을 제공하여 고객이 부동산 자산을 주도적이고 전향적으로 관리할 수 있도록 지원합니다.",
			services: ["자산가치 제고", "빌딩관리", "임대관리", "시설 및 시설 운용 감사", "재무관리", "임대인 자문", "임대 및 프로젝트 마케팅", "임차인 자문 및 대행", "기술 관련 서비스"],
			descSrc: null,
			imgSrc: "images/product/re/2/Picture2.png"
		}]
	};

	// $pRealestate.otherRe = [
	// 	{
	// 		prodID: "401",
	// 		desc: "xxxxx",
	// 		services: [],
	// 		descSrc: null,
	// 		imgSrc: "images/product/re/3/Picture2.png"
	// 	}
	// ];


	$pRealestate.subSubMenuOn = false;
	$pRealestate.selectedItem = null;

	// initial page to load
	$pRealestate.currentPageUrl = $pRealestate.routeConfig[0].templateUrl;
	$pRealestate.currentPage = $pRealestate.routeConfig[0].enName;

	// REMOVE THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pRealestate.dataSet = $pRealestate.investRE;
	/*
	// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pRealestate.getCableData($pRealestate.currentPage);
	*/


}]);
