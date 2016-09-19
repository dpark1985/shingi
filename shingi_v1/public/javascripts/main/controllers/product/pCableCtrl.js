var h3Framework = angular.module('h3Framework')

.controller('pCableCtrl', ['$http', function ($http) {
	var $pCable = this;

	// cable menu config
	$pCable.routeConfig = [
		{name: '전력케이블',	enName: "powerCable", templateUrl: 'templates/main/product/cable/0.html', active: true},
		{name: '전연케이블', enName: "insulatedWire", templateUrl: 'templates/main/product/cable/1.html', active: false},
		{name: '제어용케이블', enName: "controlCable", templateUrl: 'templates/main/product/cable/2.html', active: false},
		{name: '통신케이블', enName: "communicationCable", templateUrl: 'templates/main/product/cable/3.html', active: false},
		{name: '소방케이블', enName: "fireCable", templateUrl: 'templates/main/product/cable/4.html', active: false},
		{name: '기타', enName: "oterCable", templateUrl: 'templates/main/product/cable/5.html', active: false}
	];

	// Pull data from server
	// ALL DATA MUST FORMATTED AS JSON
	$pCable.getCableData = function(currentPage) {
		// set the rest API url
		var restAPIURL = "http://127.0.0.1:3000"+"";
		$http.get(restAPIURL).then(function(data){
			if(currentPage === "powerCable") 								{ $pCable.powerCable 					= data; }
			else if (currentPage === "insulatedWire") 			{ $pCable.insulatedWire 			= data; }
			else if (currentPage === "controlCable") 				{ $pCable.controlCable 				= data; }
			else if (currentPage === "communicationCable")	{ $pCable.communicationCable 	= data; }
			else if (currentPage === "fireCable") 					{ $pCable.fireCable 					= data; }
			else if (currentPage === "oterhCable") 					{ $pCable.otherCable 					= data; }
		}, function(err){
			console.log(err);
		});
	};

	// clear all active class
	$pCable.clearActive = function () {
		for(var i=0; i<$pCable.routeConfig.length; i++){
			$pCable.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$pCable.toSubMenu = function (index){
		$pCable.clearActive();
		$pCable.routeConfig[index].active 	= true;
		$pCable.subSubMenuOn								= false;
		$pCable.selectedItem 								= null;
		$pCable.currentPageUrl 							= $pCable.routeConfig[index].templateUrl;
		$pCable.currentPage 								= $pCable.routeConfig[index].enName;

		/*
		// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
		$pCable.getCableData($pCable.currentPage);
		*/
	}

	// Item Select
	$pCable.selectProduct = function (item) {
		$pCable.subSubMenuOn = true;
		$pCable.selectedItem = item;
	};


	/*
		THE FOLLOWING VARIABLES CAN BE DELTED ONCE REST API SERVER IS SETUP
			$pCable.powerCable
			$pCable.insulatedWire
			$pCable.controlCable
			$pCable.communicationCable
			$pCable.fireCable
	*/
	$pCable.powerCable = [
		{
			prodID: "101",
			name: "0.6/1KV TFR-CV",
			desc: "0.6/1kV 트레이용 가교폴리에틸렌 절연 난연 비닐시스 케이블(0.6/1kV TFR-CV)",
			usage: "0.6/1kV이하 전력 및 조명용, 전기설비 기술 기준령에 의한 트레이용 난연 케이블",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/0/Picture1.png"
		},
		{
			prodID: "102",
			name: "0.6/1kV HF-CO",
			desc: "0.6/1kV 저독성 가교폴리에틸렌 절연 난연 폴리올레핀시스 케이블(0.6/1kV HF-CO)",
			usage: "0.6/1kV이하 전력 및 조명용, 전기설비 기술",
			std: "KS C IEC 60502-1",
			descSrc: null,
			imgSrc: "images/product/cable/0/Picture2.png"
		},
		{
			prodID: "103",
			name: "6/10kV TFR-CV or HF-CO",
			desc: "6/10kV 트레이용 가교폴리에틸렌 절연 난연 비닐시스 케이블, <br/>6/10kV 저독성 가교폴리에틸렌 절연 난연폴리올레핀시스 케이블(6/10kV TFR-CV or HF-CO)",
			usage: "6/10kV 이하의 전력 및 조명용 회로에 사용, 전기설비 기술기준령에 의한 트레이용 난연 케이블",
			std: "KS C 3341 (HF-CO)",
			descSrc: null,
			imgSrc: "images/product/cable/0/Picture3.png"
		},
		{
			prodID: "104",
			name: "22.9kV-y TR-CNCV-W",
			desc: "22.9kV 트리억제형 전력 케이블(22.9kV-y TR-CNCV-W)",
			usage: "22.9kV-y 중성선 직접접지 또는 다중 접지의 3상 4선식 배전선로에 사용되며 직매 및 관로등의 수분과 접촉되는 장소에 적합함",
			std: "한전구매규격",

			descSrc: null,
			imgSrc: "images/product/cable/0/Picture4.png"
		},
		{
			prodID: "105",
			name: "22.9kV-y FR-CNCO-W",
			desc: "22.9kV 난연성 동심중성선 전력 케이블(22.9kV-y FR-CNCO-W)",
			usage: "22.9kV-y 중성선 직접접지 또는 다중 접지의 3상 4선식 배전선로에 사용되며 전력구 공동구, 변전소 구내 및 건물 내부의 장소에 적합함",
			std: "한전구매규격",
			descSrc: null,
			imgSrc: "images/product/cable/0/Picture4.png"
		},
		{
			prodID: "106",
			name: "22.9kV-y TR-CNCE-W",
			desc: "22.9k 수트리억제 충실 전력 케이블(22.9kV-y TR-CNCE-W)",
			usage: "22.9kV-y 중성선 직접접지 또는 다중 접지의 3상 4선식 배전선로에 사용되며 직매 및 관로등의 수분과 접촉되는 장소에 적합함",
			std: "한전구매규격",
			descSrc: null,
			imgSrc: "images/product/cable/0/Picture4.png"
		},
		{
			prodID: "107",
			name: "22.9kV-y FR-CNCO-W/AL",
			desc: "22.9kV 수트리억제 충실 알루미늄케이블(22.9kV-y FR-CNCO-W/AL)",
			usage: "22.9kV-y 중성선 직접접지 또는 다중 접지의 3상 4선식 배전선로에 사용되며 직매 및 관로등의 수분과 접촉되는 장소에 적합함",
			std: "한전구매규격",
			descSrc: null,
			imgSrc: "images/product/cable/0/Picture4.png"
		}
	];

	$pCable.insulatedWire = [
		{
			prodID: "201",
			name: "450/750V HF-IX",
			desc: "450/750V 무독성 가교폴리올레핀 절연전선(450/750V HF-IX)",
			usage: "옥내 배선용",
			std: "KS C 3341",

			descSrc: null,
			imgSrc: "images/product/cable/1/Picture3.png"
		},
		{
			prodID: "202",
			name: "450/750V HF-IX",
			desc: null,
			usage: null,
			std: null,
			descSrc: null,
			imgSrc: "images/product/cable/1/Picture4.png"
		},
		{
			prodID: "203",
			name: "0.6/1kV TFR-GV",
			desc: "0.6/1kV 트레이용 접지용 비닐 절연전선(0.6/1kV TFR-GV)",
			usage: "전기기기 및 전기 공작물 접지용",
			std: "KS C IEC 60502",

			descSrc: null,
			imgSrc: "images/product/cable/1/Picture5.png"
		}
	];

	$pCable.controlCable = [
		{
			prodID: "301",
			name: "0.6/1kV TFR-CVV",
			desc: "0.6/1kV 트레이용 비닐절연 난연 비닐 시스 제어 케이블(0.6/1kV TFR-CVV)",
			usage: "발전소, 변전소, 공장 등에서 기기의 원격조작 및 자동제어를 행하는 일반적인 제어 회로중 기계적 강도 및 신뢰성을 요구하는 회로에 사용되는 케이블로서 특히 난연 특성이 요구되는 트레이에 설치할 경우에 적합하므로 화재시 불꽃이 케이블에 전도됨으로 인한 2차 재해확산을 방지할 수 있음",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/2/Picture3.png"
		},
		{
			prodID: "302",
			name: "0.6/1kV TFR-CVVS",
			desc: "0.6/1kV 트레이용 비닐절연 난연 비닐 시스 동편조차폐 제어 케이블(0.6/1kV TFR-CVVS)",
			usage: "0.6/1kV 이하의 제어회로 중 전송되는 신호가 약한 경우 타전선 및 전기철도나 전차선 등의 유도 장해에 의한 제어 대상이 오동작을 일으킬 위험이 있는 제어회로에 사용하고 특히 굴곡성이 요구되는 회로에 사용되는 케이블로서 난연성이 요구되는 트레이에 설치할 경우에 적합하므로 화재시 불꽃이 케이블에 전도됨으로 인한 2차 재해 확산을 방지할 수가 있음(케이블 트레이, Conduct, Duct 등에도 사용)",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/2/Picture4.png"
		},
		{
			prodID: "303",
			name: "0.6/1kV TFR-GV",
			desc: "0.6/1kV 트레이용 접지용 비닐 절연전선(0.6/1kV TFR-GV)",
			usage: "전기기기 및 전기 공작물 접지용",
			std: "KS C IEC 60502",
			descSrc: null,
			imgSrc: "images/product/cable/2/Picture5.png"
		},
		{
			prodID: "304",
			name: "0.6_1KV TFR-CVV-AMS",
			desc: null,
			usage: null,
			std: null,
			descSrc: null,
			imgSrc: "images/product/cable/2/Picture6.png"
		},
		{
			prodID: "305",
			name: "0.6/1kV HF-CCO",
			desc: "0.6/1kV 가교폴리에틸렌절연 저독성 난연 폴리올레핀 시스 제어 케이블(0.6/1kV HF-CCO)",
			usage: "0.6/1kV 이하의 전력 및 조명용 회로에 사용",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/2/Picture7.png"
		},
	];

	$pCable.communicationCable = [
		{
			prodID: "401",
			name: "고발포 3중차페 저손실 동축(HFBT_FBT)",
			desc: null,
			usage: null,
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/3/Picture3.png"
		},
		{
			prodID: "402",
			name: "고주파 동축 케이블(EXC)",
			desc: null,
			usage: null,
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/3/Picture4.png"
		},
		{
			prodID: "403",
			name: "CPEV",
			desc: null,
			usage: null,
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/3/Picture5.png"
		}
	];

	$pCable.fireCable = [
		{
			prodID: "501",
			name: "0.6/1KV (TFR-3, NFR-3)",
			desc: "0.6/1kV 트레이용 가교폴리에틸렌절연 난연 비닐시스 내열 케이블<br/>0.6/1kV 가교폴리에틸렌절연 저독성 난연 폴리올레핀 시스 내열 케이블  (0.6/1kV TFR-3, NFR-3)",
			usage: "옥내소화전, 스프링쿨러, 배연설비등 소방설비의 비상전원 및 조작회로에 사용. 전기설비기술 기준령에 의한 트레이용 난연케이블.",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/4/Picture3.png"
		},
		{
			prodID: "502",
			name: "0.6/1kV (TFR-8, NFR-8)",
			desc: "0.6/1kV 트레이용 가교폴리에틸렌절연 난연 비닐시스 내열 케이블<br/>0.6/1kV 가교폴리에틸렌절연 저독성 난연 폴리올레핀 시스 내열 케이블  (0.6/1kV TFR-3, NFR-3)",
			usage: "옥내소화전, 스프링쿨러, 배연설비등 소방설비의 비상전원 및 조작회로에 사용. 전기설비기술 기준령에 의한 트레이용 난연케이블.",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/4/Picture4.png"
		}
	];

	$pCable.otherCable = [
		{
			prodID: "601",
			name: "0.6/1KV (TFR-3, NFR-3)",
			desc: "0.6/1kV 트레이용 가교폴리에틸렌절연 난연 비닐시스 내열 케이블<br/>0.6/1kV 가교폴리에틸렌절연 저독성 난연 폴리올레핀 시스 내열 케이블  (0.6/1kV TFR-3, NFR-3)",
			usage: "옥내소화전, 스프링쿨러, 배연설비등 소방설비의 비상전원 및 조작회로에 사용. 전기설비기술 기준령에 의한 트레이용 난연케이블.",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/5/Picture3.png"
		},
		{
			prodID: "602",
			name: "0.6/1kV (TFR-8, NFR-8)",
			desc: "0.6/1kV 트레이용 가교폴리에틸렌절연 난연 비닐시스 내열 케이블<br/>0.6/1kV 가교폴리에틸렌절연 저독성 난연 폴리올레핀 시스 내열 케이블  (0.6/1kV TFR-3, NFR-3)",
			usage: "옥내소화전, 스프링쿨러, 배연설비등 소방설비의 비상전원 및 조작회로에 사용. 전기설비기술 기준령에 의한 트레이용 난연케이블.",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/5/Picture4.png"
		}
	];


	$pCable.subSubMenuOn = false;
	$pCable.selectedItem = null;

	// initial page to load
	$pCable.currentPageUrl = $pCable.routeConfig[0].templateUrl;
	$pCable.currentPage = $pCable.routeConfig[0].enName;
	/*
	// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pCable.getCableData($pCable.currentPage);
	*/



}]);
