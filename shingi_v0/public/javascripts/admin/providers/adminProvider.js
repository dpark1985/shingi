
var h3AdminFrameworkProviders = angular.module('h3AdminFrameworkProviders')


.factory('$adminFactory', function(){
	var userStatus = {
		loggedIn: false,
		userID: null
	};
	return {
		setUserData: function (data){
			if(data.userID === null){
				userStatus.loggedIn = false;
				userStatus.userID = data.userID;
			} else {
				userStatus.loggedIn = true;
				userStatus.userID = data.userID;
			}
		},
		getUserData: function(){
			return userStatus;
		}
	}
});
