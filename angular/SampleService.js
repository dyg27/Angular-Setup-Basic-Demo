/**
 * Created by Jimmy Dave on 4/6/15.
 */

(function(){

    var sampleService = function($http,Constants) {
        var factory = {};

        var sampleDataURL = Constants.rootURL+"/users/1";

        factory.sampleJsonCallService = function(feedback) {

            var response = $http({
                method: 'GET',
                url: sampleDataURL
            }).success(function(data, status, headers, config) {
                return data;
            }).error(function(err, status, headers, config) {
                return err;
            });
            return response;
        };

        return factory;

    };

    sampleService.$inject = ['$http','Constants'];

    angular.module('sampleApp').factory('sampleService', sampleService);

}());