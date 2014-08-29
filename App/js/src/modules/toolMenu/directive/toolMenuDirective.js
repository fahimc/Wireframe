'use strict';

angular.module('toolMenu').directive('toolMenu', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'js/src/modules/toolMenu/template/toolMenu.html',
		scope: {},
		controller: 'toolMenuController'
	}
});
