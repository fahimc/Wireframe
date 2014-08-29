'use strict';

angular.module('wireCanvas').controller('wireCanvasController',function($scope,$element){

	function wireCanvasController(){
		this.init();
	};

	wireCanvasController.prototype=
	{
		init:function(){
			$scope.$on('ADD_ITEM',this.onAddItem.bind(this));
		},
		onAddItem:function(event,item){
				var elem= $element[0];
				console.log(item);
				var div = document.createElement('div');
				div.innerHTML = item.html;
				$(div.firstChild).draggable().resizable();
				elem.appendChild(div.firstChild);
		}

	};


	return new wireCanvasController();

});
