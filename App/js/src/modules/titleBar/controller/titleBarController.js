'use strict';

angular.module('titleBar').controller('titleBarController',function($scope,$rootScope,$location){

	function titleBarController(){
		$scope.onCloseClicked=this.onCloseClicked;
		$scope.onHomeClicked=this.onHomeClicked;
		this.init();
	};

	titleBarController.prototype=
	{
		init:function(){
			$scope.subtitle = "Example App";
			$scope.onSave = this.onSave.bind(this);
		},
		onCloseClicked:function(){
			if(chrome.app.window)chrome.app.window.current().close();
		},
		onHomeClicked:function(){
			$location.path('/');
		},
		onSave:function(){
			var elem = document.getElementsByClassName('wire-canvas');
			if(elem[0])
			{
				html2canvas(elem[0], {
			onrendered: function(canvas) {
				// document.getElementById('viewer').appendChild(canvas);
				 // window.open(canvas.toDataURL());
				 var link = document.getElementById('downloadButton');
				 link.classList.remove('hide');
				 	link.href = canvas.toDataURL();
				 	link.download = "wireframe.png";
				}
			});
			}
		}
	};


	return new titleBarController();

});
