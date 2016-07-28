(function() {
    'use strict';

    angular
        .module('directivesExample')
        .controller('NotMainController', NotMainController);

    NotMainController.$inject = [
        '$scope'
    ];

    function NotMainController($scope) {
        var tempActive = {};
        $scope.test = 'NotMainController!';

        $scope.currencyArray = [];
        $scope.name = 'john doe'
        $scope.anotherName = 'SHERLOCK HOLMES';

        $scope.price = 123444.21;

        $scope.arrayToOrder = [{
            name: 'France',
            population: 66
        }, {
            name: 'Ukraine',
            population: 41
        }, {
            name: 'England',
            population: 53
        }, {
            name: 'Germany',
            population: 81
        }];

        $scope.imgNumber = 0;

        $scope.listForSelect = [{
            id: 1,
            label: 'One',
            subItem: {
                name: 'subItem1'
            }
        }, {
            id: 1,
            label: 'Two',
            subItem: {
                name: 'subItem2'
            }
        }, {
            id: 1,
            label: 'Three',
            subItem: {
                name: 'subItem3'
            }
        }];

        $scope.array = [{
            name: 'One',
            isActive: false
        }, {
            name: 'One',
            isActive: false
        }, {
            name: 'Three',
            isActive: false
        }];

        $scope.submitEvent = function() {
            alertify.success('submit event');
        };

        $scope.clickEvent = function() {
            alertify.warning('click event');
        };

        $scope.changeEvent = function(item) {
            alertify.error(item);
        };

        $scope.lostFocusEvent = function(event) {
            alertify.message('Lost focus ' + event.target);
        };

        $scope.setActive = function(item) {
            tempActive.isActive = false;
            tempActive = item;
            tempActive.isActive = true;
        };

        $scope.changeImage = function(number) {
            $scope.imgNumber = Math.floor(Math.random() * 4);
            if (number === $scope.imgNumber) {
                $scope.changeImage(number);
            }
        };
    }

})();