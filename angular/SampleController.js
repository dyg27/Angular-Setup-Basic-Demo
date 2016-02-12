/**
 * Created by Jimmy on 12/02/2016.
 * Sample controller that show use of $scope and calling a service using factory.
 */

(function() {

    var sampleController = function($scope,sampleService) {

    	$scope.title = "Welcome to AngularJs basic Setup"

		$scope.subTitle = "Complete with pre-defined file paths!"

    	$scope.dependencies = ["angularjs v1.3.13","Bootstrap v3.3.6"];

    	$scope.isClick = false;

    	$scope.callWebService = function() {
    		sampleService.sampleJsonCallService().then(function(success){
                
                console.log(success.data);

                $scope.isClick = true;
                $scope.sampleJson = success.data;

            }, function(error) {
            	console.log(error);
            	$scope.sampleJson = "{error: service send error}"
            });
    	};

    };

    sampleController.$inject = ['$scope','sampleService'];

    angular.module('sampleApp').controller('sampleController', sampleController);

}());
/**
 * 
 */