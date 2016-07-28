(function() {
	angular
		.module('footballApp')
		.directive('footballersData', footballersData);

	footballersData.$inject = [
		'footballersFactory'		
	];

	function footballersData(scope) {
		return {
			restrict: 'E',
			templateUrl: './frontend/templates/footballersData.html',
			link: function(scope) {
				var footballers = footballersFactory.data;
			}
		};
	}

})();