var mdButtonsToggleModule = angular.module('md-buttons-toggle', ['ngAria', 'ngAnimate', 'ngMaterial']);

mdButtonsToggleModule.directive('mdButtonsToggle', function(){
	return {
		template: '<div layout="row" layout-align="center center">' +
		'<md-button ng-repeat="option in items" class="md-group md-raised" ng-class="{\'{{selectedClass}}\': option.value == ngModel,left: $index == 0, right: $last}" ng-click="change(option.value)" ng-bind="option.label" ng-disabled="ngDisabled"></md-button></div>',
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			ngModel: '=',
			items: '=',
			ngDisabled: '=',
			selectedClass: '@?'
		},
		link: function(scope, elem, attrs){
			if(angular.isUndefined(scope.selectedClass)){
				scope.selectedClass = 'md-primary';
			}

			angular.forEach(scope.items, function(value, key){
				if(!angular.isObject(value)){
					scope.items[key] = {value: value, label: value};
				}
			});

			scope.change = function(key){
				scope.ngModel = key;
			};
		}
	};
});
