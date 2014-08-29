'use strict';

angular.module('wireCanvas').directive('wireCanvas', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'js/src/modules/wireCanvas/template/wireCanvas.html',
		scope: {},
		controller: 'wireCanvasController'
	}
});
