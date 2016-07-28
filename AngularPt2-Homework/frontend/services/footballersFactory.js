(function() {
	var module = angular.module('footballApp', ['ngRoute']);

	module.factory('footballersFactory', footballersFactory);
	footballersFactory.$inject = [
		'$http'
	]
	function footballersFactory($http) {
		return {
			getFootballers: function() {
				return $http({ 
					method: "GET",
					url: "/footballers"
				}).success(function(data) {
					footballers = data;
					console.log(footballers);
				});
			}	
		}
	}
})();
 