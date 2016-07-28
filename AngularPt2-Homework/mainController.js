(function() {
	'use strict';

	angular
		.module('directivesExample')
		.controller('MainController', MainController);

	MainController.$inject = [
		'$location',
		'$scope'
	];

	function MainController($location, $scope) {
		$scope.test = 33;
		$scope.showInputTmpl = false;

		$scope.changeLocation = function() {
			$location.url('/notmain');
		}
	}
})();