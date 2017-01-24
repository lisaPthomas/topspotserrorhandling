(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('TopSpotsFactory', TopSpotsFactory);

    TopSpotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function TopSpotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots() {

            var defer = $q.defer(); //dont have to use $q
            //data is in property .promise at the end
            $http({
                method: 'GET',
                url: '../topspots.json'
            }).then(function(response) {

                if (typeof response.data == 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('No Data Found');
                }

            }, function(error) {
                defer.reject(error);
            });

            return defer.promise;
        }
    }
})();
