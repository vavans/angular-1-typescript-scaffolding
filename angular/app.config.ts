

angular.module('planetApp').config(['$locationProvider', '$routeProvider', ($locationProvider: ng.ILocationProvider, $routeProvider: angular.route.IRouteProvider): void => {
    $locationProvider.hashPrefix('!');
    $routeProvider.
        when('/planets', {
            template: '<main></main>'
        }).
        when('/planets/:planetId', {
            template : '<main></main>'
        }).
        otherwise('/planets');
}]);