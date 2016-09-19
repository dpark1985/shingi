

var h3FrameworkProviders = angular.module('h3FrameworkProviders')

.factory('$h3Account', ['$http', '$window', function ($http, $window){
	var userStatus = {
		loggedIn: false,
		userID: null
	};

	return {

		/**
		 *	@name isUserLoggedIn
		 *
		 *	@description
		 *	Returns user loggin status as userID
		 *	if no user is loggedin, it returns {userID: null}
		 *
		 *	@usage
		 *	$h3Account.isUserLoggedIn().then(function(res){
		 *		//success callback function
		 *	}, function(err){
		 *		//error callback function
		 *	});
		*/
		isUserLoggedIn: function(){
			return $http({method:'GET' ,url:'/mainModels/get/userStatus'});
		},

		/**
		 *	@name login
		 *
		 *	@description	Do Login
		 *
		 *	@param {object}
		 *
		 *	@usage
		 *	var data = {login: userID, password: userPW}
		 *	$h3Account.login(data).then(function(res){
		 *		//success callback function
		 *	}, function(err){
		 *		//error callback function
		 *	});
		*/
		login: function (data){
			return $http.post('/everyauth/login', data);
		},

		/**
		 *	@name	logout
		 *
		 *	@description	Do Logout
		 *
		 *	@usage	$h3Account.logout();
		*/
		logout: function (){
			return $window.location = '/logout';
		},

		/**
		 *	@name	refresh
		 *
		 *	@description	Refresh the whole page
		 *
		 *	@usage	$h3Account.refresh();
		*/
		refresh: function (){
			return $window.location = '/';
		},

		/**
		 *	@name register
		 *
		 *	@description	Do Register
		 *
		 *	@param {object}
		 *
		 *	@usage
		 *	var data = {login: userID, password: userPW, passwordConfirm: userPWC}
		 *	$h3Account.register(data).then(function(res){
		 *		//success callback function
		 *	}, function(err){
		 *		//error callback function
		 *	});
		*/
		register: function (data){
			return $http.post('/everyauth/register', data);
		},

		/**
		 *	@name validation
		 *
		 *	@description
		 *	Do validation within Login & Register
		 *
		 *	@param {object}
		 *	object returned from $h3Account.login() & $h3Account.register()
		 *
		 *	@return array
		 *
		 *	@usage
		 *	var errMsgs = $h3Account.validation(res.data);
		*/
		validation: function (data){
			let errMsgs = [];

			if(data.indexOf("loginError1") > 0){
				errMsgs.push("아이디 또는 비밀번호가 맞지 않습니다.");
			}

			if(data.indexOf("registerError1") > 0){
				errMsgs.push("이미 등록된 아이디 입니다.");
			}

			if(data.indexOf("registerError2") > 0){
				errMsgs.push("아이디가 정확히 입력되지 않았습니다.");
			}

			if(data.indexOf("registerError3") > 0){
				errMsgs.push("비밀번호가 정확히 입력되지 않았습니다.");
			}

			if(data.indexOf("registerError4") > 0){
				errMsgs.push("비밀번호가 8글자 이하입니다.");
			}

			if(data.indexOf("registerError5") > 0){
				errMsgs.push("비밀번호가 8글자 이하입니다.");
			}

			if(data.indexOf("registerError6") > 0){
				errMsgs.push("비밀번호가 정확히 입력되지 않았습니다.");
			}

			if(data.indexOf("registerError7") > 0){
				errMsgs.push("입력하신 비밀번호가 일치하지 않습니다.");
			}

			return errMsgs;
		},

		/**
		 *	@name setUserData
		 *
		 *	@description
		 *	Store user Data in userStatus
		 *
		 *	@param {object}
		 *	{loggedIn: [true/false], userID: [null/userID]}
		 *
		 *	@return null
		 *
		 *	@usage
		 *	$h3Account.setUserData({ loggedIn: [true/false], userID: [null/userID:string] });
		*/
		setUserData: function (data){
			userStatus.loggedIn = data.loggedIn;
			userStatus.userID = data.userID;
		},

		/**
		 *	@name getUserData
		 *
		 *	@description
		 *	Retrive user Data in userStatus
		 *
		 *	@return object
		 *
		 *	@usage
		 *	var userData = $h3Account.getUserData();
		*/
		getUserData: function (){
			return userStatus;
		}
	};
}]);
