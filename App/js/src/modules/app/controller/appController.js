'use strict';

angular.module('app').controller('appController',function($scope,$rootScope,$http){

	function AppController(){
		this.init();
	};

	AppController.prototype=
	{
		init:function(){
			if(!$rootScope.dataJSON)$http.get('resource/data/data.json').success(this.onData.bind(this))
		},
		onData:function(data){
			$rootScope.dataJSON = data;
		}
	};


	return new AppController();

});
