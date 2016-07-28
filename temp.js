var module = angular.module('myApp', ['ngRoute']);

module.factory('DataTransport', DataTransport);
DataTransport.$inject = [
	'$http'
]
function DataTransport($http) {
	var factory = {
		getMessageHistory: getMessageHistory,
		sendMessage: sendMessage
	};

	return factory;

	function getMessageHistory() {
		$http({
			method: 'GET',
			url: '/messages'
		}).then(function successCallback(data) {
			$scope.messages = data.data;
			console.log($scope.messages);
		}, function errorCallback(response) {
			alert("Something went wrong");
			console.log(response);
		});
	};

	function sendMessage() {
		$http({
			method: 'POST',
			url: '/messages',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

module
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/chat', {
				templateUrl: 'frontend/templates/index.html',
				controller: 'ChatController'
			})
			.otherwise({
				redirectTo: '/chat'
			});
	}]);