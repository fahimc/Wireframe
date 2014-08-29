'use strict';

angular.module('toolMenu').controller('toolMenuController',function($scope,$rootScope){

	function toolMenuController(){
		this.init();
	};

	toolMenuController.prototype=
	{
		init:function(){
			$scope.onItemClicked=this.onItemClicked.bind(this);
			$scope.collection =$rootScope.dataJSON.items;
		},
		onItemClicked:function(item){
			 $rootScope.$broadcast('ADD_ITEM',item);
		}
	};


	return new toolMenuController();

});
