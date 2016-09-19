
var h3FrameworkProviders = angular.module('h3FrameworkProviders')

.factory('$h3socket', function(){
	var socket;

	return {
		setSocket: function(io){
			socket = io;
		},
		getSocket: function(){
			return socket;
		}
	};
});
