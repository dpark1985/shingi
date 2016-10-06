var h3Framework = angular.module('h3Framework')

.controller('pConstructCtrl', ['$http', function ($http) {
	var $pConstruct = this;


		// cable menu config
		$pConstruct.routeConfig = [
			{name: '전기공사',	enName: "elecConstruct", templateUrl: 'templates/main/product/construct/0.html', active: true},
			{name: '통신공사', enName: "commConstruct", templateUrl: 'templates/main/product/construct/0.html', active: false},
			{name: '소방공사', enName: "fireConstruct", templateUrl: 'templates/main/product/construct/0.html', active: false},
			{name: '신재생에너지', enName: "greenConstruct", templateUrl: 'templates/main/product/construct/0.html', active: false},
			// {name: '기타', enName: "oterConstruct", templateUrl: 'templates/main/product/construct/4.html', active: false}
		];

		// Pull data from server
		// ALL DATA MUST FORMATTED AS JSON
		$pConstruct.getCableData = function(currentPage) {
			// set the rest API url
			var restAPIURL = "http://127.0.0.1:3000"+"";
			$http.get(restAPIURL).then(function(data){
				$pConstruct.dataSet = data;
			}, function(err){
				console.log(err);
			});
		};

		// clear all active class
		$pConstruct.clearActive = function () {
			for(var i=0; i<$pConstruct.routeConfig.length; i++){
				$pConstruct.routeConfig[i].active = false;
			}
		}

		// SubMenu Click
		$pConstruct.toSubMenu = function (index){
			$pConstruct.clearActive();
			$pConstruct.routeConfig[index].active 	= true;
			$pConstruct.subSubMenuOn								= false;
			$pConstruct.selectedItem 								= null;
			$pConstruct.currentPageUrl 							= $pConstruct.routeConfig[index].templateUrl;
			$pConstruct.currentPage 								= $pConstruct.routeConfig[index].enName;


			if($pConstruct.routeConfig[index].enName === "elecConstruct"){
				$pConstruct.dataSet = $pConstruct.elecConstruct;
			} else if($pConstruct.routeConfig[index].enName === "commConstruct"){
				$pConstruct.dataSet = $pConstruct.commConstruct;
			} else if($pConstruct.routeConfig[index].enName === "fireConstruct"){
				$pConstruct.dataSet = $pConstruct.fireConstruct;
			} else if($pConstruct.routeConfig[index].enName === "greenConstruct"){
				$pConstruct.dataSet = $pConstruct.greenConstruct;
			}
			/*
			// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
			$pConstruct.getCableData($pConstruct.currentPage);
			*/
		}

		// REMOVE THE FOLLOWING CODE IF DETAILS ARE PRESENTED
		// REMOVE 'ng-style="pConstruct.cursorStyle"' FROM TEMPLATE IF DETAILS ARE PRESENTED
		$pConstruct.cursorStyle = {'cursor': 'auto'};

		// Item Select
		$pConstruct.selectProduct = function (item) {
			/*
			// UNCOMMENT THE FOLLOWING CODE IF DETAILS ARE PRESENTED
			$pTrade.subSubMenuOn = true;
			*/
			$pConstruct.selectedItem = item;
		};


		/*
			THE FOLLOWING VARIABLES CAN BE DELTED ONCE REST API SERVER IS SETUP
				$pConstruct.elecConstruct
				$pConstruct.commConstruct
				$pConstruct.fireConstruct
				$pConstruct.greenConstruct
				$pConstruct.otherConstuct
		*/
		$pConstruct.elecConstruct = {
			title: "Electrical Construction",
			header: {
				strongTxt: "축적된 전기공사 노하우 및 전문인력을 기반으로 최고의 서비스를 제공합니다.",
				defaultTxt: "전기설비공사는 전기를 각 부하에 안전하게 공급하기 위한 배선공사작업을 말합니다. 전기공사는 전기공사법에 의해 자격을 갖춘 전기기술자가 직접 시공 및 관리하여야 안전하고 확실하게 사용할 수 있습니다.",
				imgSrc: "images/product/construct/0/Picture1.png"
			},
			data: [{
				prodID: "101",
				desc: "전기설비공사는 전기를 각 부하에 안전하게 공급하기 위한 배선공사작업을 말합니다. 전기공사는 전기공사법에 의해 자격을 갖춘 전기기술자가 직접 시공 및 관리하여야 안전하고 확실하게 사용할 수 있습니다.",
				services: ["수변전설비공사", "내선공사", "외선공사", "동력공사", "송전공사", "변전공사", "심야전력공사", "신호, 가로등 공사", "기타전기설비공사"],
				descSrc: null,
				imgSrc: "images/product/construct/0/Picture2.png"
			}]
		};

		$pConstruct.commConstruct = {
			title: "Telecommunication Construction",
			header: {
				strongTxt: "축적된 통신공사 노하우 및 전문인력을 기반으로 최고의 서비스를 제공합니다.",
				defaultTxt: "정보통신설비의 설치 및 유지보수에 관한 공사와 이에 따르는 부대공사로 유선, 무선, 광선 및 그 밖의 전자적 방식으로 부호, 문자, 음향 또는 영상 등의 정보를 처리하거나 송수신하기 위한 설비를 설치하는 공사입니다.",
				imgSrc: "images/product/construct/1/Picture1.png"
			},
			data: [{
				prodID: "201",
				desc: "정보통신설비의 설치 및 유지보수에 관한 공사와 이에 따르는 부대공사로 유선, 무선, 광선 및 그 밖의 전자적 방식으로 부호, 문자, 음향 또는 영상 등의 정보를 처리하거나 송수신하기 위한 설비를 설치하는 공사입니다.",
				services: ["통신설비", "방송설비", "광케이블  설비", "CCTV 설비", "통신선로설비공사", "정보망설비공사", "철도통신신호설비공사", "방송설비공사", "구내통신공사", "기타통신설비공사"],
				descSrc: null,
				imgSrc: "images/product/construct/1/Picture2.png"
			}]
		};

		$pConstruct.fireConstruct = {
			title: "Fire Fighting Construction",
			header: {
				strongTxt: "축적된 통신공사 노하우 및 전문인력을 기반으로 최고의 서비스를 제공합니다.",
				defaultTxt: "화재로부터 인명과 재산을 보호하고 화재발생시 신속하게 제압할 수 있는 소화설비, 경보설비, 피난설비, 소화용수설비, 소화활동설비 등의 소방설비관련 공사를 진행하고 있습니다.",
				imgSrc: "images/product/construct/2/Picture1.png"
			},
			data:[{
				prodID: "301",
				desc: "화재로부터 인명과 재산을 보호하고 화재발생시 신속하게 제압할 수 있는 소화설비, 경보설비, 피난설비, 소화용수설비, 소화활동설비 등의 소방설비관련 공사를 진행하고 있습니다.",
				services: ["소화설비공사", "경보설비", "소화용수설비", "소화활동설비", "화재경보설비", "피난설비", "소화설비", "방명공사"],
				descSrc: null,
				imgSrc: "images/product/construct/2/Picture2.png"
			}]
		};

		$pConstruct.greenConstruct = {
			title: "Green Construction",
			header: {
				strongTxt: "축적된 통신공사 노하우 및 전문인력을 기반으로 최고의 서비스를 제공합니다.",
				defaultTxt: "신재생에너지는 햇빛, 물, 지열 등 천연자원을 이용하여 새로운 에너지로 변환시키는 친환경 에너지입니다. 강화이엔씨에서는 태양광 발전 및 전력저장장치(ESS)등의 안전하고 품질 좋은 에너지를 공급하기위해 노력하고 있습니다.",
				imgSrc: "images/product/construct/3/Picture1.png"
			},
			data:[{
				prodID: "401",
				desc: "신재생에너지는 햇빛, 물, 지열 등 천연자원을 이용하여 새로운 에너지로 변환시키는 친환경 에너지입니다. 신기는 태양광 발전 및 전력저장장치(ESS)등의 안전하고 품질 좋은 에너지를 공급하기 위해 노력하고 있습니다.",
				services: ["풍력발전시스템 공사", "태양광발전시스템 공사"],
				descSrc: null,
				imgSrc: "images/product/construct/3/Picture3.png"
			}]
		};

		$pConstruct.oterConstruct = [
			{
				prodID: "501",
				categoy: "풍력발전시스템 공사",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: '화재발생 사실을 통보하는 기계/기구 또는 설비',
				shelter: '화재가 발생할 경우 피난하기 위하여 사용하는 기구 또는 설비',
				fireDemandWater: '화재를 진압하는데 필요한 물을 공급하거나 저장하는 설비',
				extinguishActive: '화재를 진압하거나 인명구조활동을 위하여 사용하는 설비',
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/4/Picture2.png"
			},
			{
				prodID: "502",
				categoy: "태양광발전시스템 공사",
				extinguishment: '옥내/외 소화 설비, 스프링쿨러 설비, 포소화 설비 등',
				alarm: '비상 경보/방송 설비, 누전 및 시간 경보기 설비, 자동 화재 속보 설비 등',
				shelter: '피난기구, 인명구조기구, 비상조명등, 유도표지 등',
				fireDemandWater: null,
				extinguishActive: '제연 설비, 연결 송수관/살수설비 등',
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/4/Picture3.png"
			},
		];
		$pConstruct.oterConstructList = null;


		$pConstruct.subSubMenuOn = false;
		$pConstruct.selectedItem = null;

		// initial page to load
		$pConstruct.currentPageUrl = $pConstruct.routeConfig[0].templateUrl;
		$pConstruct.currentPage = $pConstruct.routeConfig[0].enName;

		// REMOVE THE FOLLOWING CODE IF REST API SERVER IS SETUP
		$pConstruct.dataSet = $pConstruct.elecConstruct;
		/*
		// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
		$pConstruct.getCableData($pConstruct.currentPage);
		*/


}]);
