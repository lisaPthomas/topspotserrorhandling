(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['TopSpotsFactory', 'toastr'];

    /* @ngInject */
    function TopSpotsController(TopSpotsFactory, toastr) {
        var vm = this;
        vm.title = 'TopSpotsController';

        activate();

        ////////////////

        function activate() {

            getTopSpots();

        }

        // Add a custom error handler for the use case where no data was returned by the $http call.
        // Add a success toastr to the controller to render when the call completes without error.
        // Add an info toastr to the controller to render when the call completes but with no data returned.
        // Add an error toastr to the controller to render when the call errors out.


        function getTopSpots() {

            TopSpotsFactory.getTopSpots().then(
                function(response) {

                    vm.topspots = response.data;
                    toastr.success('Data was found!'); //can have the same name

                },
                function(error) {
                    if (error.data) {
                        toastr.error('Sorry, but there was a problem: ' + error.data);
                    } else {
                        toastr.info('Data not found');
                    }
                }
            )
        }
    }
})();
//Reviewed by TR and AP
